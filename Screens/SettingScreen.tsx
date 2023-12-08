// SettingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, } from 'react-native';
import MenuBar from '../Components/MenuBar';
import CardComponent from '../Components/CardComponent';
import ButtonComponent from '../Components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// Import your local image
const profileImage = require('../assets/profile.png');

const SettingScreen = () => {
  const navigation = useNavigation();

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <CardComponent color="white" width="90%" height="20%" marginTop={40} marginBottom={10} alignItems="center" justifyContent="center">
        {/* Custom content for the first card */}
        <View style={styles.cardContent}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={profileImage}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.sectionTitle}>JohnDoe</Text>
            <Text style={styles.sectionItem}>john.doe@example.com</Text>
            <View style={styles.buttonContainer}>
              <ButtonComponent
                backgroundColor="white"
                borderRadius={30}
                marginHorizontal={5}
                fontColor="black"
                borderColor="black"
                height={40}
                width={80}
                onPress={() => navigation.navigate('ViewProfileScreen')}
                buttonText="View"
              />
              <ButtonComponent
                backgroundColor="white"
                borderRadius={30}
                marginHorizontal={5}
                fontColor="black"
                borderColor="black"
                height={40}
                width={80}
                onPress={() => navigation.navigate('EditProfileScreen')}
                buttonText="Edit Profile"
              />
            </View>
          </View>
        </View>
      </CardComponent>

      <CardComponent color="white" width="90%" height="58%" marginTop={0} marginBottom={20} alignItems="flex-start" justifyContent="flex-start">
        {/* New section */}
        <Text style={styles.sectionTitle}>Accounts</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.sectionItem}>Security</Text>
        </TouchableOpacity>
      
        <Text style={styles.sectionItem}>country</Text>
        <Text style={styles.sectionItem}>language</Text>
        <View style={styles.horizontalLine} />

        <Text style={styles.sectionTitle}>General</Text>
        <Text style={styles.sectionItem}>notifications</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: 0,
    fontSize: 24,
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
    borderRadius: 50,
    overflow: 'hidden',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
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
  
});


export default SettingScreen;
