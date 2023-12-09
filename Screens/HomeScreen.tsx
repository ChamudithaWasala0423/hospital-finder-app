/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MenuBar from '../Components/MenuBar';
import {BookmarkIcon} from 'react-native-heroicons/solid';
import Category from '../Components/Category';
import SearchBox from '../Components/SearchBox';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from '@firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen: React.FC = () => {
  const [username, setUsername] = useState('');

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
      <View style={styles.headerContainer}>
        <View style={styles.subHeader}>
          <View style={styles.box}>
            <View style={styles.profileImg}>
              <Text style={styles.profileText}>{firstLetter}</Text>
            </View>
          </View>
          <View style={styles.boxTwo}>
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.nameText}>{username}</Text>
          </View>
          <View style={styles.box}>
            <BookmarkIcon size={25} color="#0057e7" />
          </View>
        </View>
        <SearchBox />
        {/* <MenuBarTwo /> */}
        <Category />
      </View>
      <MenuBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  headerContainer: {
    width: '100%',
    height: 290,
  },
  subHeader: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  box: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#0057e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  helloText: {
    fontSize: 15,
    color: '#0057e7',
  },
  boxTwo: {
    height: 80,
    justifyContent: 'center',
    marginRight: 80,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
