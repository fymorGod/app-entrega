import React, { useEffect, useRef } from "react";
import { Pressable, Text, View, Dimensions, Animated, Easing } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
interface ModalProps {
    visibleModal: boolean;
    handleClose: (value: boolean) => void;
    duration: number;
    options?: {
        from: 'top',
        type: 'slide'
    };
    title: string;
    onSubmit: (value: any) => void;
}

export function Modal({ handleClose, visibleModal, duration, options, title, onSubmit}:ModalProps) {
    const { height } = Dimensions.get('screen');
    const startPointY = options?.from === 'top' ? -height : height
    const transformY = useRef(new Animated.Value(startPointY));

    useEffect(() => {
        if(!visibleModal) return startAnimation(startPointY)
        startAnimation(0)

    }, [visibleModal])

    const startAnimation = (toValue: number) => {
        Animated.timing(transformY.current, {
            toValue,
            duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start()
    }

    const onPress = () => {
        handleClose(false)
    }

    const generateBackgroundOpacity = () => {
        if (startPointY >= 0) {
            return transformY.current.interpolate({
                inputRange: [0, startPointY],
                outputRange: [0.6, 0],
                extrapolate: 'clamp'
            }) 
        } else {
            return transformY.current.interpolate({
                inputRange: [startPointY, 0],
                outputRange: [0, 0.6],
                extrapolate: 'clamp'
            }) 
        }
    }

    return (
        <>
            <Animated.View pointerEvents="none" style={[styles.outherContainer, { opacity: generateBackgroundOpacity() }]} />
            <Animated.View style={[styles.container, { transform: [{ translateY: transformY.current}] } ]}>
                <View style={styles.innerContainer}>
                    <LinearGradient 
                    start={{ x: 0, y: 2 }} 
                    end={{ x: 1, y: -2 }} 
                    colors={['#ED1C24', '#ec060e','#760000']} 
                    style={styles.header}>
                        <Text style={styles.textAtention}>Atenção</Text>
                    </LinearGradient>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{title}</Text>
                    </View>
                    <View style={styles.boxConfirmation}>
                        <LinearGradient 
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: -1.5 }} 
                        colors={['#ec060e','#7c0000']} 
                        style={styles.btnCancel}>
                            <Pressable onPress={onPress}>
                                <Text style={styles.text}>Cancel</Text>
                            </Pressable>
                        </LinearGradient>
                        <LinearGradient 
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: -1.5 }} 
                        colors={['#34C94A','#0F8120']} 
                        style={styles.btnConfirm}>
                            <Pressable onPress={onSubmit}>
                                <Text style={styles.text}>Confirmar</Text>
                            </Pressable>
                        </LinearGradient>
                    </View>
                </View>
            </Animated.View>
        </>
    )
}