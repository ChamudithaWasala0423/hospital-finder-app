import React, { useState } from 'react';
import { View, Alert,  Text, StyleSheet,Image,SafeAreaView,TouchableOpacity,TextInput,  ImageBackground,} from 'react-native';
import Inputs from '../components/inputs';
import ButtonComponent from '../components/ButtonComponent';
import CardComponent from '../components/CardComponent';
import {useNavigation} from '@react-navigation/native'; 
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { firebase } from '@react-native-firebase/auth';
import { getFirestore, collection, getDocs, addDoc,  query, where,  } from '@firebase/firestore';
import { EyeIcon } from 'react-native-heroicons/outline'; // Corrected import
import auth from '@react-native-firebase/auth';



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
      await auth().signInWithEmailAndPassword(email, pass);

      // If successful, show a success message or navigate to the next screen
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('HomeScreen');
    } catch (error: any) {
      // If there's an error, show an error message
      Alert.alert('Error', error.message);
    }

  
};

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
              <Image source={require('../assets/icon.png')} style={styles.imageMain} />
              <View style={styles.textContainer}>
                <Text style={styles.text}> Login to Your Account</Text>
                
                
              </View>
            
              <CardComponent color="white" width="80%" height="45%" marginTop={40} marginBottom={20} alignItems="center" justifyContent="center">
       
        <View style={{ ...styles.inputContainer }}>
        
        <Text style={styles.textNormal}>Username</Text>
        <TextInput
          style={styles.textInput}
          
          placeholderTextColor="#808080" 
          placeholder="Username"
      value={email}
      onChangeText={(text) => setEmail(text)}
        />
     
      
    </View>
    <View style={{ ...styles.inputContainer }}>
        <Text style={styles.textNormal}>Password</Text>
        <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#808080"
          placeholder="Password"
          secureTextEntry={!showPassword} // Use secureTextEntry based on the state
          value={pass}
          onChangeText={(text) => setPassword(text)}
        />
       <TouchableOpacity onPress={handleTogglePassword} style={styles.showPasswordButton}>
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
              onPress={handleLoginPress}
              buttonText="Countinue"
            />
              
              {/* <TouchableOpacity style={styles.touchableContainer}>
  <View style={styles.imagecontainer}>
    <Image source={require('../assets/google.jpg')} style={styles.image} />
    <Text style={styles.signtext}>Continue with Google</Text>
  </View>
</TouchableOpacity> */}

<TouchableOpacity style={styles.touchableContainer} onPress={() =>  navigation.navigate('PhoneVerification')}>
  <View style={styles.imagecontainer}>
    <Image source={require('../assets/phone_icon.png')} style={styles.image} />
    <Text style={styles.signtext}>Continue with Phone</Text>
  </View>
</TouchableOpacity>

<ButtonComponent
              backgroundColor="#0057E7"
              borderRadius={30}
              marginHorizontal={5}
              fontColor="white"
              borderColor="white"
              onPress={() =>  navigation.navigate('SignUp')}
              buttonText="Create Account"
            />
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
     
    textContainer:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'row',
       
    },
       
    text: {
        fontSize: 25,
        color: '#000000',
        fontWeight:'bold',
        marginTop:25,
        
      },
    createText:{
        fontSize:16,
        color:'#707370',
        marginTop:50,
        
        

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
      width:"100%",
    },
    touchableContainer: {
      justifyContent: 'center', // Center vertically
      alignItems: 'center',     // Center horizontally
    },
    imagecontainer: {
      
      flexDirection: 'row',     // Arrange children horizontally
      justifyContent: 'center', // Center children horizontally
      alignItems: 'center',
      backgroundColor: 'white',
      padding:5,
      borderRadius:50 ,
      marginTop:10,  
      marginBottom:10    // Center children vertically
    },
    imageMain: {
      width: 70,  // Set the desired width
      height: 70, 
      borderRadius:50,
      padding:20,

      // Set the desired height

    },
    image: {
      width: 30,  // Set the desired width
      height: 30, 
      borderRadius:50,// Set the desired height

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
export default Login;
