import React from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../Navigation/types";
import { MainContainer } from "../../../Components/MainContainer";
import { Images } from "../../../Images";
import Onboarding from "react-native-onboarding-swiper";
import { Colors, Routes } from "../../../Constants";
import { styles } from "./styles";
import { hp, wp } from "../../../Components/ResponsiveComponent";

type OnBoardingProps = NativeStackScreenProps<AuthStackParamList, "OnBoarding">;

const Dot = ({ selected }: { selected: boolean }) => {
    const animatedValue = React.useRef(new Animated.Value(selected ? 1 : 0)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: selected ? 1 : 0,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [selected]);

    const width = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [wp(2), wp(6)],
    });

    return (
        <Animated.View
            style={{
                width,
                height: wp(2),
                borderRadius: wp(1),
                marginHorizontal: wp(1),
                backgroundColor: selected ? Colors.primary : Colors.dotIdle,
            }}
        />
    );
};

const Skip = (props: any) => (
    <TouchableOpacity {...props} style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
);

const Next = (props: any) => (
    <TouchableOpacity {...props} style={styles.nextBtn}>
        <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
);

const Done = (props: any) => (
    <TouchableOpacity {...props} style={styles.doneBtn}>
        <Text style={styles.doneText}>Get Started</Text>
    </TouchableOpacity>
);

const Card = ({ source }: { source: any }) => (
    <View style={styles.heroWrapper}>
        <Image source={source} style={styles.heroImage} resizeMode="contain" />
    </View>
);

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
    return (
        <MainContainer>
            <Onboarding
                containerStyles={styles.container}
                imageContainerStyles={styles.imageContainer}
                titleStyles={styles.title}
                subTitleStyles={styles.subtitle}
                bottomBarColor="transparent"
                bottomBarHeight={hp(12)}
                bottomBarHighlight={false}
                transitionAnimationDuration={400}
                controlStatusBar
                DotComponent={Dot}
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}

                pages={[
                    {
                        backgroundColor: "transparent",
                        image: <Card source={Images.onBoarding1} />,
                        title: "Track with Ease",
                        subtitle: "View all rents in one dashboard. Modern, simple, clear.",
                    },
                    {
                        backgroundColor: "transparent",
                        image: <Card source={Images.onBoarding2} />,
                        title: "Simple Recording",
                        subtitle: "Log payments and dues instantly with sleek, intuitive screens.",
                    },
                    {
                        backgroundColor: "transparent",
                        image: <Card source={Images.onBoarding3} />,
                        title: "Stay Organized",
                        subtitle: "Reminders and summaries help you stay ahead every month.",
                    },
                ]}
                onSkip={() => navigation.replace(Routes.Splash)}
                onDone={() => navigation.replace(Routes.Splash)}
            />
        </MainContainer>
    );
};

export default OnBoarding;
