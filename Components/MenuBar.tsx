/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import SparklesIcon from 'react-native-heroicons/solid';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <SparklesIcon size={30} color="white" />
      </View>
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
