
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  ScrollView 
} from 'react-native';
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  CakeIcon,
} from 'react-native-heroicons/outline';
import MenuBar from '../components/MenuBar';
import CardComponent from '../components/CardComponent';
import ButtonComponent from '../components/ButtonComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getFirestore, collection, getDocs,addDoc } from '@firebase/firestore';
import { firebaseConfig } from '../firebaseConfig';
import {useNavigation} from '@react-navigation/native'; 

const profileImage = require('../assets/profile.png');
const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

const EditProfileScreen = () => {
  const [username, setUsername] = useState('Chanuka Jayasing');
  const [email, setEmail] = useState('chanuka@email.com');
  const [contactNumber, setContactNumber] = useState('+94 77 255 632');
  const [address, setAddress] = useState('18, Obawatta Road, Srijayawardenapura');
  const [birthday, setBirthday] = useState('1995-07-13');

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        
       
        

        <CardComponent color="#81c9f0" width="90%" height="49%" marginTop={40} marginBottom={10} alignItems="flex-start" justifyContent="flex-start">
        <ScrollView>

        <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <UserCircleIcon width={35} height={35} color="#4dbac4" />

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Username</Text>
             
              <TextInput
                  style={styles.sectionItemBold}
                  value={username}
                  onChangeText={setUsername}
                />
            </View>
          </View>
      
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <EnvelopeIcon width={35} height={35} color="#4dbac4" />

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Email</Text>
              <TextInput
                  style={styles.sectionItemBold}
                  value={email}
                  onChangeText={setEmail}
                />
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <PhoneIcon width={35} height={35} color="#4dbac4"/>

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Contact number</Text>
              <TextInput
                  style={styles.sectionItemBold}
                  value={contactNumber}
                  onChangeText={setContactNumber}
                />
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <HomeIcon width={35} height={35} color="#4dbac4"/>

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Address</Text>
              <TextInput
                  style={styles.sectionItemBold}
                  value={address}
                  onChangeText={(text) => setAddress(text.substring(0, 30))} // Limit to 30 characters
                  maxLength={30} // Add maxLength prop
                />
            </View>
          </View>
          
          
          <View style={styles.userInfoContainer}>
            {/* User Icon */}
            <CakeIcon width={35} height={35} color="#4dbac4"/>

            {/* Username and Tag */}
            <View style={styles.userdetailsContainer}>
              <Text style={[styles.tags, { opacity: 0.6 }]}>Birthday</Text>
              <TextInput
                  style={styles.sectionItemBold}
                  value={birthday}
                  onChangeText={setBirthday}
                />
            </View>
          </View>
          </ScrollView>
        </CardComponent>
        <CardComponent color="#50cdd9" width="90%" height="30%" marginTop={0} marginBottom={20} alignItems="center" justifyContent="center">
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
              onPress={async () => {
                const firestore = getFirestore();

                console.log("t");
                const newDocRef = await addDoc(collection(firestore, 'User'), {id:"3",age:100});
                console.log(newDocRef);
                
                console.log("s");
                const querySnapshot = await getDocs(collection(firestore, 'User'));
                    
                querySnapshot.forEach((doc) => {
                  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                });



              }}
              
              buttonText="Edit Profile Picture"
            />
          </View>
        </CardComponent>
    
        
        <View style={styles.bottomBarContainer}>
          <MenuBar />
        </View>
      
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
    marginVertical: 0,
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
    marginVertical: 0,
   
  },
  sectionItemBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3a3d3d',
    marginTop: 0,

  },
 
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default EditProfileScreen;
