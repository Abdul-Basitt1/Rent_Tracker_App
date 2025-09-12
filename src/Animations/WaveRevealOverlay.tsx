import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
    play: boolean;               // start the reveal
    duration?: number;           // total time (ms), slow & smooth
    delay?: number;              // small delay to sync with logo blend start
    color?: string;              // white “water” color (match native)
    centerYFrac?: number;        // where the wave starts vertically (0..1)
    amp?: number;                // wave amplitude (px) – subtle
    wavelengthPx?: number;       // distance between crests (px)
    swayPx?: number;             // tiny horizontal sway (px)
};

/**
 * Two white covers with a wavy edge sit at the center and slide
 * upward and downward to reveal your gradient from the middle.
 * - GPU-friendly (translate + opacity with native driver)
 * - Gentle “sea” motion (small horizontal sway)
 * - Lives BELOW content, ABOVE gradient
 */
export default function WaveRevealOverlay({
    play,
    duration = 1400,
    delay = 100,
    color = '#FFFFFF',
    centerYFrac = 0.48,      // slightly above center; tweak to sit behind your logo
    amp = 16,                // subtle wave height
    wavelengthPx,            // default set below using screen width
    swayPx = 6,              // gentle side-to-side
}: Props) {
    const { width, height } = Dimensions.get('window');
    const wavelength = wavelengthPx ?? Math.max(120, Math.floor(width / 2.6));
    const centerY = Math.max(0, Math.min(1, centerYFrac)) * height;

    // ------- Animated drivers (native) -------
    const progress = useRef(new Animated.Value(0)).current; // 0 -> 1
    const sway = useRef(new Animated.Value(0)).current; // 0 -> 1

    useEffect(() => {
        if (!play) return;
        progress.setValue(0);
        sway.setValue(0);

        Animated.parallel([
            Animated.timing(progress, {
                toValue: 1,
                duration,
                delay,
                easing: Easing.bezier(0.22, 0.61, 0.36, 1), // standard ease-out
                useNativeDriver: true,
            }),
            // single gentle sway across duration
            Animated.timing(sway, {
                toValue: 1,
                duration,
                delay,
                easing: Easing.inOut(Easing.sin),
                useNativeDriver: true,
            }),
        ]).start();
    }, [play, delay, duration, progress, sway]);

    // Move up/down from center until fully off-screen
    const travel = height / 2 + 60;
    const upY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, -travel] });
    const downY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, travel] });
    const xSway = sway.interpolate({ inputRange: [0, 1], outputRange: [-swayPx, swayPx] });
    const fade = progress.interpolate({ inputRange: [0, 0.85, 1], outputRange: [1, 0.25, 0] });

    // ------- Build one wavy edge path (at rest at centerY) -------
    const wavePath = useMemo(() => {
        // Draw a horizontal wave across the screen at y = centerY
        // Upper path will fill ABOVE this wave; lower path will fill BELOW it.
        let d = `M 0 ${centerY} `;
        let x = 0;
        let dir = 1; // crest↔trough toggle
        while (x <= width) {
            const cx = x + wavelength / 2;
            const cy = centerY + dir * amp;
            const nx = x + wavelength;
            d += `Q ${cx} ${cy} ${nx} ${centerY} `;
            x += wavelength;
            dir *= -1;
        }
        return d;
    }, [amp, centerY, wavelength, width]);

    // Upper cover: from top down to the wave
    const upperPath = `${wavePath} L ${width} 0 L 0 0 Z`;
    // Lower cover: from bottom up to the wave (reverse fill)
    const lowerPath = `${wavePath} L ${width} ${height} L 0 ${height} Z`;

    return (
        <>
            {/* Upper white cover (slides UP) */}
            <Animated.View
                pointerEvents="none"
                style={[
                    StyleSheet.absoluteFillObject,
                    { transform: [{ translateY: upY }, { translateX: xSway }], opacity: fade, zIndex: 0 },
                ]}
            >
                <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
                    <Path d={upperPath} fill={color} />
                </Svg>
            </Animated.View>

            {/* Lower white cover (slides DOWN) */}
            <Animated.View
                pointerEvents="none"
                style={[
                    StyleSheet.absoluteFillObject,
                    { transform: [{ translateY: downY }, { translateX: xSway }], opacity: fade, zIndex: 0 },
                ]}
            >
                <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
                    <Path d={lowerPath} fill={color} />
                </Svg>
            </Animated.View>
        </>
    );
}
