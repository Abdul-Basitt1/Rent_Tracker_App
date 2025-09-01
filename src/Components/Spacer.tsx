import React from 'react'
import { View } from 'react-native'
import { hp, wp } from './ResponsiveComponent'

type SpacerProps = {
    height?: number
}

type HorizontalSpacerProps = {
    width?: number
}

const Spacer = ({ height }: SpacerProps) => {
    return (
        <View style={{ height: height ? height : hp(2) }} />

        // </View>
    )
}
export const HorizontalSpacer = ({ width }: HorizontalSpacerProps) => {
    return (
        <View style={{ marginRight: width ? width : wp(2) }} />
    )
}

export default Spacer