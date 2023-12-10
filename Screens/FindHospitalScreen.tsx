/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardList from '../Components/CardList';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {ArrowSmallLeftIcon} from 'react-native-heroicons/outline';

const FindHopsitalScreen = () => {
  const [hospitalData, setHospitalData] = useState<any>({results: []});
  const navigation = useNavigation();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
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
        <TouchableOpacity style={styles.boxOne} onPress={navigation.goBack}>
          <ArrowSmallLeftIcon size={25} color="#747474" />
        </TouchableOpacity>
        <View style={styles.boxTwo}>
          <Text style={styles.heraderText}>Find Your Hospital</Text>
        </View>
      </View>
      <View>
        <Text style={styles.resultText}>Select Your Hospital</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    padding: 20,
  },
  boxOne: {
    width: '10%',
    alignItems: 'center',
  },
  boxTwo: {
    width: '90%',
    alignItems: 'center',
  },
  heraderText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
  },
  resultText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
  },
});
export default FindHopsitalScreen;
