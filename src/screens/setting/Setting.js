import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from '../../../assets/colors/colors';


export default Setting = () => {
    return (
        <View style={styles.container}>

            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../../../assets/images/Back.png')}
                        style={styles.backIcon}
                    />
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </SafeAreaView>

            <View style={styles.profileWrapper}>
                <Image
                    source={require('../../../assets/images/ProfileImage.png')}
                    style={styles.profileImage}
                />
                <View style={styles.profileTextWrapper}>
                    <Text style={styles.profileName}>Samuel Okon Udoh</Text>
                    <Text style={styles.profileText}>Profile</Text>
                </View>
                <Image
                    source={require('../../../assets/images/Forward.png')}
                    style={styles.arrowWrapper}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '16',
        paddingTop: '20',
        backgroundColor: colors.appTopBar,
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
        marginStart: 112,
    },
});