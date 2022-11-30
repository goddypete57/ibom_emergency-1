import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight } from "react-native";



import colors from "../../../assets/colors/colors";
import authRouts from "../../navigation/routs/authRouts";
import Button from "../../component/Button";
import PasswordInput from "../../component/PasswordInput";
import Google from '../../../assets/icons/Google.svg';


export default SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setChecked] = useState(false);
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const canProceed = email.length > 0 && name.length >= 3
        && password.length > 5 && isChecked && emailReg.test(email);

    return (
        <ScrollView
            vertical
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-start',
                width: '100%',
            }}>
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/images/Logo_text_icon.png")}
                    style={styles.logo} />
                <Text style={styles.greetings}>Hello there!</Text>
                <Text style={styles.instructions}>Kindly create an account to continue</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <Text style={styles.label}>Name</Text>

                    <TextInput
                        style={styles.emailInput}
                        placeholder={'Full Name'}
                        value={name} onChangeText={text => setName(text)}
                        selectionColor={colors.primary}
                        placeholderTextColor={colors.textLight} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <Text style={styles.label}>Email</Text>

                    <TextInput
                        style={styles.emailInput}
                        placeholder={'example@gmail.com'}
                        value={email} onChangeText={text => setEmail(text)}
                        selectionColor={colors.primary}
                        placeholderTextColor={colors.textLight} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <Text style={styles.label}>Password</Text>

                    <PasswordInput
                        value={password}
                        placeholder={'At least 6 characters'}
                        onChangeText={text => setPassword(text)}
                        style={styles.passwordInput}
                    />
                </KeyboardAvoidingView>
                <View style={styles.termsWrapper}>
                    <BouncyCheckbox
                        innerIconStyle={styles.checkbox}
                        fillColor={colors.primary}
                        iconStyle={styles.checkbox}
                        isChecked={isChecked}
                        text=""
                        disableBuiltInState
                        onPress={() => setChecked(!isChecked)}
                    />
                    <Text style={styles.termsText}>
                        I agree to the <Text style={styles.termsLink}>Terms of Service</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>
                    </Text>
                </View>

                <Button title={'Create Account'}
                    onPress={() => { }}
                    buttonStyle={styles.createAccountButton}
                    processing = {false}
                    enabled={canProceed} />
                <View style={styles.orWrapper}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>OR</Text>
                </View>
                <TouchableHighlight
                    style={styles.googleButton}
                    underlayColor={colors.inactiveButton}
                    onPress={() => { }}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Continue with Google</Text>
                        <Google />
                    </View>
                </TouchableHighlight>
                <Text style={styles.footerText}>Already have an account? <Text style={styles.footerLink}
                    onPress={() => { navigation.navigate(authRouts.login) }}>Login here</Text></Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 82,
        height: 60,
        alignSelf: 'center',
        marginBottom: 36,
        resizeMode: 'contain',
        marginTop: 32,
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
    termsWrapper: {
        flexDirection: "row",
        marginTop: 18,
        alignItems: 'flex-start',
        width: "100%",

    },
    checkbox: {
        borderRadius: 5,
        borderColor: colors.inactive,
        borderWidth: 1,
        width: 20,
        height: 20,
    },
    termsText: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
        color: colors.activeText,
    },
    termsLink: {
        fontFamily: 'NuinitoSans-SemiBold',
        color: colors.primary,
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
        fontFamily: "NunitoSans-ExtraBold",
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
});