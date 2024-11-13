import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { Divider } from '../Divider';

export const CardInfo: React.FC = () => {
    return (
        <View style={styles.containerCardInfo}>
            <View style={styles.cardInfo}>
                <View style={styles.infoGrid}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.labelText}>Dav</Text>
                        <Text style={styles.valueText}>818569</Text>
                    </View>
                    <View style={styles.infoColumn}>
                        <Text style={styles.labelText}>PreNota</Text>
                        <Text style={styles.valueText}>527365A</Text>
                    </View>
                    <View style={styles.infoColumn}>
                        <Text style={styles.labelText}>Nota fiscal</Text>
                        <Text style={styles.valueText}>738275</Text>
                    </View>
                    <View style={styles.infoColumn}>
                        <Text style={styles.labelText}>Emissão</Text>
                        <Text style={styles.valueText}>29/10/2024</Text>
                    </View>
                </View>
                <Text style={styles.addressText}>Rua 09 QD 10 AP 1B LOTE 11 RES N, 1 TRIZEDELA DA MAIOBA</Text>
                <View style={styles.complementRow}>
                    <Text style={styles.labelText}>Complemento</Text>
                    <Text style={styles.valueText}>Res Novo Aurora I São Jose Ribamar, MA</Text>
                </View>

                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Entregue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Entregue Parcial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Não Entregue</Text>
                    </TouchableOpacity>
                </View>

                <Divider />

                <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="photo-library" size={24} color="red" />
                        <Text style={styles.iconText}>Fotos</Text>
                    </TouchableOpacity>
                    <Divider color="gray" opacity={0.5} thickness={1} marginVertical={0} orientation='vertical'/>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="location-on" size={24} color="red" />
                        <Text style={styles.iconText}>Localização</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
