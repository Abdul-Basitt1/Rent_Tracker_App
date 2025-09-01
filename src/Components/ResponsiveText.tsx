import { View, Text, TextStyle, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants'

type ResponsiveTextProps = {
    children: React.ReactNode,
    style?: TextStyle | TextStyle[],
    onPress?: () => void,
    numberOfLines?: number
}


const ResponsiveText: React.FC<ResponsiveTextProps> = ({ children, style, onPress, numberOfLines }) => {
    return (
        <Text onPress={onPress} style={[styles.textStyle, style]} numberOfLines={numberOfLines} >{children}</Text>
    )
}

export default ResponsiveText
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        // fontFamily: fontFamily?.appTextMedium,
        color: Colors.white
    }
})