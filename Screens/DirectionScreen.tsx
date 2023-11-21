/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {AdjustmentsVerticalIcon} from 'react-native-heroicons/outline';
import SearchNow from '../Components/SearchNow';

const DirectionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchNow />
      <View style={styles.header}>
        <View style={styles.subBox}>
          <View style={styles.box}>
            <AdjustmentsVerticalIcon size={25} color="#0057e7" />
          </View>
          <View style={styles.boxOne}>
            <Text style={styles.boxText}>Near by you</Text>
          </View>
          <View style={styles.boxOne}>
            <Text style={styles.boxText}>Open Now</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.headerText}>Results</Text>
      </View>
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
