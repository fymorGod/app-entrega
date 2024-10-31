import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styes";
import { Header } from "../../components/Header";

export const ClientePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
               <Header primary={'arrow-left'} secondary={'cloud-download-alt'} />
                <View style={styles.infoData}>
                    <Text>Information</Text>
                </View>
            </View>
        </View>
    )
}