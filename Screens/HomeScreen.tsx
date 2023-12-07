/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native';;
import React, {useEffect} from 'react';
import MenuBar from '../components/MenuBar';

const HomeScreen: React.FC = () =>{
  const navigation = useNavigation();
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
