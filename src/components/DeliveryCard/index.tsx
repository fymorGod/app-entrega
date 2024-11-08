import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../routes/RootNavigator';

interface DeliveryCardProps {
    order: string;
    status: string;
    clientName: string;
    clientNeighborhood: string;
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({
    order,
    status,
    clientName,
    clientNeighborhood
}) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const borderColor = status === 'Entregue'
        ? '#1ced26'
        : status === 'Em trânsito'
            ? '#EFCD0F'
            : '#ED1C24';

    const backgroundColor = status === 'Entregue'
        ? '#1ced26'
        : status === 'Em trânsito'
            ? '#EFCD0F'
            : '#ED1C24';

    const color = status === 'Entregue'
        ? '#1ced26'
        : status === 'Em trânsito'
            ? '#EFCD0F'
            : '#ED1C24';

    const gradientColors = order === '1ª'
        ? ['#1ced26', '#34C94A', '#0F8120']
        : order === '2ª'
            ? ['#EFCD0F', '#eecc0b', '#EA6C1E']
            : ['#ED1C24', '#ec060e', '#760000'];

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Vendas')}>
            <LinearGradient
                start={{ x: 0, y: 2 }}
                end={{ x: 1, y: 0 }}
                colors={gradientColors}
                style={[styles.cardInfo, { borderColor, backgroundColor }]}
            >
                <View style={styles.wrapperInfo}>
                    <View style={styles.ordem}>
                        <Text style={styles.entrega}>Ordem entrega</Text>
                        <Text style={styles.entrega}>{order}</Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={[styles.textStatus]}>Status</Text>
                        <View style={styles.boxTagStatus}>
                            <Text style={[styles.tagStatus, { color }]}>{status}</Text>
                        </View>
                    </View>
                    <View style={styles.clientInfo}>
                        <Text style={styles.clientText}>{clientName}</Text>
                        <Text style={styles.clientBairro}>{clientNeighborhood}</Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};
