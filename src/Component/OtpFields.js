import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

export default OtpFields = ({ nuberOfFields, style, fieldStyle, onChangeText = (text) => { }, value }) => {
    const otpFields = [];
    const refFocus = useRef(null);

    for (var t = 0; t < nuberOfFields; t++) {
        otpFields.push(
            <TouchableOpacity
                onPress={() => { refFocus.current.focus() }}
                key={t} >
                <View
                    style={[styles.otpField, {
                       borderColor:  !value[t] ?  colors.borderInactive : colors.primary,
                    }]}>
                    <Text style={[styles.otpText, fieldStyle]}>{value[t]}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <>
            <View style={[styles.otpWraper, style]} >
                {otpFields}

            </View>
            <TextInput ref={refFocus}
                keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
                value={value}
                selectionColor={'transparent'}
                style={{ color: 'transparent', fontSize: 0, height: 0, width: 0 }}
                onChangeText={text => {
                    console.log(text);
                    onChangeText(text.length <= nuberOfFields ? text.replace(/[^0-9]/g, "") : value);
                }} />
        </>

    );
}


const styles = StyleSheet.create({
    otpWraper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"
    },
    otpField: {
        width: 50,
        height: 48,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor:'rgba(42, 83, 76, 0.1)',
        marginTop:30
    },
    otpText: {
        color: 'rgba(42, 83, 76, 0.7)',
        fontSize: 24,
        fontFamily: 'Outfit-Regular',
       
    },
})