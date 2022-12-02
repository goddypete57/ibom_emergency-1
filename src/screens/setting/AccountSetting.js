import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';

export default AccountSetting = () => {
    return (
        <View style={styles.container}>

            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={require('../../../assets/images/back.png')}
                            style={styles.headerLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </SafeAreaView>

            <Text style={styles.accountText}>Account Settings</Text>

            <View style={styles.editWrapper}>
                <Text style={styles.editText}>Edit Profile</Text>

                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.editArrowWrapper}
                />
            </View>
            <View style={styles.passwordWrapper}>

                <Text style={styles.passwordText}>Change Password</Text>

                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.passwordArrowWrapper}
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
    accountText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 18,
        colors: colors.inactiveColor,
        marginTop: 20,
        marginStart: 15,
    },
    editWrapper: {
        flexDirection: 'row',
        marginStart: 15,
        marginEnd: 37,
    },
    editText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        colors: colors.textColor1,
        alignItems: 'flex-start',
    },
    editArrowWrapper: {
        alignItems: 'flex-end',
        width: 24,
        height: 24,
    },
    passwordWrapper: {
        flexDirection: 'row',
        marginStart: 15,
        marginEnd: 37,
        marginTop: 31,
    },
    passwordText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        colors: colors.textColor1,
        alignItems: 'flex-start',
    },
    passwordArrowWrapper: {
        alignItems: 'flex-end',
        width: 24,
        height: 24,
    },
});