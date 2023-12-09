
/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import HospitalListScreen from './Screens/HospitalListScreen';
import {NavigationContainer} from '@react-navigation/native';
import MapScreen from './Screens/MapScreen';
import DirectionScreen from './Screens/DirectionScreen';
import FindHopsitalScreen from './Screens/FindHospitalScreen';
import {create} from 'react-test-renderer';
import {ScreenStackHeaderConfig} from 'react-native-screens';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
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


import { initializeApp } from "firebase/app";

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


function App(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="HospitalList"
          component={HospitalListScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="Direction"
          component={DirectionScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="FindGospital"
          component={FindHopsitalScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
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
}


export default App;
