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
// import {enableLatestRenderer} from 'react-native-maps';

// enableLatestRenderer();

function App(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
