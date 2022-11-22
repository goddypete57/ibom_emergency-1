import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight } from "react-native";


export default Message = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Message</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})