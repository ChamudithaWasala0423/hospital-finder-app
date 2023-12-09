import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

  const handleChangePassword = async () => {
    try {
      const user = auth().currentUser;

      if (user) {
        const email = user.email; // email can be string | null

        // Perform a null check before using email
        if (email) {
          const credential = auth.EmailAuthProvider.credential(email, currentPassword);

          // Reauthenticate the user before changing the password
          await user.reauthenticateWithCredential(credential);

          // Change the user's password
          await user.updatePassword(newPassword);

          Alert.alert('Success', 'Password changed successfully!');
        } else {
          Alert.alert('Error', 'User email is not available.');
        }
      } else {
        Alert.alert('Error', 'User not found. Please log in again.');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Change Your Password</Text>

        <Text style={styles.label}>Current Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          placeholderTextColor="grey"
          secureTextEntry
          onChangeText={(text) => setCurrentPassword(text)}
          value={currentPassword}
        />

        <Text style={styles.label}>New Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="grey"
          secureTextEntry
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />

        <Button title="Change Password" onPress={handleChangePassword} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: "5%",
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ChangePassword;
