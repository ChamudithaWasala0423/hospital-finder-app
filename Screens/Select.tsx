import React from 'react';
import { View, Text, StyleSheet,Image,SafeAreaView,TouchableOpacity} from 'react-native';

const Select: React.FC = () => {
    const handleSignUpButoonPress = () => {

    };
    const handleLoginButoonPress = () => {

    };

    return(
        <View style={styles.container}>
            <Image source={require('./assets/icon.png')} style={styles.image} />
            <TouchableOpacity style={styles.continueButton} onPress={handleSignUpButoonPress}>
            <Text style={styles.continueButtonText}>Sign Up</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.continueButton} onPress={handleLoginButoonPress}>
            <Text style={styles.continueButtonText}>Login</Text>
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
      continueButton: {
        backgroundColor: '#0057E7',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom:40,
        width:120,
        justifyContent:'space-between'
      },
      continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      image: {
        width:40 ,
        height: 40,
        //resizeMode: 'contain', // Adjust the resizeMode based on your image requirements
        marginBottom: 50,
        //marginTop:100,
        borderRadius:20
      },


});
export default Select;