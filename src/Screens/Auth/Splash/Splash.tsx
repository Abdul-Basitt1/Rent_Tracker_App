import { View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MainContainer } from '../../../Components/MainContainer'
import { SplashComponent } from './Components'

const Splash = () => {
    return (
        <MainContainer>
            <View style={styles.containerMain}>
                <SplashComponent />
            </View>
        </MainContainer>
    )
}

export default Splash