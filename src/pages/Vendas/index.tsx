import { Text, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"

export const Vendas = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header primary={'arrow-left'} title="Vendas" />
            </View>
            <View style={styles.infoNotRequests}>
                <Text style={styles.infoNotRequestsText}>
                    Vendas ainda não registradas
                </Text>
            </View>
        </View>
    )
}