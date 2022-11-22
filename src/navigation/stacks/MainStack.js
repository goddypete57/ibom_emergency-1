import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mainRouts from '../routs/mainRouts';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import SOS from '../../screens/sos/Sos';
import police from '../../screens/police/police';

const Stack = createNativeStackNavigator();

export default MainStacks = ({route, navigation}) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? mainRouts.sos;

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Stack.Navigator>
        <Stack.Screen
          name={mainRouts.sos}
          component={SOS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={mainRouts.police}
          component={police}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={mainRouts.settings}
          component={SOS}
          options={{headerShown: false}}
        />
      </Stack.Navigator>


      <View style={styles.bottomWrapper}>
        <TouchableOpacity
          onPress={() => {
                                 
          }}>
          <View style={styles.bottomItem}>
           
            <Text
              style={{
                color: colors.menuInactive,
                marginTop: 5,
                fontFamily: 'OpenSans-SemiBold',
              }}>
              Police
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
           
          }}>
          <View style={styles.bottomItemcenter}>
          <Text>
            Sos
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          
          }}>
          <View style={styles.bottomItem}>
           
            <Text
              style={{
                color:
                  routeName == mainRouts.sos
                    ? colors.primary
                    : colors.menuInactive,
                marginTop: 5,
                fontFamily: 'OpenSans-SemiBold',
              }}>
              Wallet
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

