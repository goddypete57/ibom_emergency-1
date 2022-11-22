import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingRoute from "../routs/settingRouts";
import SettingScreen from "../../screens/setting/Setting";


const Stack = createNativeStackNavigator();

export default SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SettingRoute.Setting} component={SettingScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}