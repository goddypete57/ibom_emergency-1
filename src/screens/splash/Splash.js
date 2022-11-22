import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";


export default Splash = () => {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
});

