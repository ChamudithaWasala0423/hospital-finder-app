/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
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
  const [countryNames, setCountryNames] = useState([]);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [privacyPolicyContent, setPrivacyPolicyContent] = useState('');
  const [privacyPolicyModalVisible, setPrivacyPolicyModalVisible] =
    useState(false);
  const [termsContent, setTermsContent] = useState('');
  const [TermsModalVisible, setTermsModalVisible] = useState(false);
  const [aboutContent, setAboutContent] = useState('');
  const [aboutModalVisible, setAboutModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      // Sign out the user
      await auth().signOut();
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

  const openCountryPopup = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const names = data.map(country => country.name.common);
      setCountryNames(names);
      setCountryModalVisible(true);
    } catch (error) {
      console.error('Error fetching country names:', error);
    }
  };

  const openPrivacy = () => {
    const customPrivacyPolicy = ` 
    We collect and store voluntary
    medical and location data for 
    improving healthcare experiences.
    Standard measures are in place for 
    data protection, though absolute 
    security cannot be guaranteed.
    You can access, correct, 
    or delete your data through 
    App settings.`;
    setPrivacyPolicyContent(customPrivacyPolicy);
    setPrivacyPolicyModalVisible(true);
  };

  const openTerms = () => {
    const customTerms = `
    This app is for finding nearby
    healthcare facilities. 
    Please use it responsibly for your
    healthcare needs.`;
    setTermsContent(customTerms);
    setTermsModalVisible(true);
  };

  const openAbout = () => {
    const customAbout = `
    H.M.C.P.B.Wasala - AF/20/16127 
    K. U. Randeniya - AF/20/16256 
    N.M.A.S.Tharuka - AF/20/16327 `;
    setAboutContent(customAbout);
    setAboutModalVisible(true);
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
        <TouchableOpacity onPress={openCountryPopup}>
          <Text style={styles.sectionItem}>Country</Text>
        </TouchableOpacity>
        {/* Country Popup Modal */}
        <Modal
          animationType="none"
          transparent={true}
          visible={countryModalVisible}
          onRequestClose={() => setCountryModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Country</Text>
              <FlatList
                data={countryNames}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <Text style={styles.modalItem}>{item}</Text>
                )}
              />
              <TouchableOpacity
                onPress={() => setCountryModalVisible(false)}
                style={styles.modalCloseButton}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity onPress={openPrivacy}>
          <Text style={styles.sectionItem}>Privacy Policy</Text>
        </TouchableOpacity>
        <Modal
          animationType="none"
          transparent={true}
          visible={privacyPolicyModalVisible}
          onRequestClose={() => setPrivacyPolicyModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {privacyPolicyContent ? (
                <>
                  <Text style={styles.modalTitle}>Privacy Policy</Text>
                  <Text style={styles.modalItem}>{privacyPolicyContent}</Text>
                </>
              ) : (
                <Text style={styles.modalTitle}>Loading...</Text>
              )}
              <TouchableOpacity
                onPress={() => setPrivacyPolicyModalVisible(false)}
                style={styles.modalCloseButton}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={openTerms}>
          <Text style={styles.sectionItem}>Terms of use</Text>
        </TouchableOpacity>
        <Modal
          animationType="none"
          transparent={true}
          visible={TermsModalVisible}
          onRequestClose={() => setTermsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {termsContent ? (
                <>
                  <Text style={styles.modalTitle}>Terms of use</Text>
                  <Text style={styles.modalItem}>{termsContent}</Text>
                </>
              ) : (
                <Text style={styles.modalTitle}>Loading...</Text>
              )}
              <TouchableOpacity
                onPress={() => setTermsModalVisible(false)}
                style={styles.modalCloseButton}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={openAbout}>
          <Text style={styles.sectionItem}>About</Text>
        </TouchableOpacity>
        <Modal
          animationType="none"
          transparent={true}
          visible={aboutModalVisible}
          onRequestClose={() => setAboutModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {aboutContent ? (
                <>
                  <Text style={styles.modalTitle}>About</Text>
                  <Text style={styles.modalTitle}>
                    Developer Info - Group 07
                  </Text>
                  <Text style={styles.modalItem}>{aboutContent}</Text>
                </>
              ) : (
                <Text style={styles.modalTitle}>Loading...</Text>
              )}
              <TouchableOpacity
                onPress={() => setAboutModalVisible(false)}
                style={styles.modalCloseButton}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    alignItems: 'center',
    justifyContent: 'space-between',
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalCloseButton: {
    backgroundColor: '#0057e7',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SettingScreen;
