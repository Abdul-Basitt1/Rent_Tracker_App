import { StyleSheet } from 'react-native'
import { wp } from '../../../Components/ResponsiveComponent'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#345345',
    },
    splashLogo: {
        width: wp(15),
        height: wp(15),
        alignSelf: 'center',
    }
})