/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  CakeIcon,
  ArrowSmallLeftIcon,
} from 'react-native-heroicons/outline';
import MenuBar from '../Components/MenuBar';
import CardComponent from '../Components/CardComponent';
import ButtonComponent from '../Components/ButtonComponent';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  query,
  where,
  updateDoc,
} from '@firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

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
      console.log(userUid);
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
      console.log(userUid, 'test');
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
        Alert.alert('User details updated successfully!');
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
        
      }
    } catch (error) {
      Alert.alert('Error updating user details');
    }
  };

  const handleInputChange = () => {
    setIsChanged(true);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.boxOne} onPress={navigation.goBack}>
          <ArrowSmallLeftIcon size={25} color="#747474" />
        </TouchableOpacity>
        <View style={styles.boxTwo}>
          <Text style={styles.heraderText}>Edit your profile</Text>
        </View>
      </View>
      <CardComponent
        color="#fff"
        width="90%"
        height="60%"
        marginTop={40}
        marginBottom={10}
        alignItems="flex-start"
        justifyContent="flex-start">
        <ScrollView>
          <View style={styles.userInfoContainer}>
            <UserCircleIcon size={30} color="#0057e7" />
            <View style={styles.userdetailsContainer}>
              <Text style={styles.tags}>Name</Text>
              <View style={styles.textBack}>
                <TextInput
                  style={styles.sectionItemBold}
                  value={username}
                  onChangeText={text => {
                    setUsername(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.userInfoContainer}>
            <EnvelopeIcon size={30} color="#0057e7" />
            <View style={styles.userdetailsContainer}>
              <Text style={styles.tags}>Email</Text>
              <View style={styles.textBack}>
                <TextInput
                  style={styles.sectionItemBold}
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.userInfoContainer}>
            <PhoneIcon size={30} color="#0057e7" />
            <View style={styles.userdetailsContainer}>
              <Text style={styles.tags}>Contact number</Text>
              <View style={styles.textBack}>
                <TextInput
                  style={styles.sectionItemBold}
                  value={contactNumber}
                  onChangeText={text => {
                    setContactNumber(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.userInfoContainer}>
            <HomeIcon size={30} color="#0057e7" />
            <View style={styles.userdetailsContainer}>
              <Text style={styles.tags}>Address</Text>
              <View style={styles.textBack}>
                <TextInput
                  style={styles.sectionItemBold}
                  value={address}
                  onChangeText={text => {
                    setAddress(text.substring(0, 30));
                    handleInputChange();
                  }}
                  maxLength={30}
                />
              </View>
            </View>
          </View>

          <View style={styles.userInfoContainer}>
            <CakeIcon size={30} color="#0057e7" />
            <View style={styles.userdetailsContainer}>
              <Text style={styles.tags}>Birthday</Text>
              <View style={styles.textBack}>
                <TextInput
                  style={styles.sectionItemBold}
                  value={birthday}
                  onChangeText={text => {
                    setBirthday(text);
                    handleInputChange();
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </CardComponent>

      {isChanged && (
        <ButtonComponent
          backgroundColor="#0057e7"
          borderRadius={10}
          marginHorizontal={5}
          width={100}
          height={40}
          fontColor="white"
          borderColor="#0057e7"
          onPress={handleSave}
          buttonText="Save"
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    position: 'relative',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0057e7',
    marginVertical: 0,
  },
  sectionItemBold: {
    fontSize: 15,
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
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    padding: 20,
  },
  boxOne: {
    width: '10%',
    alignItems: 'center',
  },
  boxTwo: {
    width: '90%',
    alignItems: 'center',
  },
  heraderText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
  },
  textBack: {
    backgroundColor: '#f2f4f5',
    borderRadius: 5,
    width: 270,
    margin: 5,
  },
});

export default EditProfileScreen;
