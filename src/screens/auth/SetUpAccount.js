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
import colors from '../../../assets/colors/colors';
import Button from '../../Component/Button';
import authRoute from '../../navigation/route/authRoute';
export default SetUpAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const canProceed =
    lastName.length > 0 && firstName.length > 0
    && emailReg.test(email) && phoneNumber.length > 0;
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

            <Text style={styles.text2}>Phone Number</Text>
            <TextInput
              style={styles.email}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={'rgba(42, 83, 76, 0.7)'}
            />
          </View>

        </KeyboardAvoidingView>
        <View style={styles.ButtonWrapper}>
          <Button
            title={'Go ahead...'}
            enabled={canProceed}
            onPress={() => { navigation.navigate(authRoute.setUpAccount2) }}
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
