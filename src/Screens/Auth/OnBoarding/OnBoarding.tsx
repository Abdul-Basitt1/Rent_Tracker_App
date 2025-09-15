import { View, Text, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../Navigation/types'
import { MainContainer } from '../../../Components/MainContainer'
import { Images } from '../../../Images'
import Onboarding from 'react-native-onboarding-swiper'
import { Routes } from '../../../Constants'
import { styles } from './styles'

type OnBoardingProps = NativeStackScreenProps<AuthStackParamList, 'OnBoarding'>

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
    return (
        <MainContainer>
            <Onboarding
                pages={[
                    {
                        backgroundColor: 'transparent',
                        image: <Image source={Images.onBoarding1} style={styles.splashLogo} />,
                        title: 'Track with Ease',
                        subtitle: 'Easily track monthly rent collections from all your shops in one place.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Images.onBoarding2} style={styles.splashLogo} />,
                        title: 'Simple Recording',
                        subtitle: 'Record payments, dues, and notes with simple and clean inputs.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Images.onBoarding3} style={styles.splashLogo} />,
                        title: 'Stay Organized',
                        subtitle: 'Stay organized with rent summaries, reminders, and visual records.',
                    },
                ]}
                titleStyles={styles.onBoardingTitles}
                subTitleStyles={styles.onBoardingSubtitles}
                bottomBarColor='#E8E9F6'
                // onDone={() => navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.Home })}
                onDone={() => navigation?.navigate?.(Routes.Splash)}

            />
        </MainContainer>
    )
}

export default OnBoarding