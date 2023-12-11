/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {EyeIcon, EyeSlashIcon, PhoneIcon} from 'react-native-heroicons/solid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [pass, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp1 = async () => {
    try {
      // Create a new user with email and password
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        pass,
      );
      // Extract UID from the userCredential
      const userUid = userCredential.user.uid;

      // Save the UID to AsyncStorage
      await AsyncStorage.setItem('UID', userUid);
      const userUidread = await AsyncStorage.getItem('UID');
      console.log(userUidread);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('AddProfileData');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainBox}>
        <Image source={require('../assets/send.png')} style={styles.image} />
        <Text style={styles.titleText}>Create your Account</Text>
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
        <TouchableOpacity onPress={handleTogglePassword} style={styles.eyeIcon}>
          {showPassword ? (
            <EyeIcon size={24} color="gray" /> // Use your EyeOpenIcon component
          ) : (
            <EyeSlashIcon size={24} color="gray" /> // Use your EyeClosedIcon component
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButton} onPress={handleSignUp1}>
          <Text style={styles.signinButton}>Countinue</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>
          Already have an account?
          <Text
            style={styles.subTextup}
            onPress={() => navigation.navigate('Login')}>
            Sign in
          </Text>
        </Text>
        <View style={styles.lineback}>
          <View style={styles.line} />
          <Text style={{color: 'gray', margin: 10}}>or</Text>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.subButtonBack}>
        <TouchableOpacity
          style={styles.mainButtonTwo}
          onPress={() => navigation.navigate('PhoneVerification')}>
          <PhoneIcon size={20} color={'black'} />
          <Text style={styles.signinButtonTwo}>Continue with Phone</Text>
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
    height: 320,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'black'
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
  subText: {
    fontSize: 15,
    color: 'gray',
    marginTop: 10,
  },
  subTextup: {
    fontSize: 15,
    color: '#0057e7',
    marginTop: 10,
    fontWeight: 'bold',
  },
  lineback: {
    width: '85%',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: 'gray',
  },
  subButtonBack: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  mainButtonTwo: {
    width: '85%',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  signinButtonTwo: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '25%',
    marginRight: 40,
    marginTop: 22,
  },
});
export default SignUp;
