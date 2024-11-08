import { Text, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"


export const Requisições = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header primary={'arrow-left'} title="Requisições" />
            </View>
            <View style={styles.infoNotRequests}>
                <Text style={styles.infoNotRequestsText}>
                    Requisições ainda não registradas
                </Text>
            </View>
        </View>
    )
}