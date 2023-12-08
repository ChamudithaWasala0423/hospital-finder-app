import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
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
import { getFirestore, collection, getDocs, addDoc, doc, query, where, updateDoc  } from '@firebase/firestore';

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



import AsyncStorage from '@react-native-async-storage/async-storage';

const profileImage = require('../assets/profile.png');
const backgroundImage = require('../assets/viewProfileBackgroundImage.jpg');

const EditProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const getUserUid = async () => {
    try {
      const userUid = await AsyncStorage.getItem('UID');
      console.log(userUid)
      return userUid;
    } catch (error) {
      // Handle errors, such as AsyncStorage not being available
      console.error('Error getting user UID from AsyncStorage:', error);
      return null;
    }
  };
  

  const fetchUserDetails = async () => {
    const firestore = getFirestore();

    try {
      const userUid = await AsyncStorage.getItem('UID');
console.log(userUid, "test");
      if (userUid) {
        const userDetailsCollection = collection(firestore, 'userDetails');
        const q = query(userDetailsCollection, where('UID', '==', userUid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
          const userData = querySnapshot.docs[0].data();
          setUsername(userData.name || 'Add name');
          setEmail(userData.email || 'Add email');
          setContactNumber(userData.contact || 'Add contact');
          setAddress(userData.address || 'Add address');
          setBirthday(userData.birthday || 'Add birthday');
        } else {
          setUsername('Add name');
          setEmail('Add email');
          setContactNumber('Add contact');
          setAddress('Add address');
          setBirthday('Add birthday');
          console.log(`No documents found with the specified UID.`);
        }
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  

  const handleSave = async () => {
    try {
      const userUid = await AsyncStorage.getItem('UID'); // Replace with the dynamic user UID
      const firestore = getFirestore();
      const userDetailsCollection = collection(firestore, 'userDetails');
      const q = query(userDetailsCollection, where('UID', '==', userUid));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.size > 0) {
        // Document with the specified UID exists
        const userDocRef = doc(userDetailsCollection, querySnapshot.docs[0].id);
  
        await updateDoc(userDocRef, {
          name: username,
          email: email,
          contact: contactNumber,
          address: address,
          birthday: birthday,
        });
  
        setIsChanged(false);
        console.log('User details updated successfully!');
      } else {
        // Document with the specified UID doesn't exist, create a new document
        const newDocRef = await addDoc(userDetailsCollection, {
          UID: userUid,
          name: username,
          email: email,
          contact: contactNumber,
          address: address,
          birthday: birthday,
        });
  
        setIsChanged(false);
        console.log('New user details created with UID:', userUid);
      }
    } catch (error) {
      console.error('Error updating/creating user details:', error);
    }
  };
  

  const handleInputChange = () => {
    setIsChanged(true);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>

        <CardComponent
          color="#81c9f0"
          width="90%"
          height="49%"
          marginTop={40}
          marginBottom={10}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <ScrollView>
            <View style={styles.userInfoContainer}>
              <UserCircleIcon width={35} height={35} color="#4dbac4" />
              <View style={styles.userdetailsContainer}>
                <Text style={[styles.tags, { opacity: 0.6 }]}>Username</Text>
                <TextInput
                  style={styles.sectionItemBold}
                  value={username}
                  onChangeText={(text) => {
                    setUsername(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>

            <View style={styles.userInfoContainer}>
              <EnvelopeIcon width={35} height={35} color="#4dbac4" />
              <View style={styles.userdetailsContainer}>
                <Text style={[styles.tags, { opacity: 0.6 }]}>Email</Text>
                <TextInput
                  style={styles.sectionItemBold}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>

            <View style={styles.userInfoContainer}>
              <PhoneIcon width={35} height={35} color="#4dbac4" />
              <View style={styles.userdetailsContainer}>
                <Text style={[styles.tags, { opacity: 0.6 }]}>Contact number</Text>
                <TextInput
                  style={styles.sectionItemBold}
                  value={contactNumber}
                  onChangeText={(text) => {
                    setContactNumber(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>

            <View style={styles.userInfoContainer}>
              <HomeIcon width={35} height={35} color="#4dbac4" />
              <View style={styles.userdetailsContainer}>
                <Text style={[styles.tags, { opacity: 0.6 }]}>Address</Text>
                <TextInput
                  style={styles.sectionItemBold}
                  value={address}
                  onChangeText={(text) => {
                    setAddress(text.substring(0, 30));
                    handleInputChange();
                  }}
                  maxLength={30}
                />
              </View>
            </View>

            <View style={styles.userInfoContainer}>
              <CakeIcon width={35} height={35} color="#4dbac4" />
              <View style={styles.userdetailsContainer}>
                <Text style={[styles.tags, { opacity: 0.6 }]}>Birthday</Text>
                <TextInput
                  style={styles.sectionItemBold}
                  value={birthday}
                  onChangeText={(text) => {
                    setBirthday(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </CardComponent>

        {isChanged && (
          <ButtonComponent
            backgroundColor="#4CAF50"
            borderRadius={30}
            marginHorizontal={5}
            width={100}
            height={40}
            fontColor="white"
            borderColor="#4CAF50"
            onPress={handleSave}
            buttonText="Save Changes"
          />
        )}
        <CardComponent color="#50cdd9" width="90%" height="25%" marginTop={0} marginBottom={20} alignItems="center" justifyContent="center">
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
              width={120}
              height={40}
              fontColor="black"
              borderColor="white"
              onPress={
                fetchUserDetails
    
            
            }
              
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePictureContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    elevation: 15,
    shadowColor: '#ffffff',
  },
  profilePicture: {
    width: 100,
    height: 100,
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
