import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';

import colors from '../../../assets/colors/colors';
import { AuthContext } from '../../../context/AuthContext';
import endpoints from '../../../assets/EndPoint/Endpoint';


export default PatrolResult = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const GOOGLE_API_KEY = endpoints.gg;
    const { user, token } = useContext(AuthContext);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    this.mapView = null;
    onMapPress = (e) => {
        this.mapView.animateToRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        });
    }

    const [coordinates] = useState([
        {
            latitude: 48.8587741,
            longitude: 2.2069771,
        },
        {
            latitude: 48.8323785,
            longitude: 2.3361663,
        },
    ]);
    const [
        currentLongitude,
        setCurrentLongitude
    ] = useState(0);
    const [
        currentLatitude,
        setCurrentLatitude
    ] = useState(0);
    const [
        locationStatus,
        setLocationStatus
    ] = useState('');
    useEffect(() => {
        Geolocation.watchPosition(
            (position) => {
                //Will give you the location on location change

                setLocationStatus('You are Here');
                console.log(position);

                //getting the Longitude from the location json
                //Setting Longitude state
                setCurrentLongitude(JSON.stringify(position.coords.longitude));

                //getting the Latitude from the location json
                //Setting Latitude state
                setCurrentLatitude(JSON.stringify(position.coords.latitude));
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 1000
            },
        );
    })
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
                    <MapViewDirections
                        origin={coordinates[0]}
                        destination={coordinates[1]}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={4}
                        strokeColor="#111111"
                        timePrecision="now"
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
                    />
                    <Marker coordinate={coordinates[0]} />
                    <Marker coordinate={coordinates[1]} />
                </MapView>
            </View>
        </View>
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