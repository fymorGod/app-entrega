import React, { useState } from "react";
import { Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { BounceInLeft, FadeInDown, FadeInRight } from "react-native-reanimated";
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../routes/RootNavigator";
import { AppVersion } from "../../components/AppVersion";
import { LogoComponent } from "../../components/LogoComponent";
import { api } from "../../api/app";
import { organizeDataByCpf } from "../../utils/groupingdata";
import { useSalesStore } from "../../store/vendaStore";
import { LoadingScreen } from "../../components/Loading";

type FormData = {
    romaneio: string;
}

export function HomePage() {
    const { handleSubmit, control, formState: { errors } } = useForm<FormData>();
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const { setSalesData } = useSalesStore(); 
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    
    const pesquisar = () => {
        navigation.navigate('Camera', { title: 'Scanear ' })
    }

    const getDataRomaneio = async (codigo: FormData) => {
        setIsLoading(true); 
        try {
            const response = await api.post("/entrega", {
                app_id: "h2h12h1jkj436dsa008g0nvb7czx8dszx",
                mode: "romaneio_oracle",
                romaneio: codigo.romaneio,
                empresa: "p",
            });
            
            if (response.status === 202 && Array.isArray(response.data.data)) {
                const organizedData = organizeDataByCpf(response.data.data);
                setSalesData(organizedData);
                navigation.navigate('Clientes')
            } else {
                console.error("Unexpected API response:", response);
            }
            
        } catch (error) {
            console.error("Erro ao buscar dados do romaneio:", error);
        } finally {
            setIsLoading(false); 
        }
    };


    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={[styles.container, { backgroundColor: 'transparent' }]}>
                <View style={styles.main}>
                    <LogoComponent />
                    <Animated.View entering={FadeInRight.delay(300)} style={{ justifyContent: 'center' }}>
                        <Animated.View entering={BounceInLeft.delay(300)} style={styles.formContainer}>
                            <Text style={styles.title}>Romaneio</Text>
                            <View style={styles.inputContainer}>
                                <Icon name="search" size={20} color="#ec060e" style={styles.iconLeft} />
                                <Controller
                                    control={control}
                                    name="romaneio"
                                    rules={{ required: "Romaneio obrigatório" }}
                                    render={({ field: { value, onChange } }) => (
                                        <View style={styles.inputContainer}>
                                            {errors.romaneio && (
                                                <Text style={styles.errorText}>{errors.romaneio.message}</Text>
                                            )}
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Número do romaneio"
                                                autoCapitalize='none'
                                                onChangeText={onChange}
                                                value={value}
                                                onFocus={() => setIsInputFocused(true)}
                                                onBlur={() => setIsInputFocused(false)}
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                    )}
                                />
                                <Pressable onPress={pesquisar}>
                                    <Icon name="camera" size={20} color="#ec060e" style={styles.iconRight} />
                                </Pressable>
                            </View>
                        </Animated.View>
                    </Animated.View>
                    {!isInputFocused && (
                        <Animated.View entering={FadeInDown.delay(400)} style={styles.footerContainer}>
                            <LinearGradient
                                colors={['#ED1C24', '#ec060e', '#760000']}
                                start={{ x: 0, y: 2 }}
                                end={{ x: 1, y: -2 }}
                                style={styles.btnBuscar}>
                                <Pressable onPress={handleSubmit(getDataRomaneio)}>
                                    <Text style={styles.textBuscar}>Buscar</Text>
                                </Pressable>
                            </LinearGradient>
                            <AppVersion />
                        </Animated.View>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}