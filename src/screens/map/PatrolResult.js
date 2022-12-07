import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, PermissionsAndroid, Platform, } from "react-native";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import io from 'socket.io-client';

import colors from '../../../assets/colors/colors';
import { AuthContext } from '../../../context/AuthContext';
import endpoints from '../../../assets/EndPoint/Endpoint';


export default PatrolResult = ({ route, navigation }) => {
    const { request } = route.params;
    console.log('request', request);
    const { width, height } = Dimensions.get('window');
    const GOOGLE_API_KEY = endpoints.gg;
    const { user, token } = useContext(AuthContext);
    const socket = io(endpoints.ws,
        {
            extraHeaders: {
                'authorization': `Bearer ${token}`
            }
        }
    );
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const [allowLocation, setAllowLocation] = useState(false);
    this.watchID = null
    const [coordinates, setCoordinate] = useState([
        {
            latitude: parseFloat(request.user.currentLatitude),
            longitude: parseFloat(request.user.currentLongitude),
        },
        {
            latitude: parseFloat(request.latitude),
            longitude: parseFloat(request.longitude),
        },
    ]);

    onMapPress = (e) => {
        this.mapView.animateToRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        });
    }

    useEffect(() => {

        socket.on('connect', (e) => {
            console.log('connected', socket.connected);
            socket.emit("patrolTracking", { requestId: request.id });
            setTimeout(() => {
                socket.emit("updateLocation", {
                    latitude: parseFloat(coordinates[0].latitude),
                    longitude: parseFloat(coordinates[0].longitude),
                });
                console.log(' first sent', [coordinates[0].longitude, coordinates[0].latitude,]);
            }, 500)
        });

        socket.on('disconnect', (e) => {
            console.log('disconnected', socket.connected);
        });

        // socket.onAny((eventName, ...args) => {
        //     console.log(eventName, args);
        // });
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            // socket.off('receiveAlerts');
        };
    },[]);

    socket.on("patrolTracking", (...args) => {
        console.log('patrolTracking', args);
        args.length > 0 &&
            setCoordinate([
                {
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude,
                },
                {
                    latitude: parseFloat(args[0].currentLatitude),
                    longitude: parseFloat(args[0].currentLongitude),
                }
            ])

    });

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
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
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 75,
                }}>
                    <Image
                        source={require('../../../assets/images/patrol-result-top.png')}
                        style={{
                            resizeMode: 'cover',
                            width: '100%',
                            height: '100%',
                            alignSelf: 'center',
                            position: 'absolute',
                        }}
                    />
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'Outfit-Medium',
                        color: colors.white,
                        textAlign: 'center',
                        marginLeft: 20,
                    }}>{duration.toFixed(2)}mins{'\n'}<Text style={{
                        fontSize: 16,
                        fontFamily: 'Outfit-Regular',
                    }}>Help arrival time</Text></Text>
                    <View style={{
                        height: '60%',
                        width: 3,
                        backgroundColor: colors.background5,
                        transform: [{ translateY: 7 }],
                    }} />
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'Outfit-Medium',
                        color: colors.white,
                        textAlign: 'center',
                        marginRight: 20,
                    }}>{distance.toFixed(2)}km{'\n'}<Text style={{
                        fontSize: 16,
                        fontFamily: 'Outfit-Regular',
                    }}>Distance from help</Text></Text>
                </View>
            </View>
            <View style={styles.mapWrapper}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapView}
                    onPress={this.onMapPress}
                    // region={{
                    //     latitude: parseFloat(currentLatitude),
                    //     longitude: parseFloat(currentLongitude),
                    //     latitudeDelta: 0.015,
                    //     longitudeDelta: 0.0121,
                    // }}
                    ref={c => this.mapView = c}
                    initialRegion={{
                        latitude: coordinates[0].latitude,
                        longitude: coordinates[0].longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0922 * (width / height),
                    }}>
                    {coordinates.map((coordinate, index) =>
                        <Marker key={`coordinate_${index}`} coordinate={coordinate} pinColor={index == 0 ? "#495BF8" : undefined} />
                    )}
                    {(coordinates.length >= 2) && (

                        <MapViewDirections
                            origin={coordinates[0]}
                            destination={coordinates[1]}
                            apikey={GOOGLE_API_KEY}
                            strokeWidth={4}
                            strokeColor="#495BF8"
                            timePrecision="now"
                            onStart={(params) => {
                                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                            }}
                            onReady={result => {
                                console.log(`Distance: ${result.distance} km`)
                                console.log(`Duration: ${result.duration} min.`)
                                setDistance(result.distance);
                                setDuration(result.duration);

                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (width / 20),
                                        bottom: (height / 20),
                                        left: (width / 20),
                                        top: (height / 20),
                                    }
                                });
                            }}
                            onError={(errorMessage) => {
                                // console.log('GOT AN ERROR');
                            }}
                        />)}
                    {/* <Marker coordinate={coordinates[0]} />
                    <Marker coordinate={coordinates[1]} /> */}
                </MapView>
            </View>
        </View>
    )
}





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






const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        backgroundColor: colors.appTopBar,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
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
    mapView: {
        width: '100%',
        height: '100%',

    },
});