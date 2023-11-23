import React from 'react';
import { View, Text, StyleSheet,Image,TextInput, SafeAreaView ,TouchableOpacity} from 'react-native';

const Inputs: React.FC = () => {

    const handleContinue = () => {
        // Add logic to handle the continue button press
        console.log('Continue button pressed');
      };


    return(
        <SafeAreaView>
            <View style={styles.formInputs}>
                <TextInput style={[styles.textInput, { width: 350 }]} placeholder='Email address'/>

            </View>

            <View style={styles.formInputs}>
                <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}/>

            </View>

            {/* Continue button */}
           <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
           </TouchableOpacity>
           

        </SafeAreaView>


    );
};
const styles = StyleSheet.create({

    formInputs:{
        marginTop:10,
        padding:10,

    },
    textInput:{
        padding:10,
        fontSize:15,
        borderWidth:1,
        borderColor:'#a7a7a7',
        borderRadius:10,
        
    },
    continueButton: {
        backgroundColor: '#0057E7',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
      },
      continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
});
export default Inputs;