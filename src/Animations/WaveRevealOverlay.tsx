import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { Colors } from '../Constants';

type Props = {
    play: boolean;
    duration?: number;
    delay?: number;
    /** If provided, uses solid fill; if undefined, uses branded gradient */
    color?: string;
    centerYFrac?: number;
    amp?: number;
    wavelengthPx?: number;
    swayPx?: number;
};

export default function WaveRevealOverlay({
    play,
    duration = 6000,
    delay = 200,
    color, // ← no default; gradient is default
    centerYFrac = 0.48,
    amp = 16,
    wavelengthPx,
    swayPx = 6,
}: Props) {
    const { width, height } = Dimensions.get('window');

    // Add horizontal padding wider than sway so the overlay never exposes edges.
    const padX = Math.max(10, Math.ceil(swayPx) + 6); // sway + safety
    const svgW = width + padX * 2; // draw wider than screen

    const wavelength = wavelengthPx ?? Math.max(120, Math.floor(width / 2.6));
    const centerY = Math.max(0, Math.min(1, centerYFrac)) * height;

    // ------- Animated drivers -------
    const progress = useRef(new Animated.Value(0)).current; // 0 -> 1
    const sway = useRef(new Animated.Value(0)).current;     // 0 -> 1

    useEffect(() => {
        if (!play) return;
        progress.setValue(0);
        sway.setValue(0);

        Animated.parallel([
            Animated.timing(progress, {
                toValue: 1,
                duration,
                delay,
                easing: Easing.bezier(0.22, 0.61, 0.36, 1),
                useNativeDriver: true,
            }),
            Animated.timing(sway, {
                toValue: 1,
                duration,
                delay,
                easing: Easing.inOut(Easing.sin),
                useNativeDriver: true,
            }),
        ]).start();
    }, [play, delay, duration, progress, sway]);

    // Travel + sway
    const travel = height / 2 + 60;
    const upY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, -travel] });
    const downY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, travel] });
    const xSway = sway.interpolate({ inputRange: [0, 1], outputRange: [-swayPx, swayPx] });
    const fade = progress.interpolate({ inputRange: [0, 0.85, 1], outputRange: [1, 0.25, 0] });

    // ------- Build wave path (draw beyond right edge) -------
    const wavePath = useMemo(() => {
        const extra = wavelength; // ensure we overshoot
        let d = `M ${-padX} ${centerY} `;
        let x = -padX;
        let dir = 1;
        while (x <= svgW + extra) {
            const cx = x + wavelength / 2;
            const cy = centerY + dir * amp;
            const nx = x + wavelength;
            d += `Q ${cx} ${cy} ${nx} ${centerY} `;
            x += wavelength;
            dir *= -1;
        }
        return d;
    }, [amp, centerY, wavelength, svgW, padX]);

    // Use svgW to close shapes to the corners of the extended canvas
    const upperPath = `${wavePath} L ${svgW} 0 L ${-padX} 0 Z`;
    const lowerPath = `${wavePath} L ${svgW} ${height} L ${-padX} ${height} Z`;

    // Reusable gradient id
    const gradientId = 'waveGrad';

    // Shared SVG content factory
    const renderSvg = (d: string) => (
        <Svg width={svgW} height={height} style={StyleSheet.absoluteFill}>
            <Defs>
                <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                    {/* Soft brand blend that matches MainContainer */}
                    <Stop offset="0%" stopColor={Colors.primary} stopOpacity={0.28} />
                    <Stop offset="100%" stopColor={Colors.secondary} stopOpacity={0.24} />
                </LinearGradient>
            </Defs>
            <Path d={d} fill={color ?? `url(#${gradientId})`} />
        </Svg>
    );

    // Note: we extend left/right by padX so even with sway we never expose edges.
    const baseAbs = {
        ...StyleSheet.absoluteFillObject as any,
        left: -padX,
        right: -padX,
    };

    return (
        <>
            {/* Upper cover (slides UP) */}
            <Animated.View
                pointerEvents="none"
                style={[
                    baseAbs,
                    { transform: [{ translateY: upY }, { translateX: xSway }], opacity: fade, zIndex: 0 },
                ]}
            >
                {renderSvg(upperPath)}
            </Animated.View>

            {/* Lower cover (slides DOWN) */}
            <Animated.View
                pointerEvents="none"
                style={[
                    baseAbs,
                    { transform: [{ translateY: downY }, { translateX: xSway }], opacity: fade, zIndex: 0 },
                ]}
            >
                {renderSvg(lowerPath)}
            </Animated.View>
        </>
    );
}
