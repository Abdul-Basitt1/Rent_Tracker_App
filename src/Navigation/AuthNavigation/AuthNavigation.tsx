import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Auth from "../../Screens/Auth";
import { Routes } from "../../Constants";
import { AuthStackParamList } from "../types";

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

export

    const AuthNavigation = () => {
        return (
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name={Routes.Splash} component={Auth.Splash} />
                <Screen name={Routes.OnBoarding} component={Auth.OnBoarding} />
            </Navigator>
        )
    }

export default AuthNavigation