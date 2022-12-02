import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';

export default Sos = () => {
    return (
        <View style={styles.container}>

            <SafeAreaView>
                <LinearGradient
                    colors={[colors.greenGradient1, colors.greenGradient2]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={require('../../../assets/images/back_white.png')}
                            style={styles.headerLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Report Crime</Text>
                </LinearGradient>
            </SafeAreaView>
            <Text style={styles.titleText}>Including a brief description of event will help
                {'\n'} us respond to you aptly.</Text>

            <View style={styles.dashedWrapper}>
                <Image
                    source={require('../../../assets/images/back_white.png')}
                    style={styles.cameraImage}
                />
                <Text style={styles.evidenceText}>Upload evidence (Photo/Video)</Text>
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.uploadBtn}>
                        <Text style={styles.uploadText}>Upload</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.selectCrimeWrapper}>
                <Text style={styles.selectCrimeText}>Select Crime</Text>
                <Image
                    source={require('../../../assets/images/forward.png')}
                    style={styles.leftImage}
                />
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.descriptionText}>Add description(Optional) Crime</Text>
            </View>
            <View style={styles.locationWrapper}>
                <Text style={styles.locationText}>Add Location(Required)</Text>
                <Image
                    source={require('../../../assets/images/forward.png')}
                    style={styles.locationImage}
                />
            </View>
            <TouchableOpacity onPress={() => { }}>
                <View style={styles.submitBtn}>
                    <Text style={styles.submitText}>Submit</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
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
        color: colors.white,
    },
    titleText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 15,
        marginEnd: 15,
        marginTop: 26,
        color: colors.inactiveColor,
    },
    dashedWrapper: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.inactiveColor,
        marginTop: 41,
        marginStart: 17,
        marginEnd: 17,
        width: '100%',
        height: 194,
        justifyContent: 'center',
    },
    cameraImage: {
        width: 50,
        height: 50,
        marginTop: 34,
    },
    evidenceText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginTop: 20,
        color: colors.inactiveColor,
    },
    uploadBtn: {
        width: 110,
        height: 40,
        marginTop: 8,
        backgroundColor: colors.inactiveColor,
        borderRadius: 15,
    },
    uploadText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        color: colors.white,
    },
    selectCrimeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D1D1D6',
        width: '100%',
        height: 50,
        marginStart: 15,
        marginEnd: 15,
        marginTop: 49,
        backgroundColor: colors.white,
    },
    selectCrimeText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        color: colors.inactiveColor,
    },
    leftImage: {
        width: 24,
        height: 24,
    },
    descriptionWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D1D1D6',
        width: '100%',
        height: 50,
        marginStart: 15,
        marginEnd: 15,
        marginTop: 31,
        backgroundColor: colors.white,
    },
    descriptionText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        color: colors.inactiveColor,
    },
    locationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D1D1D6',
        width: '100%',
        height: 50,
        marginStart: 15,
        marginEnd: 15,
        marginTop: 31,
        backgroundColor: colors.white,
    },
    locationText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        color: colors.inactiveColor,
    },
    locationImage: {
        width: 24,
        height: 24,
    },
    submitBtn: {
        width: 171,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: colors.orange,
        alignSelf: 'flex-end',
        marginTop: 50,
        marginEnd: 17,
        marginBottom: 35,
    },
    submitText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        color: colors.white,
    },
});