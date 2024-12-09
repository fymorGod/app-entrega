import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { Divider } from '../Divider';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../routes/RootNavigator';

// Tipagem correta para as propriedades esperadas
type CardInfoProps = {
  status?: string;
  romaneio?: string;
  store?: string;
  client_name?: string;
  client_cgc?: string;
  delivery_price?: number;
  delivery_type?: string;
};

const buttonGradients = {
  Entregue: ['#1ced26', '#34C94A', '#0F8120'] as const,
  'Entregue Parcial': ['#EFCD0F', '#eecc0b', '#EA6C1E'] as const,
  'Não Entregue': ['#ED1C24', '#ec060e', '#760000'] as const,
  default: ['#f2f2f2', '#e0e0e0', '#d0d0d0'] as const,
};

export const CardInfo: React.FC<CardInfoProps> = ({
  status,
  romaneio,
  store,
  client_name,
  client_cgc,
  delivery_price,
  delivery_type,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Animated.View entering={FadeInLeft.delay(300)} style={styles.containerCardInfo}>
      {/* Informações principais */}
      <View style={styles.cardInfo}>
        {/* Informações no formato Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoColumn}>
            <Text style={styles.labelText}>Romaneio</Text>
            <Text style={styles.valueText}>{romaneio || 'N/A'}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.labelText}>Loja</Text>
            <Text style={styles.valueText}>{store || 'N/A'}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.labelText}>Nome do Cliente</Text>
            <Text style={styles.valueText}>{client_name || 'N/A'}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.labelText}>CPF/CNPJ</Text>
            <Text style={styles.valueText}>{client_cgc || 'N/A'}</Text>
          </View>
        </View>

        <Text style={styles.addressText}>
          {delivery_type || 'N/A'}
        </Text>

        {/* Complemento para preço */}
        <View style={styles.complementRow}>
          <Text style={styles.labelText}>Preço de entrega</Text>
          <Text style={styles.valueText}>
            {delivery_price ? `R$ ${delivery_price.toFixed(2)}` : 'N/A'}
          </Text>
        </View>

        {/* Botões com base no status */}
        <View style={styles.actionButtonsContainer}>
          {(['Entregue', 'Entregue Parcial', 'Não Entregue'] as const).map((buttonText) => {
            const isActive = status === buttonText;
            const colors = isActive ? buttonGradients[buttonText] : buttonGradients.default;

            return (
              <LinearGradient
                key={buttonText}
                colors={colors}
                style={styles.actionButton}
                start={{ x: 0, y: 2 }}
                end={{ x: 1, y: -0.7 }}
              >
                <TouchableOpacity>
                  <Text style={styles.actionButtonText}>{buttonText}</Text>
                </TouchableOpacity>
              </LinearGradient>
            );
          })}
        </View>

        <Divider />

        {/* Container de ações para localização e fotos */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Galeria')}>
            <Icon name="photo-library" size={24} color="red" />
            <Text style={styles.iconText}>Fotos</Text>
          </TouchableOpacity>
          <Divider color="gray" opacity={0.5} thickness={1} marginVertical={0} orientation="vertical" />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="location-on" size={24} color="red" />
            <Text style={styles.iconText}>Localização</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};
