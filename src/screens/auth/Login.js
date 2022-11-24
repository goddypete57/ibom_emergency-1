import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight } from "react-native";

import colors from "../../../assets/colors/colors";
import authRouts from "../../navigation/route/authRoute";
import { AuthContext } from "../../../context/AuthContext";


export default Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setChecked] = useState(false);
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const canProceed = email.length > 0
        && password.length > 0 && emailReg.test(email);

    return (
        <>
            {/* <View style={styles.topWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <NavIcon />
                </TouchableOpacity>
            </View> */}
            <ScrollView
                vertical
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    width: '100%',
                }}>
                <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
    },
    logo: {
        width: 82,
        height: 60,
        alignSelf: 'center',
        marginBottom: 36,
        resizeMode: 'contain',
    },
    greetings: {
        fontSize: 24,
        fontFamily: "NunitoSans-Bold",
        color: colors.activeText,
    },
    instructions: {
        fontSize: 14,
        fontFamily: "NunitoSans-Regular",
        color: colors.activeText,
    },
    inputWrapper: {
        marginTop: 16,
    },
    emailInput: {
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        fontSize: 14,
        color: colors.activeText,
        fontFamily: "NunitoSans-Regular",
        borderColor: colors.inactive,
        height: 44,
    },
    label: {
        fontSize: 16,
        fontFamily: 'NunitoSans-Bold',
        color: colors.activeText,
        marginBottom: 8,
    },
    passwordInput: {
        borderRadius: 8,
        borderWidth: 1,
        color: colors.activeText,
        borderColor: colors.inactive,
    },
    forgotPassword: {
        flexDirection: "row",
        marginTop: 4,
        width: "100%",
        justifyContent: "flex-end",
    },

    forgotPasswordText: {
        fontFamily: 'NuinitoSans-SemiBold',
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
        color: colors.activeText,
        textDecorationLine: 'underline',
    },
    createAccountButton: {
        borderRadius: 8,
        height: 44,
        marginTop: 34,
    },
    orWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: colors.inactive,
        position: 'absolute',
    },
    orText: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Bold',
        color: colors.activeText,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
    },
    googleButton: {
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "NunitoSans-ExtraBoldd",
        color: colors.primary,
        marginEnd: 8,
    },
    footerText: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
        color: colors.activeText,
        textAlign: 'center',
        marginTop: 16,
    },
    footerLink: {
        fontFamily: 'NunitoSans-SemiBold',
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    topWrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
});