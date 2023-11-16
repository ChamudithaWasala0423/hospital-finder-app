/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import MenuBar from '../Components/MenuBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
