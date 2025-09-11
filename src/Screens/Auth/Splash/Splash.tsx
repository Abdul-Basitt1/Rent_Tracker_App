// import React, { useEffect, useRef, useState } from 'react';
// import { Animated, View } from 'react-native';
// import { styles } from './styles';
// import { MainContainer } from '../../../Components/MainContainer';
// import { SplashComponent } from './Components';
// import ResponsiveText from '../../../Components/ResponsiveText';
// import { Routes } from '../../../Constants';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { AuthStackParamList } from '../../../Navigation/types';
// import AnimatedBootSplash from '../../../Animations/AnimatedBootSplash';

// type SplashProps = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

// const Splash: React.FC<SplashProps> = ({ navigation }) => {
//     // controls when to show your own logo/text
//     const [bootOverlayGone, setBootOverlayGone] = useState(false);

//     // fade-in for your text (and, optionally, your logo if you prefer)
//     const textOpacity = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         if (!bootOverlayGone) return;
//         // Start fading in your content *after* the native overlay faded out
//         Animated.timing(textOpacity, {
//             toValue: 1,
//             duration: 350,
//             useNativeDriver: true,
//         }).start();

//         // keep your existing navigation delay
//         const t = setTimeout(() => navigation.replace(Routes.OnBoarding), 2000);
//         return () => clearTimeout(t);
//     }, [bootOverlayGone, navigation]);

//     return (
//         <MainContainer>
//             <View style={styles.containerMain}>
//                 {/* Show your logo only after overlay is gone to avoid double image */}
//                 <Animated.View style={{ flex: 1, justifyContent: 'center', opacity: textOpacity }}>
//                     <SplashComponent /* you can add a prop to optionally skip the logo if needed */ />
//                 </Animated.View>
//             </View>

//             <Animated.View style={{ opacity: textOpacity }}>
//                 <ResponsiveText style={styles.readyText}>Version 1.0.0</ResponsiveText>
//             </Animated.View>

//             {/* The animated overlay that blends native ➜ JS */}
//             {!bootOverlayGone && (
//                 <AnimatedBootSplash onHidden={() => setBootOverlayGone(true)} />
//             )}
//         </MainContainer>
//     );
// };

// export default Splash;
// src/Screens/Auth/Splash/Splash.tsx
// src/Screens/Auth/Splash/Splash.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { styles } from './styles';
import { MainContainer } from '../../../Components/MainContainer';
import { SplashComponent } from './Components';
import ResponsiveText from '../../../Components/ResponsiveText';
import { Routes } from '../../../Constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../Navigation/types';
import AnimatedBootSplash from '../../../Animations/AnimatedBootSplash';
import { hp } from '../../../Components/ResponsiveComponent';

type SplashProps = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

/** Tunables (smooth, elegant, not too slow) */
const LIFT_DISTANCE = hp(14);   // distance the logo should travel up
const OVERLAY_DURATION = 480;  // native overlay fade/move
const JS_LOGO_DELAY = 100;     // slight delay before JS logo appears
const JS_LOGO_FADE = 300;      // JS logo fade-in duration
const TEXT_DELAY = 180;        // when text starts (during the transition)
const TEXT_DURATION = 560;     // silky text ease
const NAV_DELAY = 2500;        // navigate after (same as before)

const Splash: React.FC<SplashProps> = ({ navigation }) => {
    const [overlayGone, setOverlayGone] = useState(false);

    /** JS logo starts LOWER (same as native), then animates up to 0 */
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoTranslateY = useRef(new Animated.Value(LIFT_DISTANCE)).current; // start “down”

    /** Text: fade + gentle rise */
    const textOpacity = useRef(new Animated.Value(0)).current;
    const textLift = useRef(new Animated.Value(10)).current;

    /**
     * When the native overlay starts moving, we:
     *  - fade in the JS logo and move it from LIFT_DISTANCE → 0 (so it looks like the same logo continued moving)
     *  - begin text fade/float (will show as overlay fades)
     */
    const handleBlendStart = () => {
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

    /** After the overlay fully hides, start the navigation timer */
    useEffect(() => {
        if (!overlayGone) return;
        const t = setTimeout(() => navigation.replace(Routes.OnBoarding), NAV_DELAY);
        return () => clearTimeout(t);
    }, [overlayGone, navigation]);

    /** Animated styles (correct transform arrays; no warnings) */
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
            <View style={styles.containerMain}>
                <SplashComponent
                    logoStyle={logoStyle as any}                 // JS logo fades in & slides up
                    textContainerStyle={textContainerStyle as any}
                />
            </View>

            {/* Footer version text synced with same animation */}
            <Animated.View style={{ opacity: textOpacity, transform: [{ translateY: textLift }] }}>
                <ResponsiveText style={styles.readyText}>Version 1.0.0</ResponsiveText>
            </Animated.View>

            {/* Native overlay on top that fades & moves up the SAME distance */}
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


