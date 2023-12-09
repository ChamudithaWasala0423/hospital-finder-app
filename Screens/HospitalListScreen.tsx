/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBox from '../Components/SearchBox';
import MenuBar from '../Components/MenuBar';
import CardList from '../Components/CardList';
import Geolocation from '@react-native-community/geolocation';
// import MenuBarTwo from '../Components/MenuBarTwo';

const HospitalListScreen = () => {
  const [hospitalData, setHospitalData] = useState<any>({results: []});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        fetchData(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    const fetchData = async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=AIzaSyBdxo_ZkkvAh8BlbI7W9AZBFoMvZY8Evp8`,
        );
        const data = await response.json();
        setHospitalData(data);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      }
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.heraderText}>List of Hospitals</Text>
        </View>
        <SearchBox />
        {/* <MenuBarTwo /> */}
      </View>
      <ScrollView>
        {hospitalData.results.map(
          (
            hospital: {name: string; icon: string},
            index: React.Key | null | undefined,
          ) => (
            <CardList key={index} name={hospital.name} logo={hospital.icon} />
          ),
        )}
      </ScrollView>
      <MenuBar />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  header: {
    width: '100%',
  },
  subHeader: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heraderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default HospitalListScreen;
