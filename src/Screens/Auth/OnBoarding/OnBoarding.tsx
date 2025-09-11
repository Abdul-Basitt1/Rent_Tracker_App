import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../Navigation/types'

type OnBoardingProps = NativeStackScreenProps<AuthStackParamList, 'OnBoarding'>

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
    return (
        <View>
            <Text>OnBoarding</Text>
        </View>
    )
}

export default OnBoarding