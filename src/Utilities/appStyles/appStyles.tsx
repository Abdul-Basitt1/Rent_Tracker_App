import { Platform, StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    // tinyText: {
    //     fontSize: fontSize.tiny,
    //     fontFamily: fontFamily?.appTextLight,
    //     color: colors?.appTextColor1
    // },
    // smallText: {
    //     fontSize: fontSize.small,
    //     fontFamily: fontFamily?.appTextRegular,
    //     color: colors?.appTextColor1
    // },
    // regularText: {
    //     fontSize: fontSize.regular,
    //     fontFamily: fontFamily?.appTextRegular,
    //     color: colors?.appTextColor1
    // },
    // mediumText: {
    //     fontSize: fontSize.medium,
    //     fontFamily: fontFamily?.appTextMedium,
    //     color: colors?.appTextColor1
    // },
    // largeText: {
    //     fontSize: fontSize.large,
    //     fontFamily: fontFamily?.appTextSemiBold,
    //     color: colors?.appTextColor1
    // },
    // h6: {
    //     fontSize: fontSize.h6,
    //     fontFamily: fontFamily?.appTextBold,
    //     color: colors?.appTextColor1
    // },
    // h5: {
    //     fontSize: fontSize.h5,
    //     fontFamily: fontFamily?.appTextBold,
    //     color: colors?.appTextColor1
    // },
    // h4: {
    //     fontSize: fontSize.h4,
    //     fontFamily: fontFamily?.appTextBold,
    //     color: colors?.appTextColor1
    // },
    // h3: {
    //     fontSize: fontSize.h3,
    //     fontFamily: fontFamily?.appTextBold,
    //     color: colors?.appTextColor1
    // },
    // h2: {
    //     fontSize: fontSize.h2,
    //     fontFamily: fontFamily?.appTextBold,
    //     color: colors?.appTextColor1
    // },
    // h1: {
    //     fontSize: fontSize.h1,
    //     fontFamily: fontFamily?.appTextBold,
    //     color: colors?.appTextColor1
    // },
    // bgIconStyle:{
    //     width: totalSize(4.5),
    //     height: totalSize(4.5),
    //     borderRadius: totalSize(1.2),
    //     backgroundColor: colors?.white20,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    rowBasic:{
        flexDirection:'row',
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    // tabBarLine:{
    //     width:width(8),
    //     height:height(.4),
    //     borderRadius: totalSize(2),
    //     backgroundColor:colors?.appBgColor1,
    //     position:'absolute',
    //     zIndex:-1,
    //     top:-height(2)
    // }
})



// tabs styles
// export const tabs = {
//     screenOptions: {
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarActiveTintColor: colors.appIconColor1,
//         tabBarInactiveTintColor: colors.appIconColor10,
        
        

//         tabBarStyle: {
//             position: 'absolute',
//             height: Platform.OS == 'android' ? height(11) : height(11),
//             backgroundColor: colors?.appColor5,
//             paddingTop: height(1),
//             borderTopWidth:0
            
            
//         },
//         tabBarLabelStyle: {
//             fontSize: totalSize(1.25),
//             marginBottom: Platform.OS == 'android' ? 0 : 0,
//             fontFamily: fontFamily?.appTextSemiBold,
            
//         },
//     }
// }