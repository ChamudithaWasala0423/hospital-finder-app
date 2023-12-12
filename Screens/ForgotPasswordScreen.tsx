/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Password Reset Email Sent',
        'Check your email to reset your password.',
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your email to reset your password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {/* <Button title="Reset Password" onPress={handleResetPassword} /> */}
      <View style={styles.subBack}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={handleResetPassword}>
          <Text style={styles.subLabel}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={navigation.goBack}>
          <Text style={styles.subLabel}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    color: 'black',
    borderRadius: 10,
  },
  subBack: {
    width: '100%',
    height: 100,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomButton: {
    height: 40,
    backgroundColor: '#0057e7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  subLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
