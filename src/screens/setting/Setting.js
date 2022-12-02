<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image,  SafeAreaView,PermissionsAndroid,Platform,Button,} from "react-native";
import colors from '../../../assets/colors/colors';
import Geolocation from '@react-native-community/geolocation';



export default Setting = () => {

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
            getOneTimeLocation();
            subscribeLocationLocation();
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
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
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
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
     
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
     
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
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

      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
            console.log(position);
     
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
     
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
     
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
     
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };
=======
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';
import endpoints from '../../../assets/EndPoint/Endpoint';
import { AuthContext } from '../../../context/AuthContext';
import mainRoute from '../../navigation/route/mainRoute';

export default Setting = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);

>>>>>>> 025ed0d2b0a2c70d3bc330f01e9a05e21319bb98
    return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
<<<<<<< HEAD
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.boldText}>
            {locationStatus}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Longitude: {currentLongitude}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text>
          <View style={{marginTop: 20}}>
            <Button
              title="Button"
              onPress={getOneTimeLocation}
            />
          </View>
=======

            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image
                            source={require('../../../assets/images/back.png')}
                            style={styles.headerLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </SafeAreaView>

            <TouchableOpacity onPress={() => navigation.navigate(mainRoute.profile)}
                style={styles.profileWrapper}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image
                        source={require('../../../assets/images/profile-image.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileTextWrapper}>
                        <Text style={styles.profileName}>{user ? user.firstName + ' ' + user.lastName : ''}</Text>
                        <Text style={styles.profileText}>Profile</Text>
                    </View>
                </View>
                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.arrowWrapper}
                />
            </TouchableOpacity>

            <View style={styles.curveWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate(mainRoute.accountSetting)}
                    style={styles.accountWrapper}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={require('../../../assets/images/account.png')}
                            style={styles.accountImage}
                        />
                        <Text style={styles.accountName}>Account Settings</Text>
                    </View>

                    <Image
                        source={require('../../../assets/images/foward.png')}
                        style={styles.accountArrowWrapper}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}
                    style={styles.privacyWrapper}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={require('../../../assets/images/privacy.png')}
                            style={styles.privacyImage}
                        />
                        <Text style={styles.privacyName}>Privacy Policy</Text>
                    </View>
                    <Image
                        source={require('../../../assets/images/foward.png')}
                        style={styles.privacyArrowWrapper}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logout()}
                    style={styles.logoutWrapper}>
                    <Image
                        source={require('../../../assets/images/logout.png')}
                        style={styles.logoutImage}
                    />
                    <Text style={styles.logoutName}>Logout</Text>
                </TouchableOpacity>
            </View>

>>>>>>> 025ed0d2b0a2c70d3bc330f01e9a05e21319bb98
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Geolocation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column'
    },
    headerWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.appTopBar,
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
    },
    headerLeft: {
        marginStart: 16,
        width: 24,
        height: 21,
    },
    headerText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        marginStart: 33,
        color: colors.textColor1,
    },
    profileWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        paddingTop: 24,
        justifyContent: 'space-between',
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 45,
    },
    profileTextWrapper: {
        flexDirection: 'column',
        paddingHorizontal: 12,
        marginTop: 5,
    },
    profileName: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        color: colors.textColor1,
    },
    profileText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 14,
        color: colors.inactiveColor,
    },
    arrowWrapper: {
        width: 24,
        height: 24,
        marginTop: 5,
        marginStart: 112,
    },
    curveWrapper: {
        marginTop: 25,
        flexDirection: 'column',
        backgroundColor: colors.white,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        flex: 1,
        elevation: 5,
    },
    accountWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 41,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    accountName: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 19,
        marginTop: 5,
        color: colors.textColor1,
    },
    accountArrowWrapper: {
        alignContent: 'flex-end',
        marginStart: 140,
        marginTop: 5,
        marginEnd: 32,
    },
    privacyWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    privacyName: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 19,
        marginTop: 5,
        color: colors.textColor1,
    },
    privacyArrowWrapper: {
        alignContent: 'flex-end',
        marginStart: 164,
        marginTop: 5,
        marginEnd: 32,
    },
    logoutWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 34,
    },
    logoutName: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginTop: 5,
        marginStart: 19,
        color: colors.textColor1,
    },
<<<<<<< HEAD
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      boldText: {
        fontSize: 25,
        color: 'red',
        marginVertical: 16,
      },
});
=======
});
>>>>>>> 025ed0d2b0a2c70d3bc330f01e9a05e21319bb98
