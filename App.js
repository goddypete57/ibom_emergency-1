import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Platform } from "react-native";
import MainStacks from "./src/navigation/stacks/GneralStack"
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthContextProvider } from "./context/AuthContext.js";
const RootNavigator = () => {


  
  return (
    <NavigationContainer>
      {
<MainStacks/>
      }
    </NavigationContainer>
  )
}
export default function App() {
  if (Platform.OS == 'ios') {
    StatusBar.setBarStyle('light-content', true);	//<<--- add this
}
  return (
    <>
     <AuthContextProvider>
     <StatusBar backgroundColor={"#000"} />
      <RootNavigator />
    </AuthContextProvider>

    </>
  );
}