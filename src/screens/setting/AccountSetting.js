import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';

export default AccountSetting = ({ navigation }) => {
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

            <Text style={styles.accountText}>Account Settings</Text>

            <TouchableOpacity style={styles.editWrapper}>
                <Text style={styles.editText}>Edit Profile</Text>

                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.editArrowWrapper}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.passwordWrapper}>

                <Text style={styles.passwordText}>Change Password</Text>

                <Image
                    source={require('../../../assets/images/foward.png')}
                    style={styles.passwordArrowWrapper}
                />
            </TouchableOpacity>



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
        color: colors.inactiveColor,
        marginTop: 20,
        marginStart: 15,
    },
    editWrapper: {
        flexDirection: 'row',
        marginStart: 15,
        marginEnd: 37,
        marginTop: 37,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    editText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        color: colors.textColor1,
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
        marginTop: 37,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    passwordText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        color: colors.textColor1,
    },
    passwordArrowWrapper: {
        alignItems: 'flex-end',
        width: 24,
        height: 24,
    },
});