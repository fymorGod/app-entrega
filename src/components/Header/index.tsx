import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
    primary: React.ComponentProps<typeof FontAwesome5>['name'];
    secondary?: React.ComponentProps<typeof FontAwesome5>['name'];
}

export const Header = ({ primary, secondary }: HeaderProps) => {
    return (
        <LinearGradient 
        start={{ x: 0, y: 2 }}
        end={{ x: 1, y: -0.7 }}
        colors={['#ED1C24', '#ec060e', '#760000']} 
        style={styles.header}>
            <FontAwesome5 name={primary} size={28} style={styles.iconLeft}/>
            <Text style={styles.textHeader}>Clientes</Text>
            <FontAwesome5 name={secondary} size={28} style={styles.iconRight}/>
    </LinearGradient>
    )
}