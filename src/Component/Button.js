import React, { useContext, useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../assets/colors/colors";


export default Button = ({ title, onPress, buttonStyle, enabled, textColor, color, processing = false }) => {
    return (
        <TouchableHighlight onPress={() => enabled ? onPress() : {}}
            underlayColor={colors.inactiveColor}
            style={[buttonStyle,
                StyleSheet.create({
                    borderRadius: 5,
                    backgroundColor: enabled ? color ? color : colors.orange3 : colors.inactiveColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                })]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={StyleSheet.create({
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: "Outfit-Regular",
                    color: textColor ? textColor : colors.white,
                })}>{title}</Text>


                {processing &&
                    <ActivityIndicator
                        animating={processing}
                        color={colors.white}
                        size="small"
                    />}
            </View>

        </TouchableHighlight>
    );
}
