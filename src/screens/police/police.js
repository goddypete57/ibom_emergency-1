import React, {useState, useEffect}  from "react";
import { View, Text, StyleSheet, Image, Dimensions, } from "react-native";
import colors from '../../../assets/colors/colors';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';



export default Police = () => {


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
