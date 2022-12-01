import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import colors from '../../../assets/colors/colors';
import GradientText from '../../Component/GradientText';

import Button from '../../Component/Button';
import { color } from 'react-native-reanimated';
export default OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
      <Image source={require('../../../assets/images/rename.png')} />
        <Text style={styles.subtext} >Our mission is to provide help to{'\n'} endangered persons</Text>
      </View>
      <View style={styles.imageWrapper}>
<View style={styles.ImageView}>
<Image source={require('../../../assets/images/policeImage.png')} />
</View>
      </View>
      <View>
<Button 
title={"Set up your account"}
textColor={colors.white}

buttonStyle={styles.Button}

/>
<Button 
title={"Login"}
textColor={colors.textColor1}
buttonStyle={styles.Button2}
color={colors.gray2}
/>
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
  marginStart:24,
  marginTop:74
  },
headerText:{
  color: colors.deepGreen,
  fontSize: 32,
  fontFamily: 'Outfit-Medium',
},
subtext:{
  color: colors.lightGreen,
  fontSize: 18,
  fontFamily: 'Outfit-Regular',
  marginTop:5
},

imageWrapper:{
  width:312,
  height:277,
  backgroundColor:colors.gray,
alignSelf:'center',
marginTop:43,
borderRadius:5

},
ImageView:{
alignItems:'center',
justifyContent:'center',
marginVertical:26
},
Button:{
  width:312,
  height:50,
  alignSelf:'center',
  marginTop:77,
},
Button2:{
  width:312,
  height:50,
  alignSelf:'center',
  marginTop:20,

}
});
