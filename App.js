<<<<<<< HEAD
import React, { useEffect, useContext, useState } from "react";
import { StatusBar, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import Toast from 'react-native-toast-message';


import Splash from "./src/screens/onboarding/Splash";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.js";
import AuthStack from "./src/navigation/stacks/AuthStack";
import MainStack from "./src/navigation/stacks/MainStack";



const RootNavigator = () => {
  const { token } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2000) });
  return (
    <NavigationContainer>
      {
        isLoading ? <Splash /> :
          token ? <MainStack /> :
            <AuthStack />}
    </NavigationContainer>
=======
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Platform } from "react-native";
import MainStacks from "./src/navigation/stacks/GneralStack"
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthContextProvider } from "./context/AuthContext.js";
import SOSStack from "./src/navigation/stacks/SOSStack";
const RootNavigator = () => {  
  return (
    <NavigationContainer>
 
    </NavigationContainer>

>>>>>>> 47b1063d9da8b49b0438f6a425285b6ba7d93ea7
  )
}
export default function App() {
  if (Platform.OS == 'ios') {
    StatusBar.setBarStyle('light-content', true);	//<<--- add this
<<<<<<< HEAD
  }
  return (
    <>
      <AuthContextProvider>
        <StatusBar backgroundColor={"#000"} />
        <RootNavigator />
      </AuthContextProvider>
      <Toast />
=======
}
  return (
    <>
     <AuthContextProvider>
     <StatusBar backgroundColor={"#000"} />
      <RootNavigator />
    </AuthContextProvider>

>>>>>>> 47b1063d9da8b49b0438f6a425285b6ba7d93ea7
    </>
  );
}