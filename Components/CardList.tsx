/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const CardList = () => {
  return (
    <View style={styles.box}>
      <View style={styles.subBox}>
        <View style={styles.leftBox}>
          <Image
            source={require('../assets/Lanka_Hospitals_logo.png')}
            style={styles.hosLogo}
          />
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.heraderText}>Lanka Hospital</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heraderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    width: '100%',
    height: 120,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  subBox: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
  },
  leftBox: {
    width: '40%',
    height: 100,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hosLogo: {
    width: 70,
    height: 70,
  },
  rightBox: {
    width: '50%',
    height: 100,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardList;
