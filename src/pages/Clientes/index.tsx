import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';
import { DeliveryCard } from '../../components/DeliveryCard';
import Animated, { FadeInDown, FadeInRight, FadeOutDown, FadeOutRight } from 'react-native-reanimated';

interface HeaderProps {
    primary: React.ComponentProps<typeof FontAwesome5>['name'];
    secondary?: React.ComponentProps<typeof FontAwesome5>['name'];
}

const deliveriesData = [
    { id: '1', ordem: '1ª', status: 'Entregue', nomeCliente: 'Eduardo Henrique Castro Mendes', bairro: 'Trizedela da maioba' },
    { id: '2', ordem: '2ª', status: 'Em trânsito', nomeCliente: 'João Silva', bairro: 'Centro' },
    { id: '3', ordem: '3ª', status: 'Pendente', nomeCliente: 'Maria Souza', bairro: 'Jardim América' },
    { id: '4', ordem: '4ª', status: 'Pendente', nomeCliente: 'Maria Souza', bairro: 'Jardim América' },
    { id: '5', ordem: '5ª', status: 'Pendente', nomeCliente: 'Maria Souza', bairro: 'Jardim América' },
];

export const ClientePage = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const toggleTooltip = () => {
        setTooltipVisible(!tooltipVisible);
    };

    return (
        <View style={styles.container}>
            <Header primary={'arrow-left'} secondary={'cloud-download-alt'} title='Clientes'/>

            <View style={styles.infoData}>
                <FontAwesome5 name={'store-alt'} size={32} style={styles.iconLeft} />
                <View style={styles.boxInfoDetails}>
                    <View style={styles.contentDetails}>
                        <Text style={styles.title}>Romaneio</Text>
                        <Text style={styles.info}>20240816105949113</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>Veículo</Text>
                        <Text style={styles.info}>60</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>Data da saída</Text>
                        <Text style={styles.info}>09/11/2024 - Manhã</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={toggleTooltip}>
                    <FontAwesome5 name={"users"} size={32} style={styles.iconRight} />
                </TouchableOpacity>


                {tooltipVisible && (
                    <Animated.View
                        entering={FadeInRight.delay(150)}
                        exiting={FadeOutRight.duration(200)}
                        style={styles.tooltipContainer}
                    >
                        <Text style={styles.tooltipTitle}>Informações da Equipe</Text>

                        <View style={styles.boxTooltipInfo}>
                            <Text style={styles.tooltipText}>Roberto Chagas</Text>
                            <Text style={styles.tooltipText}>Motorista</Text>
                        </View>
                        <View style={styles.boxTooltipInfo}>
                            <Text style={styles.tooltipText}>Wandenilson Silva</Text>
                            <Text style={styles.tooltipText}>Ajudante</Text>
                        </View>
                        <View style={styles.boxTooltipInfo}>
                            <Text style={styles.tooltipText}>Alex Rocha</Text>
                            <Text style={styles.tooltipText}>Ajudante</Text>
                        </View>
                    </Animated.View>
                )}
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.tagInfo}>Entregas do dia</Text>
                <Animated.FlatList
                    data={deliveriesData}
                    keyExtractor={(item) => item.id}
                    entering={FadeInDown.duration(700).delay(300)}
                    exiting={FadeOutDown}
                    renderItem={({ item }) => (
                        <DeliveryCard
                            order={item.ordem}
                            status={item.status}
                            clientName={item.nomeCliente}
                            clientNeighborhood={item.bairro}
                        />
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};
