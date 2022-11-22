import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, } from 'react-native';

import colors from '../../../assets/colors/colors';
import authRoute from '../route/authRoute';
import mainRoute from '../route/mainRoute';
import Sos from '../../screens/sos/Sos';


const Stack = createNativeStackNavigator();
const NavStack = createNativeStackNavigator();


const Nav = ({ navigation }) => {
    return (
        <>
            <NavStack.Navigator>
                <NavStack.Screen name={mainRoute.sos} component={Sos} options={{ headerShown: false }} />

            </NavStack.Navigator>
            <View style={{
                backgroundColor: colors.linearGradientOrange1,
                height: 60,
            }}>

            </View>
        </>
    );
}

export default MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Nav' component={Nav} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}