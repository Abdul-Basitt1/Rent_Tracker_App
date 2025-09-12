import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../Constants'
import { hp } from '../../../Components/ResponsiveComponent'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    readyText: {
        color: Colors.lightGray,
        fontFamily: Fonts.appTextMedium,
        fontSize: 15,
        paddingBottom: hp(2),
        alignSelf: 'center',
    },
})