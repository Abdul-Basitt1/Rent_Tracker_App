import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../../Navigation/types'

type HomeProps = NativeStackScreenProps<AppStackParamList, 'Home'>

const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home