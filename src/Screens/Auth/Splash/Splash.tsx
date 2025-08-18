import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images } from '../../../Images'
import { styles } from './styles'

const Splash = () => {
    return (
        <View style={styles.containerMain}>
            <Image source={Images.splashLogo} style={styles.splashLogo} />
        </View>
    )
}

export default Splash