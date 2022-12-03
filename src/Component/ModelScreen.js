import colors from '../../assets/colors/colors';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default ModelScreen = () => {
  return (
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
        source={require('../../assets/images/checked.png')}
        style={{alignSelf: 'center',marginTop:36}}
      />
      <Image
        source={require('../../assets/images/Verified.png')}
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
          onPress={() => {}}
          buttonStyle={styles.Button2}
          textColor={colors.white}
        />
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
