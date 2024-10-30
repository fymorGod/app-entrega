import React from "react";

import { Image, StyleSheet } from "react-native";
import Logo from './assets/Logo.png';
import PotiguarLogo from './assets/potiguar-logo.png';
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

export const SplashScreen = () => {
    return (
        <LinearGradient colors={['#ED1C24', '#DC0000','#760000']} style={styles.container}>
            <Animated.View entering={FadeInDown.delay(300)}>
                <Image source={Logo} style={styles.logo} />
                <Animated.Text entering={FadeInDown.delay(400)} style={styles.text}>App Entrega</Animated.Text>
            </Animated.View>
            <Animated.View entering={FadeInRight.delay(400)} style={styles.boxImage}>
                <Image source={PotiguarLogo} style={styles.logoPotiguar} />
            </Animated.View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#760000'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    },
    logo : {
        width: 115,
        height: 120,
        resizeMode: 'cover'
    },
    boxImage: {
        position: 'absolute',
        bottom: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoPotiguar : {
        width: 100,
        resizeMode: 'contain'
    }
})