import { View, Text, TextStyle, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Constants'

type ResponsiveTextProps = {
    // children: React.ReactNode,
    style?: TextStyle | TextStyle[],
    onPress?: () => void,
}


const ResponsiveText: React.FC<ResponsiveTextProps> = ({ style, onPress }) => {
    return (
        <Text onPress={onPress} style={[styles.textStyle, style]}></Text>
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