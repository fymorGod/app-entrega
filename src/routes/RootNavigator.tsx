
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../pages/Home";

type RootStackParamList = {
    Home: undefined;
    Clientes: undefined;
};

export const RootNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: 'slide_from_right'}}/>
        </Stack.Navigator>
    )
}