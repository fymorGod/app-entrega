import React from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import { styles } from './styles';

export const LoadingScreen: React.FC = () => {
    const scale1 = useSharedValue(1);
    const scale2 = useSharedValue(1);
    const scale3 = useSharedValue(1);
    const scale4 = useSharedValue(1);

    scale1.value = withRepeat(withTiming(1.3, { duration: 800, easing: Easing.ease }), -1, true);
    scale2.value = withRepeat(withTiming(1.2, { duration: 900, easing: Easing.ease }), -1, true);
    scale3.value = withRepeat(withTiming(1.3, { duration: 700, easing: Easing.ease }), -1, true);
    scale4.value = withRepeat(withTiming(1.2, { duration: 750, easing: Easing.ease }), -1, true);

    const animatedStyle1 = useAnimatedStyle(() => ({
        transform: [{ scale: scale1.value }],
    }));
    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ scale: scale2.value }],
    }));
    const animatedStyle3 = useAnimatedStyle(() => ({
        transform: [{ scale: scale3.value }],
    }));
    const animatedStyle4 = useAnimatedStyle(() => ({
        transform: [{ scale: scale4.value }],
    }));

    return (
        <View style={styles.container}>
            <View style={styles.blockContainer}>
                <Animated.View style={[styles.block, styles.block1, animatedStyle1]} />
                <Animated.View style={[styles.block, styles.block2, animatedStyle2]} />
                <Animated.View style={[styles.block, styles.block3, animatedStyle3]} />
                <Animated.View style={[styles.block, styles.block4, animatedStyle4]} />
            </View>
            <Text style={styles.loadingText}>Carregando...</Text>
        </View>
    );
};

