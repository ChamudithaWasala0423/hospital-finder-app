/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import MenuBar from '../Components/MenuBar';
import {TagIcon, MicrophoneIcon} from 'react-native-heroicons/solid';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.subHeader}>
          <View style={styles.box}>
            <View style={styles.profileImg}>
              <Text style={styles.profileText}>R</Text>
            </View>
          </View>
          <View style={styles.boxTwo}>
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.nameText}>Marques brownlee</Text>
          </View>
          <View style={styles.box}>
            <TagIcon size={30} color="#0057e7" />
          </View>
        </View>
        <View style={styles.subHeaderContainer}>
          <View style={styles.searchBoxContainer}>
            <View style={styles.searchBox}>
              <MagnifyingGlassIcon size={20} color="#000" />
            </View>
            <View style={styles.searchBoxTwo}>
              <TextInput
                placeholder="Search for Hospital"
                placeholderTextColor={'black'}
                style={styles.searchText}
              />
            </View>
            <View style={styles.searchBoxThree}>
              <MicrophoneIcon size={20} color="#0057e7" />
            </View>
          </View>
        </View>
        <View style={styles.mainCategory}></View>
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
    height: 150,
    backgroundColor: 'red',
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
  subHeaderContainer: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  searchBoxContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchBox: {
    width: '20%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBoxTwo: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBoxThree: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchText: {
    fontSize: 14,
    color: 'black',
  },
  mainCategory: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
