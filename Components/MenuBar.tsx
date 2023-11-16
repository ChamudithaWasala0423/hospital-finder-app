/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    bottom: 0,
  },
  subContainer: {
    width: '100%',
    height: 80,
    backgroundColor: 'blue',
  },
});

export default MenuBar;
