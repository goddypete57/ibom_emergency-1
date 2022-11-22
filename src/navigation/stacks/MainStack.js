import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const NavStack = createNativeStackNavigator();


export default function MainStack() {
    return (
        <NavStack.Navigator>
            <NavStack.Screen name="Home" component={Home} />
        </NavStack.Navigator>
    );
}