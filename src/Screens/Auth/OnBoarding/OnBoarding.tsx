import { View, Text, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../Navigation/types'
import { MainContainer } from '../../../Components/MainContainer'
import { Images } from '../../../Images'
import Onboarding from 'react-native-onboarding-swiper'

type OnBoardingProps = NativeStackScreenProps<AuthStackParamList, 'OnBoarding'>

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
    return (
        <MainContainer>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Images.splashLogo} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Images.splashLogo} />,
                        title: 'Onboarding2',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Images.splashLogo} />,
                        title: 'Onboarding3',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </MainContainer>
    )
}

export default OnBoarding