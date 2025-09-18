import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import Svg, { Defs, LinearGradient, RadialGradient, Rect, Stop } from "react-native-svg";
import { Colors } from "../Constants";

type MainContainerProps = {
    children: ReactNode;
} & ViewProps;

export const MainContainer = ({ children, ...props }: MainContainerProps) => {
    return (
        <View style={styles.container} {...props}>
            <Svg style={StyleSheet.absoluteFill} height="100%" width="100%">
                <Defs>
                    {/* Base linear gradient background (lighter) */}
                    <LinearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
                        <Stop offset="0%" stopColor={Colors.primary} stopOpacity="0.35" />
                        <Stop offset="50%" stopColor={Colors.secondary} stopOpacity="0.25" />
                        <Stop offset="100%" stopColor={Colors.background} stopOpacity="1" />
                    </LinearGradient>

                    {/* Softer radial blobs */}
                    <RadialGradient id="blobBlue" cx="20%" cy="25%" r="35%">
                        <Stop offset="0%" stopColor={Colors.primary} stopOpacity="0.15" />
                        <Stop offset="100%" stopColor={Colors.background} stopOpacity="0" />
                    </RadialGradient>

                    <RadialGradient id="blobGreen" cx="85%" cy="70%" r="40%">
                        <Stop offset="0%" stopColor={Colors.secondary} stopOpacity="0.15" />
                        <Stop offset="100%" stopColor={Colors.background} stopOpacity="0" />
                    </RadialGradient>

                    <RadialGradient id="blobRed" cx="50%" cy="100%" r="35%">
                        <Stop offset="0%" stopColor={Colors.accent} stopOpacity="0.1" />
                        <Stop offset="100%" stopColor={Colors.background} stopOpacity="0" />
                    </RadialGradient>
                </Defs>

                {/* Base background */}
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#bgGradient)" />

                {/* Misty blobs */}
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#blobBlue)" />
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#blobGreen)" />
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#blobRed)" />
            </Svg>

            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
    },
});
