import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes/RootNavigator";

interface HeaderProps {
    primary: React.ComponentProps<typeof FontAwesome5>['name'];
    secondary?: React.ComponentProps<typeof FontAwesome5>['name'];
    title: string
}

export const Header = ({ primary, secondary, title }: HeaderProps) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <LinearGradient
        start={{ x: 0, y: 2 }}
        end={{ x: 1, y: -0.7 }}
        colors={['#ED1C24', '#ec060e', '#760000']}
        style={styles.header}
        >
        {primary && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.boxIconLeft}>
                <FontAwesome5 name={primary} size={28} style={styles.iconLeft} />
            </TouchableOpacity>
        )}
    
        <View style={styles.textHeaderContainer}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    
        {secondary ? (
            <TouchableOpacity onPress={() => navigation.navigate('Requisicoes')} style={styles.boxIconRight}>
                <FontAwesome5 name={secondary} size={28} style={styles.iconRight} />
            </TouchableOpacity>
        ) : (
            <View style={styles.boxIconRight} /> 
        )}
    </LinearGradient>
    
    )
}