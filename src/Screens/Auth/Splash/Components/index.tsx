import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    ImageStyle,
    StyleProp,
    ViewStyle,
    Animated,
} from 'react-native';
import { Images } from '../../../../Images';
import { hp, wp } from '../../../../Components/ResponsiveComponent';
import ResponsiveText from '../../../../Components/ResponsiveText';
import Spacer from '../../../../Components/Spacer';
import { Colors, Fonts } from '../../../../Constants';
import { appStyles } from '../../../../Utilities/appStyles/appStyles';

type Props = {
    logoStyle?: StyleProp<ImageStyle>;          // animated logo style from parent
    textContainerStyle?: StyleProp<ViewStyle>;  // animated text container style
    hideLogo?: boolean;                          // optionally hide JS logo during overlay
};

export const SplashComponent: React.FC<Props> = ({
    logoStyle,
    textContainerStyle,
    hideLogo,
}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {!hideLogo && (
                <Animated.Image source={Images.splashLogo} style={[styles.splashLogo, logoStyle]} />
            )}

            <Animated.View style={textContainerStyle}>
                <Spacer />
                <ResponsiveText style={styles.appNameText}>Rent Tracker</ResponsiveText>
                <Spacer height={hp(0.5)} />
                <ResponsiveText style={styles.splashText1}>Smart Rent Management</ResponsiveText>
                <Spacer />
                <ResponsiveText numberOfLines={2} style={styles.splashText2}>
                    Track, manage and never miss your monthly rent payments
                </ResponsiveText>
                <Spacer height={hp(6)} />
                <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    <Image source={Images.tickIcon} style={styles.tickIcon} />
                    <ResponsiveText style={styles.readyText}>Ready</ResponsiveText>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    splashLogo: {
        width: wp(24),               // tune to match native size
        height: wp(24),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    appNameText: {
        color: Colors.colorDark,
        fontSize: 28,
        fontFamily: Fonts.appTextBold,
        textAlign: 'center',
    },
    tickIcon: {
        width: wp(3.4),
        height: wp(3.4),
        resizeMode: 'contain',
        marginRight: wp(2),
        tintColor: Colors.bluish,
    },
    splashText1: {
        color: Colors.mediumGray,
        fontSize: 20,
        fontFamily: Fonts.appTextMedium,
        textAlign: 'center',
    },
    splashText2: {
        color: Colors.lightGray,
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: wp(4),
        fontFamily: Fonts.appTextRegular,
    },
    readyText: {
        color: Colors.bluish,
        fontFamily: Fonts.appTextMedium,
        fontSize: 15,
    },
});
