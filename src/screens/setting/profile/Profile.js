import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, Modal } from 'react-native';
import colors from '../../../assets/colors/colors';


export default Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [showModal, setShowModal] = useState(false)

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Modal
                    transparent
                    visible={showModal}
                    animationType={'fade'}
                    onRequestClose={() => setShowModal(false)}
                >
                    <TouchableOpacity
                        onPress={() => setShowModal(false)}
                        style={{
                            flex: 1
                        }}>
                        <View style={{
                            width: 118,
                            height: 35,
                            elevation: 5,
                            borderRadius: 5,
                            backgroundColor: colors.textColor1
                        }}>
                            <Text>Edit profile</Text>
                        </View>

                    </TouchableOpacity>

                </Modal>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={require('../../../assets/images/back.png')}
                            style={styles.headerLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Profile</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={require('../../../assets/images/moreVert.png')}
                            style={styles.headerRight}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <Image
                source={require('../../../assets/images/profile-image.png')}
                style={styles.profileImage}
            />

            <View style={styles.first}>
                <Text style={styles.nameText}>Full Name</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <TextInput
                        style={styles.nameInput}
                        placeholder={'Okon Udoh'}
                        value={name} onChangeText={text => setName(text)}
                        selectionColor={colors.inactive2}
                        placeholderTextColor={colors.inactiveColor} />
                </KeyboardAvoidingView>
            </View>

            <View style={styles.second}>
                <Text style={styles.emailText}>Email</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <TextInput
                        style={styles.emailInput}
                        placeholder={'name@email.com'}
                        value={email} onChangeText={text => setEmail(text)}
                        selectionColor={colors.inactive2}
                        placeholderTextColor={colors.inactiveColor} />
                </KeyboardAvoidingView>
            </View>

            <View style={styles.third}>
                <Text style={styles.numberText}>Phone Number</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <TextInput
                        style={styles.numberInput}
                        placeholder={'07012345671'}
                        value={number} onChangeText={text => setNumber(text)}
                        selectionColor={colors.inactive2}
                        placeholderTextColor={colors.inactiveColor} />
                </KeyboardAvoidingView>
            </View>

            <View style={styles.fourth}>
                <Text style={styles.dobText}>Date Of Birth</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputWrapper} >
                    <TextInput
                        style={styles.dobInput}
                        placeholder={'19-12-1999'}
                        value={dob} onChangeText={text => setDob(text)}
                        selectionColor={colors.inactive2}
                        placeholderTextColor={colors.inactiveColor} />
                </KeyboardAvoidingView>
            </View>
            <View style={styles.kycWrapper}>
                <Text style={styles.kycText}>KYC</Text>
                <Image
                    source={require('../../../assets/images/tick.png')}
                    style={styles.kycTick}
                />
            </View>
        </View>
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
        backgroundColor: '#FFECDF',
        alignItems: 'center',
        paddingTop: 10,
    },
    headerLeft: {
        marginStart: 16,
        marginBottom: 22,
        width: 24,
        height: 21,
        marginTop: 15,
    },
    headerText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        marginStart: 33,
        colors: colors.textColor1,
    },
    headerRight: {
        width: 32,
        height: 32,
        marginStart: 202,
        marginTop: 15,
        alignContent: 'flex-end',
        marginBottom: 16,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#D9D9D9',
        marginTop: 26,
        marginStart: 135,
        marginEnd: 135,
    },
    first: {
        marginStart: 16,
        marginEnd: 19,
        marginTop: 45,
    },
    nameText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        colors: colors.inactiveColor,
    },
    nameInput: {
        marginTop: 5,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#D1D1D6',
        borderWidth: 0.5,
        width: '100%',
        fontSize: 16,
        colors: colors.inactiveColor,
        fontFamily: "Outfit-Regular",
    },
    second: {
        marginStart: 16,
        marginEnd: 19,
        marginTop: 20,
    },
    emailText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        colors: colors.inactiveColor,
    },
    emailInput: {
        marginTop: 5,
        paddingHorizontal: 12,
        backgroundColor: rgba(42, 83, 76, 0.1),
        borderRadius: 10,
        borderColor: '#D1D1D6',
        borderWidth: 0.5,
        width: '100%',
        fontSize: 16,
        colors: colors.inactiveColor,
        fontFamily: "Outfit-Regular",
    },
    third: {
        marginStart: 16,
        marginEnd: 19,
        marginTop: 20,
    },
    numberText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        colors: colors.inactiveColor,
    },
    numberInput: {
        marginTop: 5,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#D1D1D6',
        borderWidth: 0.5,
        width: '100%',
        fontSize: 16,
        colors: colors.inactiveColor,
        fontFamily: "Outfit-Regular",
    },
    fourth: {
        marginStart: 16,
        marginEnd: 19,
        marginTop: 20,
    },
    dobText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        colors: colors.inactiveColor,
    },
    dobInput: {
        marginTop: 5,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#D1D1D6',
        borderWidth: 0.5,
        width: '100%',
        fontSize: 16,
        colors: colors.inactiveColor,
        fontFamily: "Outfit-Regular",
    },
    kycWrapper: {
        marginTop: 20,
        marginStart: 16,
        marginEnd: 19,
        borderRadius: 10,
        borderColor: colors.inactive2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    kycText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        colors: colors.inactiveColor,
    },
    kycTick: {
        width: 18,
        height: 18,
    },

});