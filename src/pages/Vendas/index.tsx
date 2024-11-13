import { Alert, Linking, Text, TouchableOpacity, View } from "react-native"
import { Header } from "../../components/Header"

import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";
import { CardInfo } from "../../components/CardInfo";

export const Vendas = () => {

    const handlePhonePress = () => {
        const phoneNumber = 'tel:(98)987651234'; // Formato adequado para o discador

        Linking.openURL(phoneNumber).catch(() =>
            Alert.alert('Erro', 'Não foi possível abrir o discador.')
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <Header primary={'arrow-left'} title="Vendas" />
            </View>
            <View style={styles.infoData}>
                <FontAwesome5 name={'user'} size={32} style={styles.iconLeft} />
                <View style={styles.boxInfoDetails}>
                    <View style={styles.contentDetails}>
                        <Text style={styles.title}>Eduardo Henrique Castro Mendes</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>CPF</Text>
                        <Text style={styles.info}>123456789001</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>Fone</Text>
                        <Text style={styles.info}>(98) 9 8765-1234</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handlePhonePress}>
                    <FontAwesome5 name={'phone'} size={32} style={styles.iconRight} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.boxVendedorInfo}>
                <FontAwesome5 name={'user-tie'} size={32} style={styles.iconLeft} />
                <View style={styles.boxInfoDetails}>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>Vendedor</Text>
                        <Text style={styles.info}>MARCOS PAULO SILVA E SILVA</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>Fone</Text>
                        <Text style={styles.info}>(98) 9 8765-1234</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handlePhonePress}>
                    <FontAwesome5 name={'phone'} size={32} style={styles.iconRight} />
                </TouchableOpacity>
            </View>
            <CardInfo />
        </View>
    )
}