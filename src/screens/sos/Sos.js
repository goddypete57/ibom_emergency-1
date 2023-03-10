import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,PermissionsAndroid,Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import colors from '../../../assets/colors/colors';
import Menu from '../../../assets/icons/menu.svg';
import mainRoute from '../../navigation/route/mainRoute';
import { MotiView } from 'moti';
import { color, Easing } from 'react-native-reanimated';
import { AuthContext } from '../../../context/AuthContext';

export default Sos = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');


  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        // getOneTimeLocation();
        // subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            // getOneTimeLocation();
            // subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    // return () => {
    //   Geolocation.clearWatch(watchID);
    // };
  }, []);
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/Map.png')}
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          position: 'absolute',
        }}
      />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Menu />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(mainRoute.profile)}
          style={styles.textandImageWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.welcomeText}>
              Welcome <Text style={styles.userNmae}>{user ? user.firstName : ''}</Text>
              {'\n  '}
              <Text style={styles.profileStatus}>Complete profile</Text>
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU',
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.keepCalmWrapper}>
        <Text style={styles.keepCalmText}>KEEP CALM!</Text>
        <Text style={styles.SecondText}>
          Double Tap the button below to scan for{'\n'}
          the nearest Security
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate(mainRoute.getHelp)}
        style={styles.circleWrapper}>
        <View style={[styles.dot, styles.center]}>
          {[...Array(3).keys()].map(index => {
            return (
              <MotiView
                from={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  loop: true,
                  repeatReverse: false,
                  delay: index * 400
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            );
          })}
          <View
            style={{
              width: 208.66,
              height: 208.66,
              backgroundColor: colors.red,
              borderRadius: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.callhelpText}>Call{'\n'} Help</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginLeft: 16,
    marginRight: 19,
  },
  textandImageWrapper: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginEnd: 5,
  },

  welcomeText: {
    color: colors.brown,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  userNmae: {
    color: colors.brown,
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
  },
  profileStatus: {
    color: colors.red,
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
  },
  keepCalmWrapper: {
    alignItems: 'center',
    marginTop: 51,
  },

  keepCalmText: {
    color: colors.brown,
    fontSize: 24,
    fontFamily: 'Outfit-SemiBold',
  },
  SecondText: {
    color: colors.brown,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: 5,
  },
  callhelpText: {
    color: colors.white,
    fontSize: 32,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },

  circleWrapper: {
    alignSelf: 'center',
    marginTop: 80,
  },

  dot: {
    width: 160.66,
    height: 160.66,
    borderRadius: 208.66,
    backgroundColor: colors.alpha_orange
  },
  center: { alignItems: 'center', justifyContent: 'center' }
});
