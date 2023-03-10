import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';
import endpoints from '../../../assets/EndPoint/Endpoint';
import { AuthContext } from '../../../context/AuthContext';
import mainRoute from '../../navigation/route/mainRoute';

export default Setting = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image
                            source={require('../../../assets/images/back.png')}
                            style={styles.headerLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </SafeAreaView>

            <TouchableOpacity onPress={() => navigation.navigate(mainRoute.profile)}
                style={styles.profileWrapper}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image
                        source={require('../../../assets/images/profile-image.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileTextWrapper}>
                        <Text style={styles.profileName}>{user ? user.firstName + ' ' + user.lastName : ''}</Text>
                        <Text style={styles.profileText}>Profile</Text>
                    </View>
                </View>
                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.arrowWrapper}
                />
            </TouchableOpacity>

            <View style={styles.curveWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate(mainRoute.accountSetting)}
                    style={styles.accountWrapper}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={require('../../../assets/images/account.png')}
                            style={styles.accountImage}
                        />
                        <Text style={styles.accountName}>Account Settings</Text>
                    </View>

                    <Image
                        source={require('../../../assets/images/foward.png')}
                        style={styles.accountArrowWrapper}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}
                    style={styles.privacyWrapper}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={require('../../../assets/images/privacy.png')}
                            style={styles.privacyImage}
                        />
                        <Text style={styles.privacyName}>Privacy Policy</Text>
                    </View>
                    <Image
                        source={require('../../../assets/images/foward.png')}
                        style={styles.privacyArrowWrapper}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logout()}
                    style={styles.logoutWrapper}>
                    <Image
                        source={require('../../../assets/images/logout.png')}
                        style={styles.logoutImage}
                    />
                    <Text style={styles.logoutName}>Logout</Text>
                </TouchableOpacity>
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
        paddingBottom: 20,
    },
    headerLeft: {
        marginStart: 16,
        width: 24,
        height: 21,
    },
    headerText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        marginStart: 33,
        color: colors.textColor1,
    },
    profileWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        paddingTop: 24,
        justifyContent: 'space-between',
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 45,
    },
    profileTextWrapper: {
        flexDirection: 'column',
        paddingHorizontal: 12,
        marginTop: 5,
    },
    profileName: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        color: colors.textColor1,
    },
    profileText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 14,
        color: colors.inactiveColor,
    },
    arrowWrapper: {
        width: 24,
        height: 24,
        marginTop: 5,
        marginStart: 112,
    },
    curveWrapper: {
        marginTop: 25,
        flexDirection: 'column',
        backgroundColor: colors.white,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        flex: 1,
        elevation: 5,
    },
    accountWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 41,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    accountName: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 19,
        marginTop: 5,
        color: colors.textColor1,
    },
    accountArrowWrapper: {
        alignContent: 'flex-end',
        marginStart: 140,
        marginTop: 5,
        marginEnd: 32,
    },
    privacyWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    privacyName: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 19,
        marginTop: 5,
        color: colors.textColor1,
    },
    privacyArrowWrapper: {
        alignContent: 'flex-end',
        marginStart: 164,
        marginTop: 5,
        marginEnd: 32,
    },
    logoutWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 34,
    },
    logoutName: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginTop: 5,
        marginStart: 19,
        color: colors.textColor1,
    },
});