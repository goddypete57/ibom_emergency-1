import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../../../assets/colors/colors';
import Help from '../../../assets/icons/helps.svg';
import Persons from '../../../assets/icons/person.svg';
import Info from '../../../assets/icons/info.svg';
import Notfication from '../../../assets/icons/Notification.svg';
import Refresh from '../../../assets/icons/refresh.svg';
import SOSIcon from '../../../assets/icons/sos.svg';

import MainStack from './MainStack';

import {AuthContext} from '../../../context/AuthContext';
import Sos from '../../screens/sos/Sos';
import mainRoute from '../route/mainRoute';

const Drawer = createDrawerNavigator();

export default DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Main"
        component={MainStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

function DrawerContent(props) {
  const {logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <View style={styles.content}>
        <ScrollView
          vertical
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate(mainRoute.sos)}>
            <View style={styles.itemWrapper}>
              <SOSIcon />
              <Text style={styles.items}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate(mainRoute.profile)}>
            <View style={styles.itemWrapper}>
              <Persons />
              <Text style={styles.items}>My Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.itemWrapper}>
              <Notfication />
              <Text style={styles.items}>Notfication</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.itemWrapper}>
              <Refresh />
              <Text style={styles.items}>Feedback</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.itemWrapper}>
              <Help />
              <Text style={styles.items}>Help & Support</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.itemWrapper}>
              <Info />
              <Text style={styles.items}>About App</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.textColor1,
    fontSize: 28,
    fontFamily: 'Outfit-Bold',
  },

  content:{
    marginTop:25
  },
  items: {
    flexDirection: 'row',
    color: colors.textColor1,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    marginStart: 24,
  },
  itemWrapper: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems:'center'
  },
});
