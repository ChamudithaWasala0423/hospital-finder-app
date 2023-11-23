import React from 'react';
import { View, Text, StyleSheet,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import Inputs from '../Components/inputs';





// Create a functional component
const Login: React.FC = () => {
  const handleSignUpPress = () => {
    // Add your logic for handling the sign-up button press
    console.log('Sign Up button pressed');
  };
  return (
   
        <View style={styles.container}>
          <Image source={require('../images/icon.png')} style={styles.image} />
     
      
          <Text style={styles.text}>Welcome Back</Text>
          <Inputs />
          <TouchableOpacity style={styles.signButton} onPress={handleSignUpPress}>
            <Text ></Text>
           
            <Text style={styles.signButtonText}>Sign Up</Text>

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
      },

      text: {
        fontSize: 25,
        color: '#000000',
        fontWeight:'bold',
        
      },
      image: {
        width:40 ,
        height: 40,
        //resizeMode: 'contain', // Adjust the resizeMode based on your image requirements
        marginBottom: 20,
        marginTop:5,
        borderRadius:20
      },
      signButton: {
        
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        width:100,
      },
      signButtonText: {
        color: '#0057E7',
        fontSize: 18,
        fontWeight: 'bold',
      },
      imagecontainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        display:'flex',
         
      },
      signtext: {
        fontSize: 15,
        color: '#000000',
        textAlign:'right',
        marginTop:10
        
      },


});


export default Login;
