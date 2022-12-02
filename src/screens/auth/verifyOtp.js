import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import colors from '../../../assets/colors/colors';
import authRouts from '../../navigation/route/authRoute';
import {AuthContext} from '../../../context/AuthContext';
import endpoints from '../../../assets/EndPoint/Endpoint';
import Toast from 'react-native-toast-message';
import Button from '../../Component/Button';
export default VerifyOtp = ({navigation}) => {

  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const canProceed =
    email.length > 0 && password.length > 0 && emailReg.test(email);


//     setLoading(true);
//     const response = await fetch(endpoints.baseUrl + endpoints.signin, {
//       method: 'POST',
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     response
//       .json()
//       .then(data => {
//         setLoading(false);
//         console.log(data);
//         if (response.ok) {
//           Toast.show({
//             type: 'success',
//             text1: 'Sign In Successful',
//             text2: 'You have sign in ',
//           });
//           login(data.access_token, data.user);
//         } else {
//           Toast.show({
//             type: 'error',
//             text1: 'Sign Up Failed',
//             text2: '',
//           });
//         }
//         // navigation.navigate(authRouts.otp, data)
//       })
//       .catch(err => {
//         setLoading(false);
//         Toast.show({
//           type: 'error',
//           text1: 'Sign Up Failed',
//           text2: err.message,
//         });
//         console.log(err.message);
//       });
//   };
  return (
    <>

      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          width: '100%',
        }}>
        <View style={styles.container}>
      <View>
        <Image source={require('../../../assets/images/emails2.png')}/>
      </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inputWrapper}>
          

          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerWrapper: {
    marginStart: 24,
    marginTop: 60,
  },
  subtext: {
    color: 'rgba(42, 83, 76, 0.7)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    marginTop: 5,
  },

  text: {
    color: 'rgba(42, 83, 77, 0.8)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  email: {
    paddingVertical: 14,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: 'rgba(42, 83, 76, 0.7)',
    fontFamily: 'Outfit-Regular',
  },
  text2: {
    marginTop: 24,
    color: 'rgba(42, 83, 77, 0.8)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  Password: {
    paddingVertical: 14,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: 'rgba(42, 83, 76, 0.7)',
    fontFamily: 'Outfit-Regular',
  },
  Wrapper: {marginStart: 24, marginEnd: 24, marginTop: 60},
  Button: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 63,
  },
  ButtonWrapper: {marginStart: 24, marginEnd: 24, marginTop: 90},
});
