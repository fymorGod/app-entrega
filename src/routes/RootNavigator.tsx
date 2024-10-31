import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { Camera } from "../components/Camera";

export type RootStackParamList = {
    Home: undefined;
    Clientes: undefined;
    Camera: { title: string }; 
};

export const RootNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    const handleScan = (data: any) => {
        console.log('Dados escaneados:', data);
    };

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false, animation: 'slide_from_right'}} initialParams={{ title: 'Escaneie o código' }}/>
        </Stack.Navigator>
    )
}