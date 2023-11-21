/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import SearchBox from '../Components/SearchBox';
import MenuBar from '../Components/MenuBar';
import CardList from '../Components/CardList';

const HospitalListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.heraderText}>List of Hospitals</Text>
        </View>
        <SearchBox />
      </View>
      <ScrollView>
        <CardList />
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default HospitalListScreen;
