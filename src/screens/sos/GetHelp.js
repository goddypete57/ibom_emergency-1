import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions, Animated, Easing, PermissionsAndroid, Platform, Modal, Linking } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-toast-message';
import io from 'socket.io-client';

import colors from '../../../assets/colors/colors';
import Menu from '../../../assets/icons/menu.svg';
import { AuthContext } from '../../../context/AuthContext';
import endpoints from '../../../assets/EndPoint/Endpoint';
import mainRoute from '../../navigation/route/mainRoute';

export default GetHelp = ({ navigation }) => {
  const { user, token, saveUser } = useContext(AuthContext);
  const width = useWindowDimensions().width;
  const [fadeAnim] = useState(new Animated.Value(0));
  const [showModal, setShowModal] = useState(false)
  const socket = io(endpoints.ws,
    {
      extraHeaders: {
        'authorization': `Bearer ${token}`
      }
    }
  );
  spinValue = new Animated.Value(0);
  let visible = false;
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  const watchID = Geolocation.watchPosition(
    (position) => {
      //Will give you the location on location change

      setLocationStatus('You are Here');
      console.log(position);
      if (socket.connected) {
        socket.emit("updateLocation", {
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude)
        });
        console.log('sent', [JSON.stringify(position.coords.longitude), JSON.stringify(position.coords.latitude)]);
      }
      //getting the Longitude from the location json
      //Setting Longitude state
      // setCurrentLongitude(JSON.stringify(position.coords.longitude));

      //getting the Latitude from the location json
      //Setting Latitude state
      // setCurrentLatitude(JSON.stringify(position.coords.latitude));
    },
    (error) => {
      setLocationStatus(error.message);
    },
    {
      enableHighAccuracy: false,
      maximumAge: 1000
    },
  );

  const getHelp = async ({ latitude, longitude }) => {
    const response = await fetch(endpoints.baseUrl + endpoints.requestHelp, {
      method: 'POST',
      body: JSON.stringify({
        "latitude": latitude,
        "longitude": longitude
        // "location": "string",
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token
      },
    });
    response
      .json()
      .then(data => {
        console.log(data);
        if (response.ok) {
          navigation.navigate(mainRoute.patrolResult)
        } else {
          setShowModal(true)
          Toast.show({
            type: 'error',
            text1: 'Request Failed',
            text2: data.message,
          });
        }
        // navigation.navigate(authRouts.otp, data)
      })
      .catch(err => {
        setShowModal(true)
        Toast.show({
          type: 'error',
          text1: 'Request Failed',
          text2: err.message,
        });
        console.log(err.message);
      });
  };

  useEffect(() => {
    socket.on('connect', (e) => {
      setIsConnected(true);
      console.log('connected', socket.connected);
    });

    socket.on('disconnect', (e) => {
      setIsConnected(false);
      console.log('disconnected', socket.connected);
    });


    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receiveAlerts');
    };
  });
  socket.onAny((eventName, ...args) => {
    console.log(eventName, args);
  });
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
      watchID
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
          getOneTimeLocation();
          watchID
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        //Setting Longitude state
        // setCurrentLongitude(JSON.stringify(position.coords.longitude));

        //Setting Longitude state
        // setCurrentLatitude(JSON.stringify(position.coords.latitude));
        getHelp(JSON.stringify(position.coords.latitude), JSON.stringify(position.coords.longitude));
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };


  // First set up animation 
  Animated.loop(
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }
    )
  ).start()

  useEffect(() => {
    setInterval(() => {
      visible = !visible;
      // setTimeout(() => {
      if (visible) {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true // <-- Add this
        }).start();
      } else {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true // <-- Add this
        }).start();
      }
      // console.log(fadeAnim)
      // }, 800)
    }, 3000);

  });

  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  useEffect(() => {
    const response = fetch(endpoints.baseUrl + endpoints.user, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    response.then(res => res.json())
      .then((data) => {
        console.log(data);
        if (response._j.ok) {
          // console.log(data);
          saveUser(data);
        }
      })

  }, []);
  return (
    <View style={styles.container}>
      <Modal
        transparent
        visible={showModal}
        animationType={'fade'}
        onRequestClose={() => {
          setShowModal(false);
          navigation.goBack();
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setShowModal(false);
            navigation.goBack();
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
          <View style={{
            width: "90%",
            height: 202,
            elevation: 5,
            borderRadius: 20,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              color: colors.textColor1,
              fontSize: 16,
              fontFamily: 'Outfit-Bold',
              textAlign: 'center',
            }}>Sorry!{'\n'}No patrol team or checkpoint found.</Text>
            <Text style={{
              color: colors.textColor1,
              fontSize: 16,
              fontFamily: 'Outfit-Regular',
              marginTop: 16,
            }}>Call this Emergency number</Text>
            <Text
              onPress={() => Linking.openURL(`tel:${+2347025568546}`)}
              style={{
                color: colors.orange3,
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginTop: 15,
                textDecorationLine: 'underline'
              }}>+234 7025 5685 46</Text>
          </View>

        </TouchableOpacity>

      </Modal>
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
      <View style={{
        justifyContent: 'space-between',
        flex: 1
      }}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.textandImageWrapper}>
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
            </View>
          </View>

          <View style={styles.keepCalmWrapper}>
            <Text style={styles.keepCalmText}>Do not panic</Text>
            <Text style={styles.SecondText}>
              Help is on the way
            </Text>
          </View>

          <View style={{
            alignSelf: 'center',
            marginTop: 35,
            width: 250 / 360 * width,
            height: 250 / 360 * width,
          }}>
            <Image
              source={require('../../../assets/images/radar-bg.png')}
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                position: 'absolute',
                transform: [{ translateX: 3 }, { translateY: -1 }],
              }}
            />
            <Animated.Image
              source={require('../../../assets/images/radar-scan.png')}
              style={{
                resizeMode: 'contain',
                width: '99%',
                height: '99%',
                alignSelf: 'center',
                transform: [{ rotate: spin }],
              }}
            />
            <Animated.View style={{
              position: 'absolute',
              backgroundColor: colors.lightGreen2,
              width: 14 / 360 * width,
              height: 14 / 360 * width,
              borderRadius: 10 / 360 * width,
              alignSelf: 'center',
              opacity: fadeAnim,
              transform: [{ translateX: 50 }, { translateY: 50 }],
            }} />
            <Animated.View style={{
              position: 'absolute',
              backgroundColor: colors.lightGreen2,
              width: 14 / 360 * width,
              height: 14 / 360 * width,
              borderRadius: 10 / 360 * width,
              alignSelf: 'center',
              opacity: fadeAnim,
              transform: [{ translateX: -50 }, { translateY: 100 }],
            }} />
          </View>
        </View>
        <Button
          title={'Cancel'}
          onPress={() => navigation.goBack()}
          buttonStyle={styles.button}
          textColor={colors.white}
          enabled={true}
        />
      </View>
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
  button: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 63,
    marginVertical: 50,
  },

});
