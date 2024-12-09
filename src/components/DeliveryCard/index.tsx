import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
interface DeliveryCardProps {
    deliveryOrder: number;
    status: string;
    clientName: string;
    neighborhood: string;
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({
    deliveryOrder,
    status,
    clientName,
    neighborhood,
}) => {

    const borderColor =
        status === "T" ? "#1ced26" : status === "P" ? "#EFCD0F" : "N";

    let gradientColors: [string, string, string];

    if (status === "T") {
        gradientColors = ['#1ced26', '#34C94A', '#0F8120'];
    } else if (status === "P") {
        gradientColors = ['#EFCD0F', '#eecc0b', '#EA6C1E'];
    } else {
        gradientColors = ['#ED1C24', '#ec060e', '#760000'];
    }
    
    const getStatusText = (status: string) => {
        switch (status) {
            case "T":
                return "Entregue";
            case "P":
                return "Entrega Parcial";
            case "N":
                return "Não Entregue";
            default:
                return "Desconhecido";
        }
    };

    const getTextColor = (status: string): string => {
        switch (status) {
            case "T":
                return "#0F8120";
            case "P":
                return "#EA6C1E";
            case "N":
                return "#ED1C24";
            default:
                return "#000000";
        }
    };
    return (
        <View style={[styles.borderWrapper, { borderColor }]}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={gradientColors}
                style={styles.cardInfo}
            >
                <View style={styles.wrapperInfo}>
                    <View style={styles.ordem}>
                        <Text style={styles.entrega}>Ordem entrega</Text>
                        <Text style={styles.entrega}>{deliveryOrder}</Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={styles.textStatus}>Status</Text>
                        <View style={styles.boxTagStatus}>

                            <Text style={[styles.tagStatus, { color: getTextColor(status) }]}>
                                {getStatusText(status)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.clientInfo}>
                        <Text style={styles.clientText}>{clientName}</Text>
                        <Text style={styles.clientBairro}>{neighborhood}</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};
