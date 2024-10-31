import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera"
import { Text, View } from "react-native"
import { styles } from "./styles";
import { useNavigation, type RouteProp } from "@react-navigation/native";
import type { BarCodeScannerResult } from "expo-barcode-scanner";
import { Modal } from "../Modal";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes/RootNavigator";

interface CameraCodProdutoProps {
    route: RouteProp<{
        Camera: { title: string };
    }>;
}

export const Camera = ({ route }: CameraCodProdutoProps) => {
    const { title } = route.params;
    const [status, requestPermission] = useCameraPermissions();
    const [codigoDeBarras, setCodigoDeBarras] = useState<string>("");
    const [openModal, setVisibleModal] = useState<boolean>(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    if (!status) {
        return <View><Text>Solicitando permissão de câmera...</Text></View>;
    }

    if (!status.granted) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>Sem acesso à câmera</Text>
                <Modal 
                    duration={200} 
                    handleClose={setVisibleModal} 
                    options={{ type: "slide", from: "top" }} 
                    visibleModal={openModal} 
                    title="Solicitar permissão" 
                    onSubmit={requestPermission} />
            </View>
        );
    }

    const handleScan = (data: BarCodeScannerResult) => {
        setCodigoDeBarras(data.data)
        navigation.replace('Clientes');
    }

    return (
        <CameraView
            onBarcodeScanned={handleScan}
            style={styles.camera}
            barcodeScannerSettings={{
                barcodeTypes: ["ean13", "code128"]
            }}
            pictureSize={"1920x1080"}
        >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.scannerOverlay} />
            <View style={styles.scannerBorderTop} />
            <View style={styles.scannerBorderBottom} />
            <Text style={styles.textRomaneioInfo}>Romaneio {codigoDeBarras}</Text>
        </CameraView>
    )
}