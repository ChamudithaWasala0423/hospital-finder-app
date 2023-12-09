/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AdjustmentsVerticalIcon} from 'react-native-heroicons/outline';
import SearchNow from '../Components/SearchNow';
import DirectionCard from '../Components/DirectionCard';
import Geolocation from '@react-native-community/geolocation';

const DirectionScreen = () => {
  const [hospitalData, setHospitalData] = useState<any>({results: []});
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);

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

        const detailsPromises = data.results.map(async (hospital: any) => {
          const detailsResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${hospital.place_id}&key=AIzaSyBdxo_ZkkvAh8BlbI7W9AZBFoMvZY8Evp8`,
          );
          const detailsData = await detailsResponse.json();

          const phone = detailsData.result.formatted_phone_number;
          return {
            ...hospital,
            phone: phone,
          };
        });

        const hospitalsWithPhone = await Promise.all(detailsPromises);
        setHospitalData({results: hospitalsWithPhone});
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchNow />
      <View style={styles.header}>
        <View style={styles.subBox}>
          <View style={styles.box}>
            <AdjustmentsVerticalIcon size={25} color="#0057e7" />
          </View>
          <TouchableOpacity
            style={[
              styles.boxOne,
              isOpenNow && {backgroundColor: '#0057e7', borderColor: '#0057e7'},
            ]}
            onPress={() => setIsOpenNow(!isOpenNow)}>
            <Text style={[styles.boxText, isOpenNow && {color: 'white'}]}>
              Open Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.headerText}>Results</Text>
      </View>
      <ScrollView>
        {hospitalData.results
          .filter(
            (hospital: any) =>
              hospital.types[0].includes('hospital') &&
              (isOpenNow ? hospital.opening_hours?.open_now : true),
          )
          .map((hospital: any, index: React.Key | null | undefined) => (
            <DirectionCard
              key={index}
              name={hospital.name}
              address={hospital.vicinity}
              type={hospital.types[0]}
              hospitalPhone={hospital.phone}
              openingHours={hospital.opening_hours}
              logo={hospital.icon}
              latitude={hospital.geometry.location.lat}
              longitude={hospital.geometry.location.lng}
            />
          ))}
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
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subBox: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  box: {
    width: '20%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOne: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 8,
    marginTop: 0,
  },
  boxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0057e7',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
  },
});

export default DirectionScreen;
