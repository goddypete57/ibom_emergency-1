import React, {useState, useEffect}  from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image ,Dimensions} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';



export default Police = () => {

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Loading...</Text> */}


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
                    <Text style={styles.headerText}>Police</Text>
                </LinearGradient>
            </SafeAreaView>
            <Text style={styles.textName}>Hey Samuel!</Text>
            <Text style={styles.textDo}>What do you want to do?  (this copy can be
                {'\n'} changed)</Text>
            <View style={styles.crimeWrapper}>
                <TouchableOpacity onPress={() => { }}>
                    <View>
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
                    </View>
                </TouchableOpacity>

                <View style={styles.policeCheckpointWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.checkpointTab}>
                            <Image
                                source={require('../../../assets/images/checkpoint_icon.png')}
                                style={styles.checkpointImage}
                            />
                            <Text style={styles.checkpointText}>Nearest Checkpoint</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.policeTab}>
                            <Image
                                source={require('../../../assets/images/police_icon.png')}
                                style={styles.policeImage}
                            />
                            <Text style={styles.policeText}>Nearest Police Station</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => { }}>
                <View style={styles.officerTab}>
                    <Image
                        source={require('../../../assets/images/officer_icon.png')}
                        style={styles.officerImage}
                    />
                    <Text style={styles.officerText}>Report a Police Officer</Text>
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
        flexDirection: 'row'
    },
    crimeTab: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 106,
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
    },
    checkpointTab: {
        flexDirection: 'column',
        width: 220,
        height: 80,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginStart: 10,
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
        marginStart: 56,
        marginTop: 14,
        color: colors.textColor1,
        marginBottom: 8,
        marginEnd: 15,
    },
    policeTab: {
        flexDirection: 'column',
        width: 220,
        height: 130,
        marginTop: 6,
        marginStart: 10,
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
        marginStart: 43,
        marginTop: 58,
        color: colors.textColor1,
        marginBottom: 13,
        marginEnd: 15,
    },
    officerTab: {
        marginTop: 6,
        marginStart: 16,
        marginEnd: 16,
        borderRadius: 10,
        backgroundColor: colors.white,
        width: 347,
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
        marginStart: 156,
        marginTop: 19,
        color: colors.textColor1,
        marginBottom: 13,
        marginEnd: 15,
    },
     mapView: {
     width: Dimensions.get("window").width,
     height: Dimensions.get("window").height

    },
});
