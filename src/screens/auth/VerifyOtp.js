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
  TouchableOpacity
} from 'react-native';
import Toast from 'react-native-toast-message';

import colors from '../../../assets/colors/colors';
import {AuthContext} from '../../../context/AuthContext';
import Button from '../../Component/Button';
import mainRoute from '../../navigation/route/mainRoute';
import endpoints from '../../../assets/EndPoint/Endpoint';
import OtpFields from '../../Component/OtpFields';



export default VerifyOtp = ({route, navigation}) => {

  const [otp, setOtp] = useState('');

  const [showModal, setShowModal] = useState(false)
  const canProceed =
    otp.length ==4 
    


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
            onDismiss={()=>{setShowModal(false)}}
            onRequestClose={() => setShowModal(false)}
            >
    <View
      style={{
        width: 292,
        elevation: 5,
        borderRadius: 8,
        backgroundColor: colors.white,
        transform: [{translateY: 200}, {translateX: 50}],
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../../assets/images/checked.png')}
        style={{alignSelf: 'center',marginTop:36}}
      />
      <Image
        source={require('../../../assets/images/Verified.png')}
        style={{marginTop: 20, alignSelf: 'center'}}
      />
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
          title={'Back'}
          onPress={() => {setShowModal(false)}}
          buttonStyle={styles.Button2}
          textColor={colors.white}
        />
    
      </View>
    </View> 
    </Modal>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image source={require('../../../assets/images/emails2.png')} />
          <Image
            source={require('../../../assets/images/Verifyyouremail.png')}
            style={styles.verifyimg}
          />
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
        <TouchableOpacity>
             <Image
            source={require('../../../assets/images/Resendcode.png')}
            style={styles.resendimage}
          />
        </TouchableOpacity>
       
        <View style={styles.ButtonWrapper}>
          <Button
          enabled={canProceed}
            title={'Confirm'}
            onPress={() => {setShowModal(true)}}
            buttonStyle={styles.Button}
            textColor={colors.white}
          />
               <TouchableOpacity>
             <Image
            source={require('../../../assets/images/changeemail.png')}
            style={styles.changeemail}
          />
        </TouchableOpacity>
       
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
  verifyimg:{
    marginTop:32
  },

  resendimage:{
    alignSelf:'center'

  },
  changeemail:{
    alignSelf:'center',
    marginTop:5
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
});
