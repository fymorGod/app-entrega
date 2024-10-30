
import React, { useState } from "react";
import { Pressable, SafeAreaView, Text } from "react-native"
import { styles } from "./styles";
import { Modal } from "../../components/Modal";

export function Home() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => setOpenModal(true)}>
                <Text style={styles.text}>Open modal</Text>
            </Pressable>
            <Modal 
                duration={500} 
                visibleModal={openModal} 
                handleClose={setOpenModal} 
                options={{ type: 'slide', from: 'top'}} 
            />
        </SafeAreaView>
    )
}