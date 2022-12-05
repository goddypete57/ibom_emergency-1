import React, { useState, useEffect, useContext } from 'react';
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
import { AuthContext } from '../../../context/AuthContext';
import endpoints from '../../../assets/EndPoint/Endpoint';
import Toast from 'react-native-toast-message';
import Button from '../../Component/Button';
import InputField from '../../Component/InputField';
import EyeClosed from '../../../assets/icons/EyeClosed.svg';
import EyeOpened from '../../../assets/icons/EyeOpened.svg';



export default Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const canProceed =
    email.length > 0 && password.length > 0 && emailReg.test(email);

  const signIn = async () => {
    setLoading(true);
    const response = await fetch(endpoints.baseUrl + endpoints.signin, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
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
            text1: 'Sign In Successful',
            text2: 'You have sign in successfully',
          });
          login(data.access_token, data.user);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Sign Up Failed',
            text2: 'Oops! Something isn\'t right',
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
    <>
      {/* <View style={styles.topWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <NavIcon />
                </TouchableOpacity>
            </View> */}
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
          <Text style={styles.header}>
          Login to Your Account
          </Text>
            <Text style={styles.subtext}>Enter a valid email and password</Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inputWrapper}>
            <View style={styles.Wrapper}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.email}
                value={email}
                onChangeText={text => setEmail(text)}
                selectionColor={'rgba(42, 83, 76, 0.7)'}
                placeholderTextColor={colors.inactiveColor}
              />

              <Text style={styles.text2}>Password</Text>
              {/* <TextInput
                style={styles.Password}
                value={password}
                onChangeText={text => setPassword(text)}
                selectionColor={'rgba(42, 83, 76, 0.7)'}
                placeholderTextColor={colors.inactiveColor}
                secureTextEntry={true}
              /> */}
              <InputField
                containerStyle={styles.Password}
                style={{
                  flexGrow: 1,
                }}
                value={password}
                secureTextEntry={hidePassword}
                onChangeText={text => setPassword(text)}
                placeholder={"password"}
                leftComponet={
                  <TouchableOpacity
                    onPress={() => { setHidePassword(!hidePassword) }}>
                    {
                      hidePassword ?
                        <EyeClosed /> :
                        <EyeOpened />
                    }
                  </TouchableOpacity>}
                selectionColor={'rgba(42, 83, 76, 0.7)'}
                placeholderTextColor={colors.inactiveColor}
                 />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.ButtonWrapper}>
            <Button
              enabled={canProceed}
              title={'Login'}
              onPress={() => {
                signIn();
              }}
              processing={loading}
              buttonStyle={styles.Button}
              textColor={colors.white}
            />
          </View>

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
  header:{
    color: colors.green3,
    fontSize: 24,
    fontFamily: 'Outfit-Medium',
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
  text2: {
    marginTop: 24,
    color: 'rgba(42, 83, 77, 0.8)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  Password: {
    // paddingVertical: 12,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: colors.textGreen,
    fontFamily: 'Outfit-Regular',
    paddingHorizontal: 12,
  },
  Wrapper: { marginStart: 24, marginEnd: 24, marginTop: 60 },
  Button: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 63,
  },
  ButtonWrapper: { marginStart: 24, marginEnd: 24, marginTop: 90 },
});
