import React, { useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import BootSplash from 'react-native-bootsplash';

type Props = {
    onBlendStart?: () => void;
    onHidden?: () => void;
    duration?: number;               // fade/move duration
    lift?: number;                   // how far the OVERLAY logo moves up 
    statusBarTranslucent?: boolean;
};

export default function AnimatedBootSplash({
    onBlendStart,
    onHidden,
    duration = 420,
    lift = 56,
    statusBarTranslucent = true,
}: Props) {
    const overlayOpacity = useRef(new Animated.Value(1)).current;
    const overlayTY = useRef(new Animated.Value(0)).current;

    const { container, logo } = BootSplash.useHideAnimation({
        manifest: require('../../assets/bootsplash/manifest.json'),
        logo: require('../../assets/bootsplash/logo.png'),
        statusBarTranslucent,
        navigationBarTranslucent: false,
        animate: () => {
            onBlendStart?.();

            Animated.parallel([
                Animated.timing(overlayOpacity, {
                    toValue: 0,
                    duration,
                    useNativeDriver: true,
                }),
                Animated.timing(overlayTY, {
                    toValue: -lift,
                    duration,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }),
            ]).start(() => {
                onHidden?.();
            });
        },
    });

    return (
        <Animated.View
            {...container}
            style={[
                StyleSheet.absoluteFillObject,
                container.style,
                { opacity: overlayOpacity, zIndex: 9999 },
            ]}
        >
            {/* Spread ALL logo props, then add our translateY */}
            <Animated.Image
                {...logo}
                style={[logo.style, { transform: [{ translateY: overlayTY }] }]}
            />
        </Animated.View>
    );
}



