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
import shop from '../../../assets/icons/Shop.svg';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import GetHelp from '../../screens/sos/GetHelp';
import PoliceHightLight from '../../../assets/icons/policeHighLight.svg';
import SettingHightLight from '../../../assets/icons/settinghightLight.svg';
import Profile from '../../screens/setting/profile/Profile'


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
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate(mainRoute.police);
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {  routeName === mainRoute.police ? <PoliceHightLight/>:<PoliceIcon/>}
         

            <Text
              style={{
                color:
                  routeName === mainRoute.police ? colors.black : colors.black,
                fontFamily: 'Outfit-Medium',
                fontSize: 16,
              }}>
              police
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate(mainRoute.sos);
          }}>
          {/* <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={[colors.blue1, colors.blue2, colors.blue3]}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
           
              borderRadius: 70,
              marginBottom: 25,
            }}> */}

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(252, 155, 92, 1)', 'rgba(255, 24, 24, 1)']}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
              borderRadius: 70,
              marginBottom: 25,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
             
              elevation: 10,
              shadowOpacity: 0.9,
             


            }}>
            <View>
              <Text
                style={{
                  color:
                    routeName === mainRoute.sos ? colors.white : colors.white,
                  fontFamily: 'Outfit-Medium',
                  fontSize: 20,
                }}>
                SOS
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate(mainRoute.setting);
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
             {  routeName === mainRoute.setting ? <SettingHightLight/>:<Setting/>}
            <Text
              style={{
                color:
                  routeName === mainRoute.police ? colors.black : colors.black,
                fontFamily: 'Outfit-Medium',
                fontSize: 16,
              }}>
              Setting
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainStack = (route, navigation ) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nav" component={Nav} options={{headerShown: false}} />
      <Stack.Screen name={mainRoute.getHelp} component={GetHelp} options={{headerShown: false}} />
      <Stack.Screen name={mainRoute.profile} component={Profile} options={{headerShown: false}} />

    </Stack.Navigator>
  );
};
