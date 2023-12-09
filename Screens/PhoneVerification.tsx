import React from 'react';
import { View, Text, StyleSheet,Image,SafeAreaView,TouchableOpacity,  ImageBackground,} from 'react-native';
import Inputs from '../components/inputs';
import ButtonComponent from '../components/ButtonComponent';
import CardComponent from '../components/CardComponent';

const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

const PhoneVerification: React.FC = () => {
  const handleLoginPress = () => {
    // Add your logic for handling the sign-up button press
    console.log('Log in button pressed');
  };
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
              <Image source={require('../assets/icon.png')} style={styles.imageMain} />
              <View style={styles.textContainer}>
                <Text style={styles.text}> Phone Verification</Text>
                
                
              </View>
            
              <CardComponent color="white" width="80%" height="30%" marginTop={40} marginBottom={20} alignItems="center" justifyContent="center">
              <Inputs
        inputName="Phone No"
      />
          <Inputs
        inputName="OTP"
      />
      
        </CardComponent>
              
      
              <ButtonComponent
              backgroundColor="#0057E7"
              borderRadius={30}
              marginHorizontal={5}
              fontColor="white"
              borderColor="white"
              onPress={() => console.log('Edit Profile Pressed')}
              buttonText="Continue"
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
      marginVertical:10    // Center children vertically
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
});
export default PhoneVerification;
