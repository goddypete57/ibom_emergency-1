
import React, { useEffect, useContext, useState } from "react";

import {StatusBar, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Splash from "./src/screens/splash/Splash";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.js";
import AuthStack from "./src/navigation/stacks/AuthStack";
import MainStack from "./src/navigation/stacks/DrawerStack";



const RootNavigator = () => {
  const { token } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2000) });
  return (
    <NavigationContainer>
      {
        isLoading ? <Splash /> :
          !token ? <AuthStack /> :
            <MainStack />}
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
      <Toast />
    </>
  );
}