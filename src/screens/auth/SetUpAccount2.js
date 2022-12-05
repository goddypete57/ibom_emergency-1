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
import { AuthContext } from '../../../context/AuthContext';
import Button from '../../Component/Button';
import mainRoute from '../../navigation/route/mainRoute';
import endpoints from '../../../assets/EndPoint/Endpoint';


export default SetUpAccount2 = ({ route, navigation }) => {
  const { email, firstName, lastName, phoneNumber } = route.params;
  const { login } = useContext(AuthContext);
  const [NextofKin, setNextOfKin] = useState('');
  const [NextofKinPhone, setNextOfKinPhone] = useState('');
  const [NationalidentityNumber, setNationalId] = useState('');

  const canProceed =
    NextofKin.length > 0 && NextofKinPhone.length >= 11
    && NationalidentityNumber.length == 11;
  //   let canLogin = email !== '' && password !== '';

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
         Set Up Your Account
         </Text>

        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputWrapper}>
          <View style={styles.Wrapper}>
            <Text style={styles.text}>Next of Kin name</Text>
            <TextInput
              style={styles.input}
              value={NextofKin}
              onChangeText={text => setNextOfKin(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
            />

            <Text style={styles.text2}>Next of Kin phone No.</Text>
            <TextInput
              style={styles.input}
              value={NextofKinPhone}
              onChangeText={text => setNextOfKinPhone(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
              keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            />

            <Text style={styles.text2}>National  identity  Number</Text>
            <TextInput
              style={styles.input}
              value={NationalidentityNumber}
              onChangeText={text => setNationalId(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
              keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            />

            <Text style={styles.text3}>Please input your NIN</Text>
          </View>

        </KeyboardAvoidingView>
        <View style={styles.ButtonWrapper}>
          <Button
            title={'Confirm'}
            enabled={canProceed}
            onPress={() => { }}
            buttonStyle={styles.Button}
            textColor={colors.white}
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
  header:{
    color: colors.green3,
    fontSize: 24,
    fontFamily: 'Outfit-Medium',
  },
  subtext: {
    color: 'rgba(42, 83, 76, 0.7)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    marginTop: 5,
  },
  NextofKin: {
    paddingVertical: 14,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: 'rgba(42, 83, 76, 0.7)',
    fontFamily: 'Outfit-Regular',
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
  text3: {
    color: 'rgba(42, 83, 77, 0.8)',
    fontSize: 10,
    fontFamily: 'Outfit-Regular',
  },
  input: {
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

  Wrapper: { marginStart: 24, marginEnd: 24, marginTop: 95 },

  Button: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 123,
  },
  ButtonWrapper: {
    marginHorizontal: 24,
    marginVertical: 24
  }
});
