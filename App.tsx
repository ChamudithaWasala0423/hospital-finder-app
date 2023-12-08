//App.tsx
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {create} from 'react-test-renderer';
import {ScreenStackHeaderConfig} from 'react-native-screens';


import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import HomeScreen from './Screens/HomeScreen';
import PhoneVerification from './Screens/PhoneVerification';
import EditProfileScreen from './Screens/EditProfileScreen';
import ViewProfileScreen from './Screens/ViewProfileScreen';
import SettingScreen from './Screens/SettingScreen';
import PhoneAuth from './Screens/PhoneAuth';
import ChangePassword from './Screens/ChangePassword';

import 'firebase/auth'
import { AppRegistry } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import { name as appName } from './app.json';


GoogleSignin.configure({
  webClientId: '783626717400-0dfelvklt2pgss487v017utp23eg1ek6.apps.googleusercontent.com',
});
AppRegistry.registerComponent(appName, () => App);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIMt3eNhwh7fRl32lfd7KAhOeKA89aiyk",
  authDomain: "hospital-finder-b891c.firebaseapp.com",
  projectId: "hospital-finder-b891c",
  storageBucket: "hospital-finder-b891c.appspot.com",
  messagingSenderId: "783626717400",
  appId: "1:783626717400:web:f44656fe45e7769d2b6fad",
  measurementId: "G-GJNFRZF0JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const App = () => {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{animation: 'slide_from_right'}}
        />
       <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{animation: 'slide_from_right'}}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'slide_from_right'}}
        />
          <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{animation: 'slide_from_right'}}
        /><Stack.Screen
          name="PhoneVerification"
          component={PhoneVerification}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
        name="ViewProfileScreen"
        component={ViewProfileScreen}
        options={{animation: 'slide_from_right'}}
       />
       <Stack.Screen
       name="SettingScreen"
       component={SettingScreen}
       options={{animation: 'slide_from_right'}}
      />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
