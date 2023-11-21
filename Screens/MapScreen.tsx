/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MenuBar from '../Components/MenuBar';
import SearchBox from '../Components/SearchBox';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen = () => {
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
});
export default MapScreen;
