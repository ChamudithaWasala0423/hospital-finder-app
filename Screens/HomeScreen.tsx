/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import MenuBar from '../Components/MenuBar';
import {BookmarkIcon} from 'react-native-heroicons/solid';
import Category from '../Components/Category';
import SearchBox from '../Components/SearchBox';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.subHeader}>
          <View style={styles.box}>
            <View style={styles.profileImg}>
              <Text style={styles.profileText}>M</Text>
            </View>
          </View>
          <View style={styles.boxTwo}>
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.nameText}>Marques brownlee</Text>
          </View>
          <View style={styles.box}>
            <BookmarkIcon size={25} color="#0057e7" />
          </View>
        </View>
        <SearchBox />
        <Category />
      </View>

      <MenuBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  headerContainer: {
    width: '100%',
    height: 240,
  },
  subHeader: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  box: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#0057e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  helloText: {
    fontSize: 15,
    color: '#0057e7',
  },
  boxTwo: {
    height: 80,
    justifyContent: 'center',
    marginRight: 80,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
