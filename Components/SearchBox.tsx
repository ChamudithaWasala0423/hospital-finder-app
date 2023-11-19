/* eslint-disable prettier/prettier */
import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {MicrophoneIcon} from 'react-native-heroicons/solid';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

const SearchBox = () => {
  return (
    <View style={styles.subHeaderContainer}>
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchBox}>
          <MagnifyingGlassIcon size={20} color="#747474" />
        </View>
        <View style={styles.searchBoxTwo}>
          <TextInput
            placeholder="Search for Hospital"
            placeholderTextColor={'#747474'}
            style={styles.searchText}
          />
        </View>
        <View style={styles.searchBoxThree}>
          <MicrophoneIcon size={20} color="#0057e7" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 15,
    color: 'black',
  },
});

export default SearchBox;
