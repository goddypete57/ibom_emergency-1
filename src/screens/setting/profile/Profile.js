import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, Modal } from 'react-native';
import colors from '../../../../assets/colors/colors';
import endpoints from '../../../../assets/EndPoint/Endpoint';
import { AuthContext } from '../../../../context/AuthContext';


export default Profile = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [showModal, setShowModal] = useState(false)
    const { user, token, saveUser } = useContext(AuthContext);

    useEffect(() => {
        const response = fetch(endpoints.baseUrl + endpoints.user, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        response.then(res => res.json())
            .then((data) => {
                console.log(data);
                if (response._j.ok) {
                    // console.log(data);
                    saveUser(data);
                }
            })

    }, []);


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
                            backgroundColor: colors.popUp,
                            alignSelf: 'flex-end',
                            transform: [{ translateY: 60 }, { translateX: -20 }],
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: colors.textColor1,
                                fontSize: 16,
                                fontFamily: 'Outfit-Regular'
                            }}>Edit profile</Text>
                        </View>

                    </TouchableOpacity>

                </Modal>
                <View style={styles.headerWrapper}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Image
                                source={require('../../../../assets/images/back.png')}
                                style={styles.headerLeft}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Profile</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setShowModal(true) }}>
                        <Image
                            source={require('../../../../assets/images/moreVert.png')}
                            style={styles.headerRight}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <Image
                source={require('../../../../assets/images/profile-image.png')}
                style={styles.profileImage}
            />

            <View style={styles.first}>
                <Text style={styles.nameText}>Full Name</Text>
                <Text style={styles.fields}>{user ? user.firstName + ' ' + user.lastName : ''}</Text>
            </View>

            <View style={styles.second}>
                <Text style={styles.emailText}>Email</Text>
                <Text style={styles.fields}>{user ? user.email : ''}</Text>

            </View>

            <View style={styles.third}>
                <Text style={styles.numberText}>Phone Number</Text>
                <Text style={styles.fields}>{user ? user.phoneNumber : ''}</Text>

            </View>

            <View style={styles.fourth}>
                <Text style={styles.dobText}>Date Of Birth</Text>
                <Text style={styles.fields}>{user ? user.dateOfBirth : ''}</Text>

            </View>
            <View style={styles.kycWrapper}>
                <Text style={styles.kycText}>KYC</Text>
                <Image
                    source={require('../../../../assets/images/tick.png')}
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
        backgroundColor: colors.appTopBar,
        alignItems: 'center',
        paddingTop: 30,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    headerLeft: {
        width: 24,
        height: 21,
    },
    headerText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        marginStart: 20,
        color: colors.textColor1,
    },
    headerRight: {
        width: 32,
        height: 32,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#D9D9D9',
        marginTop: 26,
        alignSelf: 'center',
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
    fields: {
        marginTop: 5,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderColor: '#D1D1D6',
        borderWidth: 1,
        width: '100%',
        fontSize: 16,
        colors: colors.inactiveColor,
        fontFamily: "Outfit-Regular",
        paddingVertical: 16,
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

    kycWrapper: {
        marginTop: 20,
        marginStart: 16,
        marginEnd: 19,
        borderRadius: 10,
        borderColor: colors.inactive2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderRadius: 10,
        borderColor: '#D1D1D6',
        borderWidth: 1,
        paddingVertical: 16,
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