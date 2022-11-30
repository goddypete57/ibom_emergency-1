import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../../assets/colors/colors';

export default Setting = () => {
    return (
        <View style={styles.container}>

            <View style={{
                height: 70,
                backgroundColor: colors.appTopBar,
                flexDirection: 'row',
            }}>

            </View>

            <View style={styles.profileWrapper}>
                <Image
                    source={require('../../../assets/images/profile-image.png')}
                    style={styles.profileImage}
                />
                <View style={styles.profileTextWrapper}>
                    <Text style={styles.profileName}>Samuel Okon Udoh</Text>
                    <Text style={styles.profileText}>Profile</Text>
                </View>
                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.arrowWrapper}
                />
            </View>

            <View style={styles.curveWrapper}>
                <View style={styles.accountWrapper}>
                    <Image
                        source={require('../../../assets/images/account.png')}
                        style={styles.accountImage}
                    />
                    <Text style={styles.accountName}>Account Settings</Text>

                    <Image
                        source={require('../../../assets/images/foward.png')}
                        style={styles.accountArrowWrapper}
                    />
                </View>
                <View style={styles.privacyWrapper}>
                <Image
                        source={require('../../../assets/images/privacy.png')}
                        style={styles.privacyImage}
                    />
                    <Text style={styles.privacyName}>Privacy Policy</Text>

                    <Image
                        source={require('../../../assets/images/foward.png')}
                        style={styles.privacyArrowWrapper}
                    />
                </View>
                <View style={styles.logoutWrapper}>
                <Image
                        source={require('../../../assets/images/logout.png')}
                        style={styles.logoutImage}
                    />
                    <Text style={styles.logoutName}>Logout</Text>
                </View>
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
    backIcon: {
        width: 24,
        height: 21,
        marginBottom: 20,
    },
    headerText: {
        fontFamily: 'Outfit-Medium',
        fontStyle: 24,
        color: colors.textColor1,
        marginStart: 33,
    },
    profileWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        paddingTop: 24,
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
        marginStart: 6,
        marginEnd: 6,
        height: 555,
        backgroundColor: colors.white,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        shadowColor: colors.linearGradientOrange1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 5,
    },
    accountWrapper: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 41,
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