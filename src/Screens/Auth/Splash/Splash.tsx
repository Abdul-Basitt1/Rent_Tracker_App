import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { styles } from './styles';
import { MainContainer } from '../../../Components/MainContainer';
import { SplashComponent } from './Components';
import ResponsiveText from '../../../Components/ResponsiveText';
import { Routes } from '../../../Constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../Navigation/types';
import AnimatedBootSplash from '../../../Animations/AnimatedBootSplash';
import { hp } from '../../../Components/ResponsiveComponent';
import WaveRevealOverlay from '../../../Animations/WaveRevealOverlay';

type SplashProps = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

//Can change these values to adjust animation
const LIFT_DISTANCE = hp(14);   // distance the logo should travel up
const OVERLAY_DURATION = 480;  // native overlay fade/move
const JS_LOGO_DELAY = 150;     // slight delay before JS logo appears
const JS_LOGO_FADE = 350;      // JS logo fade-in duration
const TEXT_DELAY = 180;        // when text starts (during the transition)
const TEXT_DURATION = 640;     // silky text ease
const NAV_DELAY = 3000;        // navigate after (same as before)
// NEW: slow & smooth background fill timing
const WAVE_DURATION = 1400;  // wave speed
const WAVE_DELAY = 100;       // tiny delay to start with the logo blend

const Splash: React.FC<SplashProps> = ({ navigation }) => {
    const [overlayGone, setOverlayGone] = useState(false);
    const [bgPlay, setBgPlay] = useState(false); // 👈 start background fill

    // JS logo starts LOWER (same as native), then animates up to 0 
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoTranslateY = useRef(new Animated.Value(LIFT_DISTANCE)).current; // start “down”

    // Text: fade + gentle rise 
    const textOpacity = useRef(new Animated.Value(0)).current;
    const textLift = useRef(new Animated.Value(10)).current;


    //   When the native overlay starts moving, we:
    //    - fade in the JS logo and move it from LIFT_DISTANCE → 0 (so it looks like the same logo continued moving)
    //    - begin text fade/float (will show as overlay fades)

    const handleBlendStart = () => {
        // Start background fill at the same moment
        setBgPlay(true)

        Animated.parallel([
            Animated.timing(logoOpacity, {
                toValue: 1,
                delay: JS_LOGO_DELAY,
                duration: JS_LOGO_FADE,
                useNativeDriver: true,
            }),
            Animated.timing(logoTranslateY, {
                toValue: 0,
                duration: OVERLAY_DURATION,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }),
            Animated.timing(textOpacity, {
                toValue: 1,
                delay: TEXT_DELAY,
                duration: TEXT_DURATION,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }),
            Animated.timing(textLift, {
                toValue: 0,
                delay: TEXT_DELAY,
                duration: TEXT_DURATION,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }),
        ]).start();
    };

    // After the overlay fully hides, start the navigation timer 
    useEffect(() => {
        if (!overlayGone) return;
        const t = setTimeout(() => navigation.replace(Routes.OnBoarding), NAV_DELAY);
        return () => clearTimeout(t);
    }, [overlayGone, navigation]);

    // Animated styles (correct transform arrays; no warnings) 
    const logoStyle = {
        opacity: logoOpacity,
        transform: [{ translateY: logoTranslateY }],
    } as const;

    const textContainerStyle = {
        opacity: textOpacity,
        transform: [{ translateY: textLift }],
    } as const;

    return (
        <MainContainer>
            {/* 🔹 Smooth wave reveal sits ABOVE gradient, BELOW content */}
            <WaveRevealOverlay
                play={bgPlay}
                duration={WAVE_DURATION}
                delay={WAVE_DELAY}
                centerYFrac={0.48}  // tweak to align behind your logo
                amp={16}            // wave subtlety
                swayPx={6}
            />

            {/* your existing content (unchanged) */}
            <View style={styles.containerMain}>
                <SplashComponent
                    logoStyle={logoStyle as any}
                    textContainerStyle={textContainerStyle as any}
                />
            </View>

            <Animated.View style={{ opacity: textOpacity, transform: [{ translateY: textLift }] }}>
                <ResponsiveText style={styles.readyText}>Version 1.0.0</ResponsiveText>
            </Animated.View>

            {/* Native overlay stays on top until it finishes (unchanged) */}
            {!overlayGone && (
                <AnimatedBootSplash
                    onBlendStart={handleBlendStart}
                    onHidden={() => setOverlayGone(true)}
                    duration={OVERLAY_DURATION}
                    lift={LIFT_DISTANCE}
                />
            )}
        </MainContainer>
    );
};

export default Splash;


