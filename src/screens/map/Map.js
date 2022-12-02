import React, {useState, useEffect}  from "react";
import { View, Text, StyleSheet, Image, Dimensions, } from "react-native";
import colors from '../../../assets/colors/colors';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';



export default Map = () => {


    // const [
    //     currentLongitude,
    //     setCurrentLongitude
    //   ] = useState('...');
    //   const [
    //     currentLatitude,
    //     setCurrentLatitude
    //   ] = useState('...');
    //   const [
    //     locationStatus,
    //     setLocationStatus
    //   ] = useState('');


    //   useEffect(() => {
    //     const requestLocationPermission = async () => {
    //       if (Platform.OS === 'ios') {
    //         getOneTimeLocation();
    //         subscribeLocationLocation();
    //       } else {
    //         try {
    //           const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //               title: 'Location Access Required',
    //               message: 'This App needs to Access your location',
    //             },
    //           );
    //           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             //To Check, If Permission is granted
    //             getOneTimeLocation();
    //             subscribeLocationLocation();
    //           } else {
    //             setLocationStatus('Permission Denied');
    //           }
    //         } catch (err) {
    //           console.warn(err);
    //         }
    //       }
    //     };
    //     requestLocationPermission();
    //     return () => {
    //       Geolocation.clearWatch(watchID);
    //     };
    //   }, []);
 
    //   const getOneTimeLocation = () => {
    //     setLocationStatus('Getting Location ...');
    //     Geolocation.getCurrentPosition(
    //       //Will give you the current location
    //       (position) => {
    //         setLocationStatus('You are Here');
     
    //         //getting the Longitude from the location json
    //         const currentLongitude = 
    //           JSON.stringify(position.coords.longitude);
     
    //         //getting the Latitude from the location json
    //         const currentLatitude = 
    //           JSON.stringify(position.coords.latitude);
     
    //         //Setting Longitude state
    //         setCurrentLongitude(currentLongitude);
            
    //         //Setting Longitude state
    //         setCurrentLatitude(currentLatitude);
    //       },
    //       (error) => {
    //         setLocationStatus(error.message);
    //       },
    //       {
    //         enableHighAccuracy: false,
    //         timeout: 30000,
    //         maximumAge: 100
    //       },
    //     );
    //   };

    //   const subscribeLocationLocation = () => {
    //     watchID = Geolocation.watchPosition(
    //       (position) => {
    //         //Will give you the location on location change
            
    //         setLocationStatus('You are Here');
    //         console.log(position);
     
    //         //getting the Longitude from the location json        
    //         const currentLongitude =
    //           JSON.stringify(position.coords.longitude);
     
    //         //getting the Latitude from the location json
    //         const currentLatitude = 
    //           JSON.stringify(position.coords.latitude);
     
    //         //Setting Longitude state
    //         setCurrentLongitude(currentLongitude);
     
    //         //Setting Latitude state
    //         setCurrentLatitude(currentLatitude);
    //       },
    //       (error) => {
    //         setLocationStatus(error.message);
    //       },
    //       {
    //         enableHighAccuracy: false,
    //         maximumAge: 1000
    //       },
    //     );
    //   };

    const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Loading...</Text> */}
            <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapView}
      initialRegion={{
        latitude: 4.9057,
        longitude: 7.8537,
        latitudeDelta: 0.0025,
        longitudeDelta: 0.0421,
      }}>
  
      </MapView>
   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black,
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
     mapView: {
     width: Dimensions.get("window").width,
     height: Dimensions.get("window").height

    },
});
