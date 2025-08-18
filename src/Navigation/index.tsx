import AuthNavigation from "./AuthNavigation/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "../Constants";
const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation