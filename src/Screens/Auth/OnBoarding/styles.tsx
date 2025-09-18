import { StyleSheet } from "react-native";
import { hp, wp } from "../../../Components/ResponsiveComponent";
import { Colors, Fonts } from "../../../Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(6),
        backgroundColor: "transparent",
    },
    imageContainer: {
        height: hp(42),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(4),
    },
    heroWrapper: {
        width: wp(70),
        height: wp(70),
        borderRadius: wp(35),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.15)",
        shadowColor: Colors.primary,
        shadowOpacity: 0.12,
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 10 },
    },
    heroImage: {
        width: "75%",
        height: "75%",
    },
    title: {
        color: Colors.textPrimary,
        fontSize: wp(7),
        fontWeight: "800",
        textAlign: "center",
    },

    subtitle: {
        color: Colors.textSecondary,
        fontSize: wp(3.9),
        lineHeight: wp(5.6),
        textAlign: "center",
    },

    // Bottom buttons
    skipBtn: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(2),
        marginStart: wp(2.5),
        minWidth: wp(16),
        alignItems: "center",
        justifyContent: "center",
    },
    skipText: {
        color: Colors.textSecondary,
        fontSize: wp(3.6),
        fontFamily: Fonts.appTextMedium
    },
    nextBtn: {
        paddingVertical: hp(0.8),
        borderRadius: wp(20),
        borderWidth: 1.8,
        borderColor: Colors.primary,
        minWidth: wp(18),
        marginEnd: wp(2),
        alignItems: "center",
    },
    nextText: {
        color: Colors.primary,
        fontSize: wp(3.8),
        fontFamily: Fonts.appTextMedium
    },
    doneBtn: {
        paddingVertical: hp(1),
        borderRadius: wp(20),
        backgroundColor: Colors.primary,
        minWidth: wp(27),
        alignItems: "center",
        marginEnd: wp(2),
    },
    doneText: {
        color: Colors.white,
        fontSize: wp(3.5),
        fontFamily: Fonts.appTextMedium,
    },
});
