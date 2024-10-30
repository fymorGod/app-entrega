import React, { useEffect, useRef } from "react";
import { Pressable, Text, View, Dimensions, Animated, Easing } from "react-native";
import { styles } from "./styles";

interface ModalProps {
    visibleModal: boolean;
    handleClose: (value: boolean) => void;
    duration: number;
    options?: {
        from: 'top',
        type: 'slide'
    }
}

export function Modal({ handleClose, visibleModal, duration, options}:ModalProps) {
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
                outputRange: [0.8, 0],
                extrapolate: 'clamp'
            }) 
        } else {
            return transformY.current.interpolate({
                inputRange: [startPointY, 0],
                outputRange: [0, 0.8],
                extrapolate: 'clamp'
            }) 
        }
    }

    return (
        <>
            <Animated.View pointerEvents="none" style={[styles.outherContainer, { opacity: generateBackgroundOpacity() }]} />
            <Animated.View style={[styles.container, { transform: [{ translateY: transformY.current}] } ]}>
                <View style={styles.innerContainer}>
                    <Pressable onPress={onPress}>
                        <Text style={styles.text}>Close modal</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </>
    )
}