import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../Components/ResponsiveComponent'
import ResponsiveText from '../../../../Components/ResponsiveText'
import Spacer from '../../../../Components/Spacer'
import { Colors, Fonts } from '../../../../Constants'
import { appStyles } from '../../../../Utilities/appStyles/appStyles'

export const SplashComponent = () => {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={Images.splashLogo} style={styles.splashLogo} />
                <Spacer />
                <ResponsiveText style={styles.appNameText}>Rent Tracker</ResponsiveText>
                <Spacer height={hp(0.5)} />
                <ResponsiveText style={styles.splashText1}>Smart Rent Management</ResponsiveText>
                <Spacer />
                <ResponsiveText numberOfLines={2} style={styles.splashText2}>Track, manage and never miss your monthly rent payments</ResponsiveText>
                <Spacer height={hp(6)} />

                <View style={{ ...appStyles.rowBasic }}>
                    <Image source={Images.tickIcon} style={styles.tickIcon} />
                    <ResponsiveText style={styles.readyText}>Ready</ResponsiveText>
                </View>
            </View>

            <ResponsiveText style={styles.readyText}>Version 1.0.0</ResponsiveText>
        </>
    )
}


const styles = StyleSheet.create({
    splashLogo: {
        width: wp(24),
        height: wp(24),
        resizeMode: 'contain',
    },
    appNameText: {
        color: Colors.colorDark,
        fontSize: 28,
        fontFamily: Fonts.appTextBold
    },
    tickIcon: {
        width: wp(3.5),
        height: wp(3.5),
        resizeMode: 'contain',
        marginRight: wp(2),
        tintColor: Colors.bluish
    },
    splashText1: {
        color: Colors.mediumGray,
        fontSize: 20,
        fontFamily: Fonts.appTextMedium
    },
    splashText2: {
        color: Colors.lightGray,
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: wp(4),
        fontFamily: Fonts.appTextRegular
    },
    readyText: {
        color: Colors.lightGray,
        fontFamily: Fonts.appTextMedium,
        fontSize: 15,
        paddingBottom: hp(2)
    },
})