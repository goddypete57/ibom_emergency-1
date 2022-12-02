import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions, Animated, Easing } from 'react-native';

import colors from '../../../assets/colors/colors';
import Menu from '../../../assets/icons/menu.svg';


export default GetHelp = () => {
  const width = useWindowDimensions().width;
  const [fadeAnim] = useState(new Animated.Value(0));
  spinValue = new Animated.Value(0);
  const [x1, setX1] = useState(-50);
  const [y1, setY1] = useState(-50);

  // First set up animation 
  Animated.loop(
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }
    )
  ).start()

  useEffect(() => {
    let visible = false;
    let x = 0;
    let y = 0;
    setInterval(() => {
      visible = !visible;
      // setTimeout(() => {
      if (visible) {
       x= Math.floor(Math.random() * (-100 - 100 + 1)) + 100;
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true // <-- Add this
        }).start();
      } else {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true // <-- Add this
        }).start();
      }
      setX1(x);
      // }, 800)
    }, 3000);

  });

  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

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
      <View style={styles.header}>
        <TouchableOpacity>
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
        <Text style={styles.keepCalmText}>Do not panic</Text>
        <Text style={styles.SecondText}>
          Help is on the way
        </Text>
      </View>

      <View style={{
        alignSelf: 'center',
        marginTop: 35,
        width: 250 / 360 * width,
        height: 250 / 360 * width,
      }}>
        <Image
          source={require('../../../assets/images/radar-bg.png')}
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            position: 'absolute',
            transform: [{ translateX: 3 }, { translateY: -1 }],
          }}
        />
        <Animated.Image
          source={require('../../../assets/images/radar-scan.png')}
          style={{
            resizeMode: 'contain',
            width: '99%',
            height: '99%',
            alignSelf: 'center',
            transform: [{ rotate: spin }],
          }}
        />
        <Animated.View style={{
          position: 'absolute',
          backgroundColor: colors.lightGreen,
          width: 14 / 360 * width,
          height: 14 / 360 * width,
          borderRadius: 10 / 360 * width,
          alignSelf: 'center',
          opacity: fadeAnim,
          transform: [{ translateX: x1 }, { translateY: y1 }],
        }} />
      </View>
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
  callhelpText: {
    color: colors.white,
    fontSize: 32,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },

});
