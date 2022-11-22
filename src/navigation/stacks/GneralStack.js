
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';

const tab = createNativeStackNavigator();

export default  GeneralStack = ()=>{
    return (
        <tab.Navigator>
            <tab.Screen name = "general" componet ={MainStack} options={{ headerShown: false }} />
        </tab.Navigator>
    );
}