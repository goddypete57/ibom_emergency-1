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
import { AuthContext } from '../../../context/AuthContext';
import Button from '../../Component/Button';
import mainRoute from '../../navigation/route/mainRoute';


export default SetUpAccount2 = ({ route, navigation }) => {
  const { email, firstName, lastName, phoneNumber } = route.params;
  const { login } = useContext(AuthContext);
  const [NextofKin, setNextOfKin] = useState('');
  const [NextofKinPhone, setNextOfKinPhone] = useState('');
  const [NationalidentityNumber, setNationalId] = useState('');

  const canProceed =
    NextofKin.length > 0 && NextofKinPhone.length > 0
    && NationalidentityNumber.length == 11;
  //   let canLogin = email !== '' && password !== '';
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

        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputWrapper}>
          <View style={styles.Wrapper}>
            <Text style={styles.text}>Next of Kin</Text>
            <TextInput
              style={styles.NextofKin}
              value={NextofKin}
              onChangeText={text => setNextOfKin(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
            />

            <Text style={styles.text2}>Next of Kin phone No.</Text>
            <TextInput
              style={styles.NextofKinPhone}
              value={NextofKinPhone}
              onChangeText={text => setNextOfKinPhone(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
            />

            <Text style={styles.text2}>National  identity  Number</Text>
            <TextInput
              style={styles.NationalidentityNumber}
              value={NationalidentityNumber}
              onChangeText={text => setNationalId(text)}
              selectionColor={'rgba(42, 83, 76, 0.7)'}
              placeholderTextColor={colors.inactiveColor}
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
  NextofKinPhone: {
    paddingVertical: 14,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: 'rgba(42, 83, 76, 0.7)',
    fontFamily: 'Outfit-Regular',
  },
  NationalidentityNumber: {
    paddingVertical: 14,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: 'rgba(42, 83, 76, 0.7)',
    fontFamily: 'Outfit-Regular',
  },
  phoneNumber: {
    paddingVertical: 14,
    backgroundColor: 'rgba(42, 83, 76, 0.1)',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    fontSize: 18,
    color: 'rgba(42, 83, 76, 0.7)',
    fontFamily: 'Outfit-Regular',
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
