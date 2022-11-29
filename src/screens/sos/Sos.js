import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';


import colors from '../../../assets/colors/colors';
import Menu from '../../../assets/icons/menu.svg';
import mainRoute from '../../navigation/route/mainRoute';
import {MotiView} from 'moti';
import {color, Easing} from 'react-native-reanimated';

export default Sos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/Map.png')}
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Lottie source={require('../../../assets/ripple.json')} autoPlay />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Menu />
        </TouchableOpacity>
        
        <View style={styles.textandImageWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.welcomeText}>
              Welcome <Text style={styles.userNmae}>Samuel</Text>
              {'\n  '}
              <Text style={styles.profileStatus}>Complete profile</Text>
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU',
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      
      <View style={styles.keepCalmWrapper}>
        <Text style={styles.keepCalmText}>KEEP CALM!</Text>
        <Text style={styles.SecondText}>
          Double Tap the button below to scan for{'\n'}
          the nearest Security
        </Text>
      </View>

      <TouchableOpacity 
      onPress={() => navigation.navigate(mainRoute.getHelp)}
      style={styles.circleWrapper}>

        <View style={[styles.SecondText,styles.center]}>

        <View
          style={{
            width: 208.66,
            height: 208.66,
            backgroundColor: colors.red,
            borderRadius: 100,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text style={styles.callhelpText}>Call{'\n'} Help</Text>
        </View>
        </View>
      
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginLeft: 16,
    marginRight: 19,
  },
  textandImageWrapper: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginEnd: 5,
  },

  welcomeText: {
    color: colors.brown,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  userNmae: {
    color: colors.brown,
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
  },
  profileStatus: {
    color: colors.red,
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
  },
  keepCalmWrapper: {
    alignItems: 'center',
    marginTop: 51,
  },

  keepCalmText: {
    color: colors.brown,
    fontSize: 24,
    fontFamily: 'Outfit-SemiBold',
  },
  SecondText: {
    color: colors.brown,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: 5,
  },
  callhelpText:{
    color: colors.white,
    fontSize: 32,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },

  circleWrapper:{
    alignSelf:'center',
    marginTop:35
  }
});
