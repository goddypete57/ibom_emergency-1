import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import authRouts from '../route/authRoute';
import Login from '../../../src/screens/auth/Login';
import OnboardingScreen from '../../../src/screens/auth/OnboardScreen';
// import SIgnUP from "../../../src/screens/auth/SignUp"
import SetUpAccount from '../../../src/screens/auth/SetUpAccount';
import SetUpAccount2 from '../../screens/auth/SetUpAccount2';
import verifyOtp from '../../screens/auth/verifyOtp';



const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={authRouts.onbordingScreen}
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.setUpAccount}
        component={SetUpAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.setUpAccount2}
        component={SetUpAccount2}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={authRouts.login}
        component={Login}
        options={{headerShown: false}}
      />


<Stack.Screen
        name={authRouts.verifyOtp}
        component={verifyOtp}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};
