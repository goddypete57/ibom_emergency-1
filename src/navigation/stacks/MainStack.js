import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../../../assets/colors/colors';
import authRoute from '../route/authRoute';
import mainRoute from '../route/mainRoute';
import Sos from '../../screens/sos/Sos';


const Stack = createNativeStackNavigator();
const NavStack = createNativeStackNavigator();


export default function MainStack() {
    return (
        <NavStack.Navigator>
            <NavStack.Screen name={mainRoute.sos} component={Sos} />
        </NavStack.Navigator>
    );
}