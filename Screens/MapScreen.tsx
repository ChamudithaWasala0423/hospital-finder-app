/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import MenuBar from '../Components/MenuBar';
import SearchBox from '../Components/SearchBox';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {ListBulletIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Hospital Finder App Location Permission',
          message:
            'Hospital Finder App needs access to your location ' +
            'so you can get hospital finding services.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLoaction = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.heraderText}>Map</Text>
        </View>
        <SearchBox />
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 7.481917,
          longitude: 80.360423,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{
            latitude: 7.481917, //resturant.lat
            longitude: 80.360423, //resturant.long
          }}
          title="Origin"
          description="This is the origin"
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <View style={styles.bottomButton}>
        <TouchableOpacity
          style={styles.bottomSub}
          onPress={() => getLoaction()}>
          <Text style={styles.bottomText}>Get Current Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomSub}
          onPress={() => navigation.navigate('Direction')}>
          <ListBulletIcon size={25} color="#fff" />
          <Text style={styles.bottomText}>View list</Text>
        </TouchableOpacity>
      </View>
      <MenuBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  header: {
    width: '100%',
    height: 150,
  },
  subHeader: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heraderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  map: {
    height: '80%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomButton: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -140,
    flexDirection: 'row',
  },
  bottomSub: {
    height: 50,
    backgroundColor: '#0057e7',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 10,
    margin: 10,
  },
  bottomText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default MapScreen;
