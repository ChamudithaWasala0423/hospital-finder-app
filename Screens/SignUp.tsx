/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import CardComponent from '../Components/CardComponent';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {EyeIcon} from 'react-native-heroicons/outline';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [pass, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // New state

  // const handleSignUp2 = async () => {
  //     try {
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();
  //       console.log('User Info:', userInfo);
  //       // Handle user info as needed
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         const errorWithCode = error as { code?: string };
  //         if (errorWithCode === statusCodes.SIGN_IN_CANCELLED) {
  //           console.log('User cancelled the login process');
  //         } else if (errorWithCode === statusCodes.IN_PROGRESS) {
  //           console.log('Sign-in is already in progress');
  //         } else if (errorWithCode === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //           console.log('Play services not available or outdated');
  //         } else {
  //           console.log('Error:', error.message);
  //         }
  //         // Handle the error as an instance of the Error class
  //         console.error('Error message:', error.message);
  //       } else {
  //         // Handle other types of errors or unknown
  //         console.error('An unknown error occurred:', error);
  //       }

  //     }}

  //     const handleSignUp3 = async () => {
  //       await auth().createUserWithEmailAndPassword("fire@fire.com", "Fire");

  //   const user =await auth().signInWithEmailAndPassword("fire@fire.com","Fireeeeeeeeee");
  //   console.log(user.user);
  //   console.log(auth().currentUser);
  //   auth().signOut();
  //   console.log(auth().currentUser);

  //     };

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
      // If successful, show a success message
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Home');
      // You can navigate to another screen or perform other actions after successful signup
    } catch (error: any) {
      // If there's an error, show an error message
      Alert.alert('Error', error.message);
    }
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.imageMain}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}> Create Your Account</Text>
        </View>

        <CardComponent
          color="white"
          width="80%"
          height="45%"
          marginTop={40}
          marginBottom={20}
          alignItems="center"
          justifyContent="center">
          <View style={{...styles.inputContainer}}>
            <Text style={styles.textNormal}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#808080"
              placeholder="Username"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={{...styles.inputContainer}}>
            <Text style={styles.textNormal}>Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#808080"
                placeholder="Password"
                secureTextEntry={!showPassword} // Use secureTextEntry based on the state
                value={pass}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                onPress={handleTogglePassword}
                style={styles.showPasswordButton}>
                <EyeIcon size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </CardComponent>

        <ButtonComponent
          backgroundColor="#0057E7"
          borderRadius={30}
          marginHorizontal={5}
          fontColor="white"
          borderColor="white"
          onPress={handleSignUp1}
          buttonText="Continue"
        />

        {/* <TouchableOpacity style={styles.touchableContainer}  >
          <View style={styles.imagecontainer}>
            <Image source={require('../assets/google.jpg')} style={styles.image} />
            <Text style={styles.signtext}>Continue with Google</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={() => navigation.navigate('PhoneVerification')}>
          <View style={styles.imagecontainer}>
            <Image
              source={require('../assets/phone_icon.png')}
              style={styles.image}
            />
            <Text style={styles.signtext}>Continue with Phone</Text>
          </View>
        </TouchableOpacity>
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
    //flexDirection:'row'
  },
  input: {
    height: 20,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white', // Set text color to black
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  text: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25,
  },
  createText: {
    fontSize: 16,
    color: '#707370',
    marginTop: 50,
  },
  inputContainer: {
    padding: 10,

    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',

    alignItems: 'center', // Align items in the center vertically// Adjust the alpha (fourth value) as needed
  },
  textNormal: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textInput: {
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    color: '#000000',
    borderColor: '#a7a7a7',
    borderRadius: 10,
    width: '100%',
  },
  touchableContainer: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  imagecontainer: {
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'center', // Center children horizontally
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    marginVertical: 10, // Center children vertically
  },
  imageMain: {
    width: 70, // Set the desired width
    height: 70,
    borderRadius: 50,
    padding: 20,

    // Set the desired height
  },
  image: {
    width: 30, // Set the desired width
    height: 30,
    borderRadius: 50, // Set the desired height
  },
  signtext: {
    fontSize: 15,
    color: '#000000',
    justifyContent: 'center', // Center children horizontally
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 15,
    marginRight: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  showPasswordButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
export default SignUp;
