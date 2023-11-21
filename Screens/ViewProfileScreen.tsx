
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import CardComponent from '../Components/CardComponent';
import ButtonComponent from '../Components/ButtonComponent';

// Import your local images
const profileImage = require('../assets/profile.png');
const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

const ViewProfileScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>User Details</Text>

        <CardComponent color="#5387e0" width="90%" height="30%" marginTop={40} marginBottom={10} alignItems="center" justifyContent="center">
          {/* Custom content for the first card */}
          <View style={styles.cardContent}>
            <View style={styles.profilePictureContainer}>
              <Image
                source={profileImage}
                style={styles.profilePicture}
              />
            </View>
            
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              backgroundColor="white"
              borderRadius={30}
              marginHorizontal={5}
              fontColor="black"
              borderColor="white"
              onPress={() => console.log('Edit Profile Pressed')}
              buttonText="Edit Profile"
            />
          </View>
        </CardComponent>

        <CardComponent color="white" width="90%" height="49%" marginTop={0} marginBottom={20} alignItems="flex-start" justifyContent="flex-start">
          {/* New section */}
          <Text style={styles.sectionTitle}>Accounts</Text>
          <Text style={styles.sectionItem}>personal information</Text>
          <Text style={styles.sectionItem}>country</Text>
          <Text style={styles.sectionItem}>language</Text>
          <View style={styles.horizontalLine} />

          <Text style={styles.sectionTitle}>General</Text>
          <Text style={styles.sectionItem}>notifications</Text>
          <Text style={styles.sectionItem}>privacy policy</Text>
          <Text style={styles.sectionItem}>terms of use</Text>
          <Text style={styles.sectionItem}>rate us</Text>
          <Text style={styles.sectionItem}>Logout</Text>
        </CardComponent>

        <MenuBar />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add a semi-transparent white background
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: 0,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the row
    justifyContent: 'space-between', // Distribute items evenly along the row
  },
  profilePictureContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    elevation: 15, // Add elevation for shadow on Android devices
    shadowColor: '#ffffff', // Shadow color
 
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginBottom: 10,
  
    
  },
  userInfoContainer: {
    marginLeft: 10,
  },
 
  buttonContainer: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
    marginLeft: 10,
  },
  sectionItemBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,

  },
  sectionItem: {
    fontSize: 20,
    color: 'grey',
    marginVertical: 5,
    marginLeft: 10,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1, // or adjust as needed
    width: '100%',
    marginVertical: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ViewProfileScreen;
