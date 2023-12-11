/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MenuBar from '../Components/MenuBar';
import CardComponent from '../Components/CardComponent';
import ButtonComponent from '../Components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from '@firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogout = async () => {
    try {
      // Sign out the user
      await auth().signOut();
      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Logout Error:', error.message);
    }
  };

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
        } else {
          console.log(`No documents found with the specified UID.`);
        }
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const firstLetter = username.charAt(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <CardComponent
        color="white"
        width="90%"
        height="20%"
        marginTop={40}
        marginBottom={10}
        alignItems="center"
        justifyContent="center">
        <View style={styles.cardContent}>
          <View style={styles.profilePictureContainer}>
            <View style={styles.profileImg}>
              <Text style={styles.profileText}>{firstLetter}</Text>
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.sectionTitle}>{username}</Text>
            <Text style={{marginBottom: 20, marginLeft: 10}}>{email}</Text>
            <View style={styles.buttonContainer}>
              <ButtonComponent
                backgroundColor="#0057e7"
                borderRadius={10}
                marginHorizontal={5}
                fontColor="#fff"
                borderColor="#0057e7"
                height={40}
                width={80}
                onPress={() => navigation.navigate('ViewProfileScreen')}
                buttonText="View"
              />
              <ButtonComponent
                backgroundColor="#000"
                borderRadius={10}
                marginHorizontal={5}
                fontColor="#fff"
                borderColor="#000"
                height={40}
                width={80}
                onPress={() => navigation.navigate('EditProfileScreen')}
                buttonText="Edit"
              />
            </View>
          </View>
        </View>
      </CardComponent>

      <CardComponent
        color="white"
        width="90%"
        height="58%"
        marginTop={0}
        marginBottom={20}
        alignItems="flex-start"
        justifyContent="flex-start">
        {/* New section */}
        <Text style={styles.sectionTitle}>Accounts</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.sectionItem}>Security</Text>
        </TouchableOpacity>

        <Text style={styles.sectionItem}>country</Text>
        <View style={styles.horizontalLine} />

        <Text style={styles.sectionTitle}>General</Text>
        <Text style={styles.sectionItem}>privacy policy</Text>
        <Text style={styles.sectionItem}>terms of use</Text>
        <Text style={styles.sectionItem}>rate us</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.sectionItem}>Logout</Text>
        </TouchableOpacity>
      </CardComponent>

      <MenuBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: 0,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the row
    justifyContent: 'space-between', // Distribute items evenly along the row
  },
  profilePictureContainer: {
    marginRight: 20,
  },
  userInfoContainer: {
    marginLeft: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 20,
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
    fontSize: 17,
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
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#0057e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SettingScreen;
