/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneAuth: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirm, setConfirm] = useState<any>(null);

  const handleSendCode = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      Alert.alert('Code Sent!');
    } catch (error: any) {
      console.log('Error handleSendCode', error.message);
      Alert.alert('Error handleSendCode', error.message);
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirm.confirm(verificationCode);
      Alert.alert('Phone Number Verified!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Enter your phone number:</Text>
      <TextInput
        placeholder="Phone number"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Send Code" onPress={handleSendCode} />

      <Text>Enter verification code:</Text>
      <TextInput
        placeholder="Verification code"
        onChangeText={text => setVerificationCode(text)}
        value={verificationCode}
        keyboardType="numeric"
      />
      <Button title="Verify Code" onPress={handleVerifyCode} />
    </View>
  );
};

export default PhoneAuth;
