/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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

const AddProfileData: React.FC = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
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
      // console.log(userUid, 'test');
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

        console.log('New user details created with UID:', userUid);
        Alert.alert('User details updated successfully!');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error updating/creating user details:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainBox}>
        <Image source={require('../assets/send.png')} style={styles.image} />
        <Text style={styles.titleText}>Add your profile </Text>
      </View>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder="First & Last Name"
          placeholderTextColor="gray"
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          placeholderTextColor="gray"
          onChangeText={text => {
            setContactNumber(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="gray"
          onChangeText={text => {
            setAddress(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Birthday - Ex: 01-01-2000"
          placeholderTextColor="gray"
          onChangeText={text => {
            setBirthday(text);
          }}
        />
        <TouchableOpacity style={styles.mainButton} onPress={handleSave}>
          <Text style={styles.signinButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  MainBox: {
    width: '100%',
    height: 250,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  titleText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subContainer: {
    width: '100%',
    height: 320,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '15%',
    width: '85%',
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  mainButton: {
    width: '85%',
    height: '15%',
    backgroundColor: '#0057e7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  signinButton: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 15,
    color: 'gray',
    marginTop: 10,
  },
  subTextup: {
    fontSize: 15,
    color: '#0057e7',
    marginTop: 10,
    fontWeight: 'bold',
  },
  lineback: {
    width: '85%',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: 'gray',
  },
  subButtonBack: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  mainButtonTwo: {
    width: '85%',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  signinButtonTwo: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '25%',
    marginRight: 40,
    marginTop: 22,
  },
});
export default AddProfileData;
