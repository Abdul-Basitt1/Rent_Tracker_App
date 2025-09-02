import { View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { MainContainer } from '../../../Components/MainContainer'
import { SplashComponent } from './Components'
import ResponsiveText from '../../../Components/ResponsiveText'
import { Routes } from '../../../Constants'

type SplashProps = {
    props: any
}

const Splash: React.FC<SplashProps> = ({ props }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            props?.navigation?.replace(Routes.AppNavigator);
        }, 3000);

        // ✅ cleanup on unmount to avoid memory leaks
        return () => clearTimeout(timer);
    }, [props]);

    return (
        <MainContainer>
            <View style={styles.containerMain}>
                <SplashComponent />
            </View>
            <ResponsiveText style={styles.readyText}>Version 1.0.0</ResponsiveText>
        </MainContainer>
    )
}

export default Splash