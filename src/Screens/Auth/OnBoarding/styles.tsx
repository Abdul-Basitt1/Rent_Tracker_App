import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../Constants'
import { hp, wp } from '../../../Components/ResponsiveComponent'

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
    splashLogo: {
        width: wp(72),               // tune to match native size
        height: wp(72),
        resizeMode: 'contain',
    },
    onBoardingSubtitles: {
        paddingHorizontal: wp(4),
        fontFamily: Fonts.appTextRegular,
    },
    onBoardingTitles: {
        paddingHorizontal: wp(4),
        fontFamily: Fonts.appTextMedium,
    },
})