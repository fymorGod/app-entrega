import { Alert, FlatList, Linking, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";
import { CardInfo } from "../../components/CardInfo";
import { useSalesStore } from "../../store/vendaStore";
import { useEffect, useState } from "react";
import type { RootStackParamList } from "../../routes/RootNavigator";
import type { RouteProp } from "@react-navigation/native";

type Props = {
    route: RouteProp<RootStackParamList, 'Vendas'>;
};

export const Vendas = ({ route }: Props) => {
    const { salesData } = useSalesStore();
    const [clientData, setClientData] = useState<any>(null);
    const [filteredSales, setFilteredSales] = useState<any[]>([]);

    const { cpf } = route.params;

    // Função para buscar dados do cliente e suas vendas
    useEffect(() => {
        if (salesData && cpf) {
            const client = salesData.find((item) => item.cpf === cpf);

            if (client) {
                setClientData({
                    client_name: client.vendas?.[0]?.client_name || "N/D",
                    client_phone: client.vendas?.[0]?.client_phone || "N/D",
                    cpf: client.cpf
                });
                console.log(client)
                setFilteredSales(client.vendas || []); // Filtrar apenas as vendas do cliente
            } else {
                Alert.alert("Erro", "Cliente não encontrado.");
            }
        }
    }, [salesData, cpf]);

    const handlePhonePress = () => {
        const phoneNumber = 'tel:(98)987651234';

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
                <FontAwesome5 name={"user"} size={32} style={styles.iconLeft} />
                <View style={styles.boxInfoDetails}>
                    <View style={styles.contentDetails}>
                        <Text style={styles.title}>{clientData?.client_name || "Carregando..."}</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>CPF</Text>
                        <Text style={styles.info}>{clientData?.cpf || "Carregando..."}</Text>
                    </View>
                    <View style={styles.contentDetails}>
                        <Text style={styles.subtitle}>Fone</Text>
                        <Text style={styles.info}>{clientData?.client_phone || "Carregando..."}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handlePhonePress}>
                    <FontAwesome5 name={"phone"} size={32} style={styles.iconRight} />
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

            <FlatList
                data={filteredSales} // Apenas as vendas do cliente filtrado
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => (
                    <CardInfo
                        status={item.status}
                        romaneio={item.romaneio}
                        store={item.store}
                        client_name={item.client_name}
                        client_cgc={item.client_cgc}
                        delivery_price={item.delivery_price}
                        delivery_type={item.delivery_type}
                    />
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};
