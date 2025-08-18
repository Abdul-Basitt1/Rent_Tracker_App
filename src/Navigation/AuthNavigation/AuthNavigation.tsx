import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../Constants";
import * as Auth from "../../Screens/Auth";

const { Navigator, Screen } = createNativeStackNavigator()


const AuthNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name={Routes.Splash} component={Auth.Splash} />
        </Navigator>
    )
}

export default AuthNavigation