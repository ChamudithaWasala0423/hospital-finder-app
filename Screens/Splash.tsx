// Import necessary modules from React and React Native
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';





// Create a functional component
const Splash: React.FC = () => {
  return (
    // Use View to create the background with blue color
    <View style={styles.container}>
        <Image source={require('./images/icon.png')} style={styles.image} />
     
      {/* Use Text component to display "Hospital Finder" in the middle of the screen */}
      <Text style={styles.text}>Hospital Finder</Text>
    </View>
  );
};

// Create a StyleSheet for styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0057E7', // Set the background color to blue
  },
  text: {
    fontSize: 35,
    color: 'white',
    fontWeight:'bold',
    
  },
  image: {
    width:80 ,
    height: 80,
    resizeMode: 'contain', // Adjust the resizeMode based on your image requirements
    marginBottom: 20,
    borderRadius:20
  },
});

// Export the component
export default Splash;
