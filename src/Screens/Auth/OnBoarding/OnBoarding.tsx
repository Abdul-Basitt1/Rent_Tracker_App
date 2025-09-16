import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../Navigation/types';
import { MainContainer } from '../../../Components/MainContainer';
import { Images } from '../../../Images';
import Onboarding from 'react-native-onboarding-swiper';
import { Routes } from '../../../Constants';
import { styles, PALETTE } from './styles';
import { hp, wp } from '../../../Components/ResponsiveComponent';

type OnBoardingProps = NativeStackScreenProps<AuthStackParamList, 'OnBoarding'>;

const Dot = ({ selected }: { selected: boolean }) => (
    <View
        style={{
            width: selected ? wp(3.8) : wp(1.8),
            height: wp(1.8),
            borderRadius: wp(1),
            marginHorizontal: wp(0.9),
            backgroundColor: selected ? PALETTE.accent : PALETTE.dotIdle,
            opacity: selected ? 1 : 0.8,
        }}
    />
);

const Skip = (props: any) => (
    <TouchableOpacity {...props} style={[styles.navBtn, styles.navBtnGhost]}>
        <Text style={[styles.navText, styles.navTextGhost]}>Skip</Text>
    </TouchableOpacity>
);

const Next = (props: any) => (
    <TouchableOpacity {...props} style={[styles.navBtn, styles.navBtnGhost]}>
        <Text style={[styles.navText, styles.navTextGhost]}>Next</Text>
    </TouchableOpacity>
);

const Done = (props: any) => (
    <TouchableOpacity {...props} style={[styles.navBtn, styles.navBtnPrimary]}>
        <Text style={[styles.navText, styles.navTextPrimary]}>Get Started</Text>
    </TouchableOpacity>
);

const Card = ({ source }: { source: any }) => (
    <View style={styles.heroCard}>
        <Image source={source} style={styles.heroImage} resizeMode="contain" />
    </View>
);

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
    return (
        <MainContainer>
            <Onboarding
                // Layout polish
                containerStyles={styles.container}
                imageContainerStyles={styles.imageContainer}
                titleStyles={styles.title}
                subTitleStyles={styles.subtitle}
                bottomBarColor="transparent"
                bottomBarHeight={hp(12)}
                bottomBarHighlight={false}
                transitionAnimationDuration={400}
                controlStatusBar

                // Dots & Buttons
                DotComponent={Dot}
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}

                // Pages
                pages={[
                    {
                        backgroundColor: PALETTE.bg,
                        image: <Card source={Images.onBoarding1} />,
                        title: 'Track with Ease',
                        subtitle:
                            'See all shop rents in one clean dashboard. No clutter, just what matters.',
                    },
                    {
                        backgroundColor: PALETTE.bg,
                        image: <Card source={Images.onBoarding2} />,
                        title: 'Simple Recording',
                        subtitle:
                            'Log payments, dues, and notes quickly—stay accurate without effort.',
                    },
                    {
                        backgroundColor: PALETTE.bg,
                        image: <Card source={Images.onBoarding3} />,
                        title: 'Stay Organized',
                        subtitle:
                            'Summaries, reminders, and visual records to keep you ahead of schedule.',
                    },
                ]}

                onSkip={() => navigation.replace(Routes.Splash)}
                onDone={() => navigation.replace(Routes.Splash)}
            />
        </MainContainer>
    );
};

export default OnBoarding;
