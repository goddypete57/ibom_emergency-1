import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';



export default Police = ({navigation}) => {

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Loading...</Text> */}


            <SafeAreaView>
                <LinearGradient
                    colors={[colors.greenGradient1, colors.greenGradient2]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => {navigation.goBack() }}>
                        <Image
                            source={require('../../../assets/images/back_white.png')}
                            style={styles.headerLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Police</Text>
                </LinearGradient>
            </SafeAreaView>
            <Text style={styles.textName}>Hey Samuel!</Text>
            <Text style={styles.textDo}>What do you want to do?  (this copy can be
                {'\n'} changed)</Text>
            <View style={styles.crimeWrapper}>
                <TouchableOpacity onPress={() => { }}
                style={{
                    width: '30%'
                }}>
                        <LinearGradient
                            colors={[colors.linearGradientRed1, colors.linearGradientRed2]}
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            style={styles.crimeTab}>
                            <Image
                                source={require('../../../assets/images/crime_icon.png')}
                                style={styles.crimeImage}
                            />
                            <Text style={styles.crimeText}>Report a
                                {'\n'}crime</Text>
                        </LinearGradient>
                </TouchableOpacity>

                <View style={styles.policeCheckpointWrapper}>
                    <TouchableOpacity onPress={() => { }}
                    style={styles.checkpointTab}>
                            <Image
                                source={require('../../../assets/images/checkpoint_icon.png')}
                                style={styles.checkpointImage}
                            />
                            <Text style={styles.checkpointText}>Nearest Checkpoint</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}
                    style={styles.policeTab}>
                            <Image
                                source={require('../../../assets/images/police_icon.png')}
                                style={styles.policeImage}
                            />
                            <Text style={styles.policeText}>Nearest Police Station</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => { }}
            style={styles.officerTab}>
                    <Image
                        source={require('../../../assets/images/officer_icon.png')}
                        style={styles.officerImage}
                    />
                    <Text style={styles.officerText}>Report a Police Officer</Text>
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
        paddingBottom: 20,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    headerLeft: {
        width: 24,
        height: 21,
    },
    headerText: {
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        marginStart: 33,
        color: colors.white,
    },
    textName: {
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        marginStart: 17,
        marginTop: 20,
        color: colors.textColor1,
    },
    textDo: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 17,
        marginTop: 8,
        color: colors.textColor1,
    },
    crimeWrapper: {
        marginTop: 45,
        marginStart: 16,
        marginEnd: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    crimeTab: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: 216,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    crimeImage: {
        marginTop: 8,
        marginStart: 8,
        width: 30,
        height: 30,
    },
    crimeText: {
        ontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginStart: 9,
        color: colors.white,
        marginBottom: 9,
    },
    policeCheckpointWrapper: {
        marginStart: 10,
        flexDirection: 'column',
        width: '67%'
    },
    checkpointTab: {
        flexDirection: 'column',
        width: '100%',
        height: 80,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    checkpointImage: {
        marginTop: 8,
        marginStart: 8,
        width: 30,
        height: 30,
    },
    checkpointText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginTop: 14,
        color: colors.textColor1,
        marginBottom: 8,
        marginEnd: 15,
        textAlign: 'right',
    },
    policeTab: {
        flexDirection: 'column',
        width: '100%',
        height: 130,
        marginTop: 6,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    policeImage: {
        marginTop: 8,
        marginStart: 8,
        width: 30,
        height: 30,
    },
    policeText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginTop: 58,
        color: colors.textColor1,
        marginBottom: 13,
        marginEnd: 15,
        textAlign: 'right',
    },
    officerTab: {
        marginTop: 10,
        marginStart: 16,
        marginEnd: 16,
        borderRadius: 10,
        backgroundColor: colors.white,
        height: 94,
        justifyContent: 'space-between',
        flexDirection: 'column',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    officerImage: {
        marginTop: 13,
        marginStart: 16,
        width: 30,
        height: 30,
    },
    officerText: {
        fontFamily: 'Outfit-Regular',
        fontSize: 16,
        marginTop: 19,
        color: colors.textColor1,
        marginBottom: 13,
        marginEnd: 15,
        textAlign: 'right',
    },
     mapView: {
     width: Dimensions.get("window").width,
     height: Dimensions.get("window").height

    },
});
