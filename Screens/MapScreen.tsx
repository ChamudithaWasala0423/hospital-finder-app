/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MenuBar from '../Components/MenuBar';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MenuBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default MapScreen;
