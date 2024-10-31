import React from "react";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { styles } from "./styles";
import * as Application from 'expo-application';

export const AppVersion = () => {
    const appVersion = Application.nativeApplicationVersion || '1.0';

    return (
        <View style={styles.version}>
            <Animated.Text entering={FadeInDown.delay(400)} style={styles.textVersion}>v.{appVersion}</Animated.Text>
        </View>
    )
}