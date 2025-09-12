import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as App from "../../Screens/App";
import { Routes } from "../../Constants";
import { AppStackParamList } from "../types";

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()

export

    const AppNavigation = () => {
        return (
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name={Routes.Home} component={App.Home} />
            </Navigator>
        )
    }

export default AppNavigation