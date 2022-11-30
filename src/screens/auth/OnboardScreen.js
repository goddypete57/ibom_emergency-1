import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Welcome to DSP!</Text>
        <Text>Our mission is to provide help to endangered persons</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerWrapper:{
  
  },
headerText:{
    fontFamily:"Oufit-Medium",
    fontSize:32,
},
});
