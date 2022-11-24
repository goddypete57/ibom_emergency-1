import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";

import colors from '../../../assets/colors/colors';


export default Sos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
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
});
