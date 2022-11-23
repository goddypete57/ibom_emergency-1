import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import colors from '../../../assets/colors/colors';
import authRoute from '../route/authRoute';
import mainRoute from '../route/mainRoute';
import Sos from '../../screens/sos/Sos';
import setting from '../../screens/setting/Setting';
import police from '../../screens/police/police';

import PoliceIcon from '../../../assets/icons/Police.svg';
import Setting from '../../../assets/icons/Setting.svg';
import shop from '../../../assets/icons/Shop.svg'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const NavStack = createNativeStackNavigator();

const Nav = ({route, navigation}) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? mainRoute.sos;

  return (
    <>
      <NavStack.Navigator>
        <NavStack.Screen
          name={mainRoute.sos}
          component={Sos}
          options={{headerShown: false}}
        />

        <NavStack.Screen
          name={mainRoute.police}
          component={police}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name={mainRoute.setting}
          component={setting}
          options={{headerShown: false}}
        />
      </NavStack.Navigator>
      <View
        style={{
          backgroundColor: colors.white,
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingTop: 15,
          paddingBottom: 12,
          elevation: 20,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(mainRoute.police);
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
          <Text>
            man
          </Text>


            <Text
              style={{
                color:
                  routeName === mainRoute.police
                    ? colors.primaryColor
                    : colors.inacticeGradient1,
                marginTop: 5,
              }}>
              police
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(mainRoute.sos);
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
              borderRadius: 70,
              backgroundColor: colors.inactiveColor,
              marginBottom: 25,
            }}>
            <Text
              style={{
                color:
                  routeName === mainRoute.sos
                    ? colors.primaryColor
                    : colors.inacticeGradient1,
                fontFamily: 'Outfit-Medium',
                fontSize: 20,
              }}>
              SOS
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(mainRoute.police);
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color:
                  routeName === mainRoute.police
                    ? colors.primaryColor
                    : colors.inacticeGradient1,
                marginTop: 5,
              }}>
              Setting
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nav" component={Nav} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
