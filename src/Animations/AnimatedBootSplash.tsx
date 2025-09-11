// import React, { useState } from 'react';
// import { Animated, Image, StyleSheet } from 'react-native';
// import BootSplash from 'react-native-bootsplash';

// /**
//  * A small overlay that renders the *native* splash (logo/brand) in JS using
//  * the generated manifest, then cross-fades it away.
//  * When it’s done, it calls `onHidden()` so your screen can reveal its content.
//  */
// export default function AnimatedBootSplash({ onHidden }: { onHidden?: () => void }) {
//     const [opacity] = useState(() => new Animated.Value(1));

//     const { container, logo /*, brand */ } = BootSplash.useHideAnimation({
//         // ⬇️ these come from step #0
//         // manifest: require('../../../assets/bootsplash/manifest.json'),
//         manifest: require('../../assets/bootsplash/manifest.json'),
//         logo: require('../../assets/bootsplash/logo.png'),
//         // logo: require('../../../assets/bootsplash/logo.png'),
//         // If your BootTheme is EdgeToEdge / translucent bars:
//         statusBarTranslucent: true,
//         navigationBarTranslucent: false,
//         // Your animation: fade the overlay out
//         animate: () => {
//             Animated.timing(opacity, {
//                 toValue: 0,
//                 duration: 350,
//                 useNativeDriver: true,
//             }).start(() => {
//                 onHidden?.();
//             });
//         },
//     });

//     return (
//         <Animated.View
//             {...container}
//             // absolute overlay above your screen
//             style={[StyleSheet.absoluteFillObject, container.style, { opacity, zIndex: 9999 }]}
//         >
//             <Image {...logo} />
//             {/* <Image {...brand} /> // if you also generated a brand mark */}
//         </Animated.View>
//     );
// }
// src/ui/AnimatedBootSplash.tsx
import React, { useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import BootSplash from 'react-native-bootsplash';

type Props = {
    onBlendStart?: () => void;
    onHidden?: () => void;
    duration?: number;               // fade/move duration
    lift?: number;                   // how far the OVERLAY logo moves up (px)
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

    const { container, logo /* brand */ } = BootSplash.useHideAnimation({
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

            // 🔧 Dev-only safety net (uncomment if you still get stuck while debugging):
            // setTimeout(() => onHidden?.(), duration + 1000);
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
            {/* <Animated.Image {...brand} /> */}
        </Animated.View>
    );
}



