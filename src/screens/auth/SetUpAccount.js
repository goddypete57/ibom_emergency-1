import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  ScrollView
} from 'react-native';
import Toast from 'react-native-toast-message';

import colors from '../../../assets/colors/colors';
import Button from '../../Component/Button';
import authRoute from '../../navigation/route/authRoute';
import endpoints from '../../../assets/EndPoint/Endpoint';
import { AuthContext } from '../../../context/AuthContext';



export default SetUpAccount = ({ navigation }) => {
  const { saveUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const canProceed =
    lastName.length > 0 && firstName.length > 0
    && emailReg.test(email) && password.length >= 4;
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    const response = await fetch(endpoints.baseUrl + endpoints.signUp, {
      method: 'POST',
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    response
      .json()
      .then(data => {
        setLoading(false);
        console.log(data);
        if (response.ok) {
          Toast.show({
            type: 'success',
            text1: 'Sign up Successful',
            text2: data.message,
          });
          saveUser(data.user);
          navigation.navigate(authRoute.verifyOtp);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Sign Up Failed',
            text2: data.message,
          });
        }
        // navigation.navigate(authRouts.otp, data)
      })
      .catch(err => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Sign Up Failed',
          text2: err.message,
        });
        console.log(err.message);
      });
  };
  return (
    <ScrollView
      vertical
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-start',
        width: '100%',
      }}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../../../assets/images/SetUpYourAccount.png')}
          />
          <Text style={styles.subtext}>Enter a valid email and password</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputWrapper}>
          <View style={styles.Wrapper}>
            <Text style={styles.text}>First Name</Text>
            <TextInput
              style={styles.email}
              value={firstName}
              onChangeText={text => setFirstName(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
            />

            <Text style={styles.text2}>Last Name</Text>
            <TextInput
              style={styles.email}
              value={lastName}
              onChangeText={text => setLastName(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
            />

            <Text style={styles.text2}>Email</Text>
            <TextInput
              style={styles.email}
              value={email}
              onChangeText={text => setEmail(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
            />

            <Text style={styles.text2}>Password</Text>
            <TextInput
              style={styles.email}
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={'rgba(42, 83, 76, 0.7)'}
            // keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            />
          </View>

        </KeyboardAvoidingView>
        <View style={styles.ButtonWrapper}>
          <Button
            title={'Go ahead...'}
            enabled={canProceed}
            onPress={() => { signUp() }}
            buttonStyle={styles.Button}
            textColor={colors.white}
            processing={loading}
          />
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  text2: {
    marginTop: 24,
    color: 'rgba(42, 83, 77, 0.8)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  email: {
    paddingVertical: 12,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: colors.textGreen,
    fontFamily: 'Outfit-Regular',
    paddingHorizontal: 12,
  },


  Wrapper: { marginStart: 24, marginEnd: 24, marginTop: 24 },

  Button: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 63,
  },
  ButtonWrapper: {
    marginHorizontal: 24,
    marginVertical: 24
  }
});
