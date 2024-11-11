import React from "react";
import Logo from '../../../assets/Logo.png';
import PotiguarLogo from '../../../assets/potiguar-logo.png';
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { 
    FadeInRight, 
    useAnimatedStyle, 
    useSharedValue, 
    withRepeat, 
    withTiming } from "react-native-reanimated";
import { styles } from "./styles";

export const SplashScreen = () => {
    const pulse = useSharedValue(1);

    pulse.value = withRepeat(withTiming(1.1, { duration: 800 }), -1, true);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: pulse.value }],
        };
    });

    return (
        <LinearGradient colors={['#ED1C24', '#ec060e', '#760000']} style={styles.container}>
            <Animated.View style={[animatedStyle, styles.logoContainer]}>
                <Image source={Logo} style={styles.logo} />
                <Animated.Text style={styles.text}>App Entrega</Animated.Text>
            </Animated.View>
            <Animated.View entering={FadeInRight.delay(400)} style={styles.boxImage}>
                <Image source={PotiguarLogo} style={styles.logoPotiguar} />
            </Animated.View>
        </LinearGradient>
    )
}

