import React from "react";
import { View, TextInput, Text } from "react-native";
import colors from "../../assets/colors/colors";


export default function InputField({ leftComponet, containerStyle, label, ...rest }) {
    return (
        <View style={[{
            borderColor: colors.black,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginEnd: 10,
            height: 50,
        }, containerStyle]}>
           
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TextInput
                    {...rest}
                />
                {leftComponet && leftComponet}
            </View>

        </View>

    );
}