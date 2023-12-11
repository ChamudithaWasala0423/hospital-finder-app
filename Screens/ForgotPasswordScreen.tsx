// ForgotPasswordScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset Email Sent', 'Check your email to reset your password.');
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
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
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
    color: 'black', // Set text color to black
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black', // Set input border color to black
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    color: 'black', // Set input text color to black
  },
});

export default ForgotPasswordScreen;
