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
  const [showModal, setShowModal] = useState(false)
  const [shouldRetry, setShouldRetry] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [requesting, setRequesting] = useState(false)
  const [request, setRequest] = useState(null)
  const socket = io(endpoints.ws,
    {
      extraHeaders: {
        'authorization': `Bearer ${token}`
      }
    }
  );
  useEffect(() => {
    socket.on('connect', (e) => {
      console.log('connected', socket.connected);
    });

    socket.on('disconnect', (e) => {
      console.log('disconnected', socket.connected);
    });


    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('alertAccepted');
    };
  });
  // socket.onAny((eventName, ...args) => {
  //   console.log(eventName, args);
  // });
  socket.on("alertAccepted", (...args) => {
    console.log('alertAccepted', args);
    navigation.replace(mainRoute.patrolResult, { request: args[0] })
    // playPause()
    // setAlert(args[0]);
    // args.length > 0 &&
    //     setCoordinate([
    //         {
    //             latitude: coordinates[0].latitude,
    //             longitude: coordinates[0].longitude,
    //         },
    //         {
    //             latitude: parseFloat(args[0].latitude),
    //             longitude: parseFloat(args[0].longitude),
    //         }
    //     ])

  });


  useEffect(() => {
    const response = fetch(endpoints.baseUrl + endpoints.user, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    response.then(res => res.json())
      .then((data) => {
        console.log('this user', data);
        if (response._j.ok) {
          // console.log(data);
          saveUser(data);
        }
      })

  }, []);

  const cancelRequest = async () => {
    setProcessing(true)
    const response = await fetch(endpoints.baseUrl + endpoints.requestHelp + `/${request.id}/cancel`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token
      },
    });
    response
      .json()
      .then(data => {
        setProcessing(false)
        console.log(data);
        if (response.ok) {
          Toast.show({
            type: 'success',
            text1: 'Request Cancelled',
            text2: data.message,
          });
          setRequest(null)
          navigation.goBack()
          // navigation.replace(mainRoute.patrolResult)
        } else {
          Toast.show({
            type: 'error',
            text1: 'Cancel Request Failed',
            text2: data.message,
          });
        }
      })
      .catch(err => {
        setProcessing(false)
        Toast.show({
          type: 'error',
          text1: 'Cancel request Failed',
          text2: err.message,
        });
        console.log(err.message);
      });
  }

  useEffect(() => {
    getCurrentPosition((callback) => {
      console.log('callback', callback);
      callback.position && getHelp(JSON.stringify(callback.position.coords.latitude), JSON.stringify(callback.position.coords.longitude));
      setShouldRetry(callback.position ? false : true)
      !callback.position && setShowModal(true);
      if (socket.connected) {
        socket.emit("updateLocation", {
          latitude: JSON.stringify(callback.position.coords.latitude),
          longitude: JSON.stringify(callback.position.coords.longitude)
        });
        console.log('sent', [JSON.stringify(callback.position.coords.longitude), JSON.stringify(callback.position.coords.latitude)]);
      }
    })
  }, [])


  const getHelp = async (latitude, longitude) => {
    setRequesting(true)
    console.log(latitude, longitude);
    let location = null
    await getAddressFromCoordinates(latitude, longitude, endpoints.gg, (callback) => {
      console.log('location', callback);
      location = callback
    })
    if (location) {
      const response = await fetch(endpoints.baseUrl + endpoints.requestHelp, {
        method: 'POST',
        body: JSON.stringify({
          "latitude": parseFloat(latitude),
          "longitude": parseFloat(longitude),
          "location": location,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token
        },
      });
      response
        .json()
        .then(data => {
          setRequesting(false)
          console.log(data);
          if (response.ok) {
            setRequest(data)
            // navigation.replace(mainRoute.patrolResult)
          } else {
            setShowModal(true)
            Toast.show({
              type: 'error',
              text1: 'Request Failed',
              text2: data.message,
            });
          }
        })
        .catch(err => {
          setRequesting(false)
          setShowModal(true)
          Toast.show({
            type: 'error',
            text1: 'Request Failed',
            text2: err.message,
          });
          console.log(err.message);
        });
    }

  };

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
            }}>Sorry!{'\n'}{shouldRetry ? 'Can\'t find your current location' : 'No patrol team or checkpoint found.'}</Text>
            <Button
              title={'Retry'}
              onPress={() => getCurrentPosition((callback) => {
                console.log('callback', callback);
                callback.position && getHelp(JSON.stringify(callback.position.coords.latitude), JSON.stringify(callback.position.coords.longitude));
                setShouldRetry(callback.position ? false : true)
                callback.position && setShowModal(true);
                if (socket.connected) {
                  socket.emit("updateLocation", {
                    latitude: JSON.stringify(callback.position.coords.latitude),
                    longitude: JSON.stringify(callback.position.coords.longitude)
                  });
                  console.log('sent', [JSON.stringify(callback.position.coords.longitude), JSON.stringify(callback.position.coords.latitude)]);
                }
              })}
              buttonStyle={{
                width: '70%',
                height: 40,
                alignSelf: 'center',
                marginVertical: 10,
              }}
              textColor={colors.white}
              enabled={true}
            />
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

          <Radar />

        </View>
        <Button
          title={'Cancel'}
          onPress={() => cancelRequest()}
          buttonStyle={styles.button}
          textColor={colors.white}
          enabled={!requesting && !processing}
          processing={processing}
        />
      </View>
    </View>
  );
};


async function requestLocationPermission() {
  if (Platform.OS === 'ios') {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'whenInUse'
    })

    Geolocation.requestAuthorization()
    // IOS permission request does not offer a callback :/
    return null
  } else if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.warn(err.message)
      return false
    }
  }
}


async function getCurrentPosition(callback) {
  const hasLocationPermission = await requestLocationPermission()
  /* This will only be fired on Android. On Apple we can not detect when/if a
   * location permission has been granted or denied. For that reason after a
   * predefined period we just timeout.
   */

  if (hasLocationPermission === false) {
    callback({
      locationAvailable: false,
      error: 'Can not obtain location permission'
    })
    return
  }

  Geolocation.getCurrentPosition(
    position => {
      callback({
        locationAvailable: true,
        position
      })
    },
    error => {
      callback({
        locationAvailable: false,
        error: error.message,
        errorCode: error.code
      })
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
  )
}


async function getAddressFromCoordinates(latitude, longitude, key, callback) {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`);
    const json = await response.json();
    //   setRealAddress(json.results[0]?.formatted_address);
    console.log(json.results[0]?.formatted_address)
    callback(json?.results[0]?.formatted_address)
  } catch (error) {
    console.error(error);
  }
}





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



const Radar = () => {
  const width = useWindowDimensions().width;
  const [fadeAnim] = useState(new Animated.Value(0));
  spinValue = new Animated.Value(0);
  let visible = false;
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

  return (
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
  )
}