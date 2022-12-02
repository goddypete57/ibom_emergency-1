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
                    style={styles.headerLeft}
                />
                <Text>Upload evidence (Photo/Video)</Text>
            </View>

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
});