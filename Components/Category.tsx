/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import DirectionCard from './DirectionCard';
import Geolocation from '@react-native-community/geolocation';

const Category = () => {
  const [hospitalData, setHospitalData] = useState<any>({results: []});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
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
    <View style={styles.mainCategory}>
      <View style={styles.box}>
        <Text style={styles.titleText}>Your Perfect Finding ways</Text>
      </View>
      <View style={styles.subConatiner}>
        <View style={styles.subBox}>
          <View style={styles.subBoxTwo}>
            <Image
              source={require('../assets/10613398_10130-ai.png')}
              style={styles.mainImg}
            />
          </View>
          <Text style={styles.subBoxText}>Find your hospitals</Text>
        </View>
        <View style={styles.subBox}>
          <View style={styles.subBoxTwo}>
            <Image
              source={require('../assets/4387754_2328234-ai.png')}
              style={styles.mainImg}
            />
          </View>
          <Text style={styles.subBoxText}>Find hospitals</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.titleText}>Near You</Text>
      </View>
      <ScrollView>
        {hospitalData.results.map((hospital, index) => (
          <DirectionCard
            key={index}
            name={hospital.name}
            address={hospital.vicinity}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCategory: {
    width: '100%',
  },
  box: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  subConatiner: {
    width: '100%',

    flexDirection: 'row',
  },
  subBox: {
    width: '50%',
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  subBoxTwo: {
    width: '100%',
    height: 160,
    backgroundColor: '#dae4f4',
    borderRadius: 20,
    padding: 20,
  },
  mainImg: {
    width: '100%',
    height: '100%',
  },
  subBoxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  backText: {
    width: '100%',
    height: 40,
    backgroundColor: '#dae4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCatContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 13,
  },
  catBox: {
    width: '100%',
    height: 155,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
  },
  hosLogo: {
    width: 60,
    height: 60,
  },
  leftbox: {
    width: '20%',
    height: 155,
    padding: 10,
  },
  middlebox: {
    width: '80%',
    height: 130,
  },
  boxhead: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  boxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  boxmiddle: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
  boxbottom: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttomOne: {
    height: 40,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 4,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttomTwo: {
    height: 40,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 4,
    borderColor: '#0057e7',
    borderWidth: 1,
    backgroundColor: '#0057e7',
  },
  buttontext: {
    color: '#0057e7',
  },
});

export default Category;
