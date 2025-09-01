import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop, ClipPath, Circle } from "react-native-svg";

type MainContainerProps = {
    children: ReactNode;
} & ViewProps;

export const MainContainer = ({ children, ...props }: MainContainerProps) => {
    return (
        <View style={styles.container} {...props}>
            <Svg style={StyleSheet.absoluteFill} height="100%" width="100%">
                <Defs>
                    {/* Top-right mist gradient */}
                    <RadialGradient id="grad1" cx="75%" cy="25%" r="20%" fx="75%" fy="25%">
                        <Stop offset="0%" stopColor="#D8CFF6" stopOpacity="0.7" />
                        <Stop offset="100%" stopColor="#E8E9F6" stopOpacity="1" />
                    </RadialGradient>

                    {/* Bottom-left mist gradient */}
                    <RadialGradient id="grad2" cx="25%" cy="75%" r="20%" fx="25%" fy="75%">
                        <Stop offset="0%" stopColor="#D8CFF6" stopOpacity="0.7" />
                        <Stop offset="100%" stopColor="#E8E9F6" stopOpacity="1" />
                    </RadialGradient>

                    {/* Clip areas */}
                    <ClipPath id="clipTopRight">
                        <Circle cx="75%" cy="25%" r="200" />
                    </ClipPath>
                    <ClipPath id="clipBottomLeft">
                        <Circle cx="25%" cy="75%" r="220" />
                    </ClipPath>
                </Defs>

                {/* Base background */}
                <Rect x="0" y="0" width="100%" height="100%" fill="#E8E9F6" />

                {/* Apply top-right mist clipped */}
                <Rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#grad1)"
                    clipPath="url(#clipTopRight)"
                />

                {/* Apply bottom-left mist clipped */}
                <Rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#grad2)"
                    clipPath="url(#clipBottomLeft)"
                />
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
