
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';
import { SparklesIcon } from "react-native-heroicons/solid";
import {
  
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  CakeIcon,

} from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuBar from '../components/MenuBar';
import CardComponent from '../components/CardComponent';
import ButtonComponent from '../components/ButtonComponent';

// Import your local assets
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
              onPress={() => navigation.navigate('EditProfileScreen')}
              buttonText="Edit Profile"
            />
          </View>
        </CardComponent>

        <CardComponent color="white" width="90%" height="49%" marginTop={0} marginBottom={20} alignItems="flex-start" justifyContent="flex-start">
        <View>
      
    </View>
        <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <UserCircleIcon width={35} height={35} color="#5387e0" />

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Username</Text>
              <Text style={styles.sectionItemBold}>Chanuka Jayasinghe</Text>
            </View>
          </View>
          
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <EnvelopeIcon width={35} height={35} color="#5387e0" />

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Email</Text>
              <Text style={styles.sectionItemBold}>chanuka@email.com</Text>
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <PhoneIcon width={35} height={35} color="#5387e0"/>

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Contact number</Text>
              <Text style={styles.sectionItemBold}>+94 77 255 632</Text>
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <HomeIcon width={35} height={35} color="#5387e0"/>

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Address</Text>
              <Text style={styles.sectionItemBold}>18, Obawatta Road, Srijayawardenapura</Text>
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <CakeIcon width={35} height={35} color="#5387e0"/>

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Birthday</Text>
              <Text style={styles.sectionItemBold}>1995-07-13</Text>
            </View>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  userdetailsContainer: {
    marginLeft: 30,
    flexDirection: 'column',  // Change to column direction
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',// Align items to the start

  },
 
  buttonContainer: {
    flexDirection: 'row',
  },
  
  tags: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5387e0',
    marginVertical: 1,
   
  },
  sectionItemBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 0,

  },
 
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ViewProfileScreen;
