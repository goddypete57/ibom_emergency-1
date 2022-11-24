import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../../../assets/colors/colors';
import BackArrow from '../../../assets/icons/BackArrow.svg';


export default Sos = () => {
    return (
        <View style={styles.container}>
            
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <BackArrow style={styles.backIcon}/>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </SafeAreaView>
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
        alignItems: 'center',
        paddingHorizontal: '16',
        paddingTop: '20',
    },
    backIcon: {
        width: 24,
        height: 21,
    },
    headerText: {},
    
});
