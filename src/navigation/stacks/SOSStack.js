import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SosRouts from "../routs/sosRouts";
import SosScreen from "../../screens/sos/Sos";


const Stack = createNativeStackNavigator();

export default SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SosRouts.sos} component={SosScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}