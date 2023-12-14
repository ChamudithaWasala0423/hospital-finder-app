/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  CakeIcon,
  ArrowSmallLeftIcon,
} from 'react-native-heroicons/outline';
import CardComponent from '../Components/CardComponent';

import {useNavigation} from '@react-navigation/native';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from '@firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewProfileScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    fetchUserDetails();
  }, []);

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
          console.log(`No documents found with the specified UID.`);
        }
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.boxOne} onPress={navigation.goBack}>
          <ArrowSmallLeftIcon size={25} color="#747474" />
        </TouchableOpacity>
        <View style={styles.boxTwo}>
          <Text style={styles.heraderText}>My Profile</Text>
        </View>
      </View>

      <CardComponent
        color="white"
        width="90%"
        height="49%"
        marginTop={20}
        marginBottom={0}
        alignItems="flex-start"
        justifyContent="flex-start">
        <View></View>
        <View style={styles.userInfoContainer}>
          {/* User Icon */}
          <UserCircleIcon size={30} color="#0057e7" />

          {/* Username and Tag */}
          <View style={styles.userdetailsContainer}>
            <Text style={styles.tags}>Name</Text>
            <Text style={styles.sectionItemBold}>{username}</Text>
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          {/* User Icon */}
          <EnvelopeIcon size={30} color="#0057e7" />

          {/* Username and Tag */}
          <View style={styles.userdetailsContainer}>
            <Text style={styles.tags}>Email</Text>
            <Text style={styles.sectionItemBold}>{email}</Text>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          {/* User Icon */}
          <PhoneIcon size={30} color="#0057e7" />

          {/* Username and Tag */}
          <View style={styles.userdetailsContainer}>
            <Text style={styles.tags}>Contact number</Text>
            <Text style={styles.sectionItemBold}>{contactNumber}</Text>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          {/* User Icon */}
          <HomeIcon size={30} color="#0057e7" />

          {/* Username and Tag */}
          <View style={styles.userdetailsContainer}>
            <Text style={styles.tags}>Address</Text>
            <Text style={styles.sectionItemBold}>{address}</Text>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          {/* User Icon */}
          <CakeIcon size={30} color="#0057e7" />

          {/* Username and Tag */}
          <View style={styles.userdetailsContainer}>
            <Text style={styles.tags}>Birthday</Text>
            <Text style={styles.sectionItemBold}>{birthday}</Text>
          </View>
        </View>
      </CardComponent>
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
    flexDirection: 'column', // Change to column direction
    alignItems: 'flex-start',
    justifyContent: 'flex-start', // Align items to the start
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  tags: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0057e7',
    marginVertical: 1,
  },
  sectionItemBold: {
    fontSize: 15,
    color: 'black',
    marginTop: 0,
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
});

export default ViewProfileScreen;
