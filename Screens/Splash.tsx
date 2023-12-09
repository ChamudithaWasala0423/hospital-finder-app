// Import necessary modules from React and React Native
import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');
const iconImage = require('../assets/icon.png');

// Create a functional component
const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to another screen after 10 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('Login'); // Update with the correct screen name
    }, 50);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    // Use ImageBackground to create the background with an image
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Overlay the icon.png over the text */}
        <View style={styles.overlayContainer}>
      
        <Image source={iconImage} style={styles.image} />
          <Text style={styles.text}>
            <Text style={styles.colorText}>Welcome To Hospital Finder! </Text>
          </Text>
          
        
        </View>
      </View>
    </ImageBackground>
  );
};

// Create a StyleSheet for styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  overlayContainer: {
    alignItems: 'flex-start', 
  },
  text: {
    fontSize: 75,
    color: 'rgba(255, 255, 255, 0)',
    fontWeight: 'bold',
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginVertical: 20,
    borderRadius: 20,
  },
  colorText: {
    color: 'rgba(48, 132, 201, 0.9)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

// Export the component
export default Splash;
