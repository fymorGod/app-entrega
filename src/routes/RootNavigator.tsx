import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../pages/Home";
import { Camera } from "../components/Camera";
import { ClientePage } from "../pages/Clientes";
import { Requisições } from "../pages/Requisições";
import { Vendas } from "../pages/Vendas";

export type RootStackParamList = {
    Home: undefined;
    Clientes: undefined;
    Camera: { title: string }; 
    Requisicoes: undefined;
    Vendas: undefined;
};

export const RootNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name="Clientes" component={ClientePage} options={{ headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name="Requisicoes"  component={Requisições} options={{ headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name="Vendas" component={Vendas} options={{ headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false, animation: 'slide_from_right'}} initialParams={{ title: 'Escaneie o código' }}/>
        </Stack.Navigator>
    )
}