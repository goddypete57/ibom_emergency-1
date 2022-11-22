import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PoliceRoute from "../routs/policeRouts";
import police from "../../screens/police/police";


const Stack = createNativeStackNavigator();

export default PoliceStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={PoliceRoute.police} component={police} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}