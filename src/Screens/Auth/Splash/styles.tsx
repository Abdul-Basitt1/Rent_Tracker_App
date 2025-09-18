import { StyleSheet } from 'react-native'
import { hp } from '../../../Components/ResponsiveComponent'
import { Colors, Fonts } from '../../../Constants'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    readyText: {
        color: Colors.textSecondary, // was lightGray
        fontFamily: Fonts.appTextMedium,
        fontSize: 15,
        paddingBottom: hp(2),
        alignSelf: 'center',
    },
})