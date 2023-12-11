/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/outline';

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = async () => {
    try {
      const user = auth().currentUser;

      if (user) {
        const email = user.email; // email can be string | null

        // Perform a null check before using email
        if (email) {
          const credential = auth.EmailAuthProvider.credential(
            email,
            currentPassword,
          );

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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Change Your Password</Text>

        <Text style={styles.label}>Current Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          placeholderTextColor="grey"
          secureTextEntry={!showPassword}
          onChangeText={text => setCurrentPassword(text)}
          value={currentPassword}
        />
        <TouchableOpacity onPress={handleTogglePassword} style={styles.eyeIcon}>
          {showPassword ? (
            <EyeIcon size={24} color="gray" />
          ) : (
            <EyeSlashIcon size={24} color="gray" />
          )}
        </TouchableOpacity>
        <Text style={styles.label}>New Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="grey"
          secureTextEntry={!showPassword}
          onChangeText={text => setNewPassword(text)}
          value={newPassword}
        />
        <TouchableOpacity
          onPress={handleTogglePassword}
          style={styles.eyeIconTwo}>
          {showPassword ? (
            <EyeIcon size={24} color="gray" />
          ) : (
            <EyeSlashIcon size={24} color="gray" />
          )}
        </TouchableOpacity>
        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={handleChangePassword}>
            <Text style={{color: '#fff'}}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={navigation.goBack}>
            <Text style={{color: '#fff'}}>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f4f5',
    marginHorizontal: 20,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
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
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
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
  bottomButtons: {
    flexDirection: 'row',
  },
  buttonBack: {
    backgroundColor: '#0057e7',
    borderRadius: 10,
    padding: 10,
    margin: 8,
    marginTop: 0,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '25%',
    marginRight: 40,
    marginTop: 53,
  },
  eyeIconTwo: {
    position: 'absolute',
    right: 10,
    top: '25%',
    marginRight: 40,
    marginTop: 155,
  },
});

export default ChangePassword;
