import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styes";
import { Header } from "../../components/Header";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
interface HeaderProps {
    primary: React.ComponentProps<typeof FontAwesome5>['name'];
    secondary?: React.ComponentProps<typeof FontAwesome5>['name'];
}

export const ClientePage = ({primary='store-alt', secondary="info-circle"}: HeaderProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
               <Header primary={'arrow-left'} secondary={'cloud-download-alt'} />
                <View style={styles.infoData}>
                    <FontAwesome5 name={primary} size={42} style={styles.iconLeft} />
                    <View style={styles.boxInfoDetails}>
                        <View style={styles.contentDetails}>
                            <Text style={styles.title}>Romaneio</Text>
                            <Text style={styles.info}>20240816105949113</Text>
                        </View>
                        <View style={styles.contentDetails}>
                            <Text style={styles.subtitle}>Veículo</Text>
                            <Text style={styles.info}>60</Text>
                        </View>
                    </View>
                    <View>
                        <FontAwesome5 name={secondary} size={32} style={styles.iconRight}/>
                    </View>
                </View>

                <View style={styles.sectionEntregas}>
                    <Text style={styles.tagInfo}>Entregas do dia</Text>
                
                    <LinearGradient  
                        start={{ x: 0, y: 2 }}
                        end={{ x: 1, y: 0 }}
                        colors={[ '#1ced26','#34C94A', '#0F8120']} 
                        style={styles.cardInfo}
                        >
                            <View style={styles.wrapperInfo}>
                                <View style={styles.ordem}>
                                    <Text style={styles.entrega}>Ordem entrega</Text>
                                    <Text style={styles.entrega}>1ª</Text>
                                </View>
                                <View style={styles.status}>
                                    <Text style={styles.textStatus}>Status</Text>
                                    <Text style={styles.tagStatus}>Entregue</Text>
                                </View>
                                <View style={styles.clientInfo}>
                                    <Text style={styles.clientText}>Eduardo Henrique Castro Mendes</Text>
                                    <Text style={styles.clientBairro}>Trizedela da maioba</Text>
                                </View>
                            </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}