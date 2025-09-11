import { View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { MainContainer } from '../../../Components/MainContainer'
import { SplashComponent } from './Components'
import ResponsiveText from '../../../Components/ResponsiveText'
import { Routes } from '../../../Constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../Navigation/types'

type SplashProps = NativeStackScreenProps<AuthStackParamList, 'Splash'>

const Splash: React.FC<SplashProps> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation?.replace(Routes.OnBoarding);
        }, 2000);

        // ✅ cleanup on unmount to avoid memory leaks
        return () => clearTimeout(timer);
    }, [navigation]);

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