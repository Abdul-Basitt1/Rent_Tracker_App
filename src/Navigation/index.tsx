import AuthNavigation from "./AuthNavigation/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../Constants";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.Splash}>
                <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation