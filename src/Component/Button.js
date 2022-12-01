import React, { useContext, useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";


export default Button = ({ title, onPress, buttonStyle, enabled, textColor, color }) => {
    return (
        <TouchableHighlight onPress={() => enabled ? onPress() : {}}
            underlayColor={colors.inactiveColor}
            style={[buttonStyle,
                StyleSheet.create({
                    borderRadius: 5,
                    backgroundColor: color ? color : colors.orange3 ,
                    alignItems: 'center',
                    justifyContent: 'center',
                })]}>

            <Text style={StyleSheet.create({
                fontSize: 18,
                textAlign: 'center',
                fontFamily: "Outfit-Regular",
                color: textColor ? textColor : colors.white,
            })}>{title}</Text>

        </TouchableHighlight>
    );
}
