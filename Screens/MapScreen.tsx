/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {ListBulletIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import SearchBox from '../Components/SearchBox';
import MenuBar from '../Components/MenuBar';

interface MarkerData {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  identifier: string;
  pinColor: string;
}

const MapScreen: React.FC = () => {
  const navigation = useNavigation();
  const [nearbyHospitals, setNearbyHospitals] = useState<MarkerData[]>([]);
  const [userLocation, setUserLocation] = useState<MarkerData | null>(null);

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
        getLoaction();
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
        const userLocationMarker: MarkerData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          title: 'My Location',
          description: 'This is my current location',
          identifier: 'myLocation',
          pinColor: '#FF5733', // You can choose your own color
        };
        setUserLocation(userLocationMarker);
        getNearbyHospitals(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const getNearbyHospitals = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=AIzaSyBdxo_ZkkvAh8BlbI7W9AZBFoMvZY8Evp8`,
      );

      const hospitals: MarkerData[] = response.data.results.map(
        (hospital: any) => ({
          latitude: hospital.geometry.location.lat,
          longitude: hospital.geometry.location.lng,
          title: hospital.name,
          description: hospital.vicinity,
          identifier: hospital.place_id,
          pinColor: '#0057e7',
        }),
      );

      setNearbyHospitals(hospitals);
    } catch (error) {
      console.error('Error fetching nearby hospitals:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>Map</Text>
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
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title={userLocation.title}
            description={userLocation.description}
            identifier={userLocation.identifier}
            pinColor={userLocation.pinColor}
          />
        )}

        {nearbyHospitals.map(marker => (
          <Marker
            key={marker.identifier}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            identifier={marker.identifier}
            pinColor={marker.pinColor}
          />
        ))}
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
  headerText: {
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
