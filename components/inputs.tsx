import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

interface InputsProps {
  inputName: string;

}

const Inputs: React.FC<InputsProps> = ({ inputName }) => {
  const [inputValue, setInputValue] = useState('');

  const handleContinue = () => {
    // Add logic to handle the continue button press
    console.log(`${inputName} value:`, inputValue);
  };

  return (
    <SafeAreaView>
      <View style={{ ...styles.container }}>
        
          <Text style={styles.textNormal}>{inputName}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={inputName}
            placeholderTextColor="#808080" 
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
       
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,

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
    width:"300%",
  },
  
});

export default Inputs;
