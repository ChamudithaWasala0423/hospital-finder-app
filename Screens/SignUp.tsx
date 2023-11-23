import React from 'react';
import { View, Text, StyleSheet,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import Inputs from '../Components/inputs';

const SignUp: React.FC = () => {
  const handleLoginPress = () => {
    // Add your logic for handling the sign-up button press
    console.log('Log in button pressed');
  };
    return (
       
            <View style={styles.container}>
              <Image source={require('../images/icon.png')} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.text}> Create Your Account</Text>
                
              </View>
              <Inputs/>
              <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
               
           
               <Text style={styles.loginButtonText}>Log In</Text>

              </TouchableOpacity>
              <Text style={{textAlign:'center',fontSize:20}}>or</Text>
              <TouchableOpacity>
                <View style={styles.imagecontainer}>
                  <Image source={require('../images/google.jpg')} style={styles.image} />
                  <Text style={styles.signtext}>Continue with Google</Text>


         </View>

         </TouchableOpacity>



            </View>



       

    );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FAFA',
        //flexDirection:'row' 
      },
      image: {
        width:40 ,
        height: 40,
        //resizeMode: 'contain', // Adjust the resizeMode based on your image requirements
        marginBottom: 20,
        //marginTop:100,
        borderRadius:20
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
    loginButton: {
        
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 20,
      width:100,
    },
    loginButtonText: {
      color: '#0057E7',
      fontSize: 18,
      fontWeight: 'bold',
    },
    imagecontainer: {
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      display:'flex',
      marginTop:25
       
    },
    signtext: {
      fontSize: 15,
      color: '#000000',
      textAlign:'right',
      marginTop:10,
      marginLeft:25
      
    },

});
export default SignUp;
