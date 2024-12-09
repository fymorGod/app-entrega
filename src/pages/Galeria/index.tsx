import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { CameraView, type CameraType } from "expo-camera";
import Ionicons from '@expo/vector-icons/Ionicons';

export const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<CameraType>('back');

  const [cameraStats, setCameraStats] = useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const openCamera = async () => {
    setCameraStats(true)
  }

  const handleOpenCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets) {

      setImages([...images, result.assets[0].uri]);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
        const options = { quality: 1, base64: true, skipProcessing: true };
        const data = await cameraRef.current.takePictureAsync(options);
        if (data?.uri) {
          setImages(prevImage => [...prevImage, data.uri]);
          setCameraStats(false);
        } else {
          console.error("Erro ao capturar a imagem: Dados retornados são inválidos.");
        }
    }
  };
  

  const handleSendImages = async () => {
    try {
      const formData = new FormData();
      images.forEach((uri, index) => {
        formData.append(`image_${index}`, {
          uri,
          name: `image_${index}.jpg`,
          type: 'image/jpeg',
        } as any);
      });

      const response = await axios.post('https://sua-api.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Imagens enviadas com sucesso:', response.data);
      alert('Imagens enviadas com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar imagens:', error);
      alert('Erro ao enviar imagens.');
    }
  };
  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };
  const renderImage = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.imageWrapper}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setSelectedImage(item)}
      >
        <Image source={{ uri: item }} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => handleRemoveImage(index)}
      >
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Permissão negada para acessar a câmera.</Text>;
  }


  return (
    <View style={styles.container}>
      <Header title='Galeria' primary={'arrow-left'} />
      {
        cameraStats ? <CameraView style={{ flex: 1, width: '100%' }} facing={facing} ref={cameraRef} pictureSize={"1920x1080"} >
            <View
              style={{
                  width: "100%",
                  height: 200,
                  position: 'absolute',
                  bottom: 0,
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 40
              }}> 
               <TouchableOpacity onPress={() => setCameraStats(false)} style={{borderWidth: 2, borderColor: "#5ea9ff", backgroundColor: '#fff', height: 60, width: 100, borderRadius: 4,alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#000', textAlign: 'center', fontWeight: '500', fontSize: 18}}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={takePicture} style={{borderWidth: 2, borderColor: "#5ea9ff",backgroundColor: '#fff', height: 80, width: 80, borderRadius: 80, alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="camera" size={35} color="black" />
              </TouchableOpacity>
             
          </View>
        </CameraView>
          : (
            <>
              <View style={styles.header}>
                <Text style={styles.subtitle}>Total de fotos: {images.length}</Text>
              </View>

              {images.length === 0 ? (
                <Text style={styles.noImagesText}>Não há fotos registradas</Text>
              ) : (
                <FlatList
                  data={images}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderImage}
                  numColumns={2}
                  contentContainerStyle={styles.gallery}
                />
              )}

              <TouchableOpacity style={styles.floatingButton} onPress={openCamera}>
                <Text style={styles.cameraIcon}>📷</Text>
              </TouchableOpacity>

              {images.length > 0 && (
                <TouchableOpacity style={styles.uploadButton} onPress={handleSendImages}>
                  <Text style={styles.uploadButtonText}>Enviar imagens</Text>
                </TouchableOpacity>
              )}

              <Modal
                visible={!!selectedImage}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setSelectedImage(null)}
              >
                <View style={styles.modalContainer}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setSelectedImage(null)}
                  >
                    <Text style={styles.closeButtonText}>Fechar</Text>
                  </TouchableOpacity>
                  {selectedImage && (
                    <Image source={{ uri: selectedImage }} style={styles.fullImage} />
                  )}
                </View>
              </Modal>
            </>
          )
      }
    </View>
  );
};