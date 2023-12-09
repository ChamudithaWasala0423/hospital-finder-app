/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import ButtonComponent from '../Components/ButtonComponent';
import CardComponent from '../Components/CardComponent';
import {useNavigation} from '@react-navigation/native';
import {EyeIcon} from 'react-native-heroicons/outline'; // Corrected import
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [pass, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // New state

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginPress = async () => {
    try {
      // Sign in user with email and password
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        pass,
      );
      // Extract UID from the userCredential
      const userUid = userCredential.user.uid;

      // Save the UID to AsyncStorage
      await AsyncStorage.setItem('UID', userUid);
      const userUidread = await AsyncStorage.getItem('UID');
      console.log(userUidread);
      // If successful, show a success message or navigate to the next screen
      Alert.alert('Success', 'Login successful!');

      navigation.navigate('Home');
    } catch (error: any) {
      // If there's an error, show an error message
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainBox}>
        <Image source={require('../assets/send.png')} style={styles.image} />
        <Text style={styles.titleText}>Welcome Back</Text>
      </View>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
          value={pass}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity style={styles.mainButton} onPress={handleLoginPress}>
          <Text style={styles.signinButton}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  MainBox: {
    width: '100%',
    height: 250,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  titleText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subContainer: {
    width: '100%',
    height: 350,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  input: {
    height: '15%',
    width: '85%',
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  mainButton: {
    width: '85%',
    height: '15%',
    backgroundColor: '#0057e7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  signinButton: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Login;
