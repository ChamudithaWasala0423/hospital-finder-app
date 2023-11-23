/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import MenuBar from '../Components/MenuBar';
import SearchBox from '../Components/SearchBox';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {ListBulletIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const MapScreen = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Get current location
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

        // Fetch nearby hospitals using Google Places API
        const apiKey = 'AIzaSyBdxo_ZkkvAh8BlbI7W9AZBFoMvZY8Evp8';
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${apiKey}`;

        axios
          .get(apiUrl)
          .then(response => {
            setHospitals(response.data.results);
          })
          .catch(error => {
            console.error(error);
          });
      },
      error => console.error(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.heraderText}>Map</Text>
        </View>
        <SearchBox />
      </View>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={region}>
        {hospitals.map(hospital => (
          <Marker
            key={hospital.place_id}
            coordinate={{
              latitude: hospital.geometry.location.lat,
              longitude: hospital.geometry.location.lng,
            }}
            title={hospital.name}
            description={hospital.vicinity}
          />
        ))}
      </MapView>
      <View style={styles.bottomButton}>
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
  },
  bottomSub: {
    width: '35%',
    height: 50,
    backgroundColor: '#0057e7',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  bottomText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default MapScreen;
