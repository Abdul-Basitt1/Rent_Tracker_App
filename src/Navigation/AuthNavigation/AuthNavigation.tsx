import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Auth from "../../Screens/Auth";
import { Routes } from "../../Constants";

const { Navigator, Screen } = createNativeStackNavigator()


const AuthNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name={Routes.Splash} component={Auth.Splash} />
        </Navigator>
    )
}

export default AuthNavigation