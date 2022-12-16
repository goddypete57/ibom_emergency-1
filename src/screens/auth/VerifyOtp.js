import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';

import colors from '../../../assets/colors/colors';
import {AuthContext} from '../../../context/AuthContext';
import Button from '../../Component/Button';
import mainRoute from '../../navigation/route/mainRoute';
import endpoints from '../../../assets/EndPoint/Endpoint';
import OtpFields from '../../Component/OtpFields';
import authRoute from '../../navigation/route/authRoute';

export default VerifyOtp = ({route, navigation}) => {
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  const [otp, setOtp] = useState('');

  const [showModal, setShowModal] = useState(false);
  const canProceed = otp.length == 4;
  const resendOtp = async () => {
    setLoading(true);
    const response = await fetch(endpoints.baseUrl + endpoints.resendOtp, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
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
            text1: 'Resend Successful',
            text2: data.message,
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Resend Failed',
            text2: data.message,
          });
        }
        // navigation.navigate(authRouts.otp, data)
      })
      .catch(err => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Resend Failed',
          text2: err.message,
        });
        console.log(err.message);
      });
  };

  const verify = async () => {
    setLoading(true);
    const response = await fetch(endpoints.baseUrl + endpoints.verifyOtp, {
      method: 'POST',
      body: JSON.stringify({
        otp: otp,
        email: user.email,
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
            text1: 'Verification Successful',
            text2: data.message,
          });
          setData(data);
          setShowModal(true);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Verification Failed',
            text2: data.message,
          });
        }
        // navigation.navigate(authRouts.otp, data)
      })
      .catch(err => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Verification Failed',
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
      <Modal
        transparent
        visible={showModal}
        animationType={'fade'}
        onDismiss={() => {
          setShowModal(false);
        }}
        onRequestClose={() => setShowModal(false)}>
       <View
        style={{
          justifyContent: 'center',
     
          flex:1
        }}
       >
       <View
            style={{
              width: 292,
              height:344,
              elevation: 5,
              borderRadius: 8,
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignSelf:'center',
             
            }}>
            <Image
              source={require('../../../assets/images/checked.png')}
              style={{alignSelf: 'center', marginTop: 36}}
            />
          <Text style={styles.header}>
          Verified!
          </Text>
            <Text
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                color: 'rgba(42, 83, 76, 0.7)',
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginTop: 5,
              }}>
              You have succesfully Verified {'\n'}
              Your account.
            </Text>

            <View style={styles.ButtonWrapper2}>
              <Button
                enabled={true}
                title={'Proceed'}
                onPress={() =>
                  // navigation.navigate(authRoute.setUpAccount2, { token: token })
                  login(data.token, data.user)
                }
                buttonStyle={styles.Button2}
                textColor={colors.white}
              />
            </View>
          </View>
       </View>
        
      </Modal>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image source={require('../../../assets/images/emails2.png')} />
     <Text style={styles.verifyemailtext}>
     Verify your email
     </Text>
          <Text style={styles.subtext}>
            Please enter the 4 digit code sent to{'\n'}
            yourmail@example.com
          </Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputWrapper}>
          <OtpFields
            style={styles.otp}
            nuberOfFields={4}
            value={otp}
            onChangeText={text => {
              setOtp(text);
            }}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={() => resendOtp()}>
         <Text style={styles.resendCode}>
         Resend code 
         </Text>
        </TouchableOpacity>

        <View style={styles.ButtonWrapper}>
          <Button
            enabled={canProceed && !loading}
            title={'Confirm'}
            onPress={() => {
              verify();
            }}
            buttonStyle={styles.Button}
            textColor={colors.white}
            processing={loading}
          />
          {/* <TouchableOpacity>
            <Image
              source={require('../../../assets/images/changeemail.png')}
              style={styles.changeemail}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  header:{
    color: colors.green3,
    fontSize: 24,
    fontFamily: 'Outfit-Medium',
    textAlign:'center'
  },
  headerWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  subtext: {
    color: 'rgba(42, 83, 76, 0.7)',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    marginTop: 5,
  },
  verifyimg: {
    marginTop: 32,
  },

  resendimage: {
    alignSelf: 'center',
  },
  changeemail: {
    alignSelf: 'center',
    marginTop: 5,
  },
  Button: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 96,
  },
  ButtonWrapper: {
    marginHorizontal: 24,
    marginVertical: 24,
  },

  Button2: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
  },
  ButtonWrapper2: {
    marginHorizontal: 38,
    marginVertical: 44,
  },
  verifyemailtext:{
    color: colors.green3,
    fontSize: 20,
    fontFamily: 'Outfit-Medium',
  },
resendCode:{
  color: colors.green3,
  fontSize: 20,
  fontFamily: 'Outfit-Medium',
  alignSelf:'center'
},
});
