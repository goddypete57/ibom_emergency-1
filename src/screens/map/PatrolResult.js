import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

import colors from '../../../assets/colors/colors';
import { AuthContext } from '../../../context/AuthContext';
import endpoints from '../../../assets/EndPoint/Endpoint';


export default PatrolResult = ({ navigation }) => {
    const { user, token } = useContext(AuthContext);
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
                    paddingHorizontal: 20,
                    height: 72,
                }}>

                </View>
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
});