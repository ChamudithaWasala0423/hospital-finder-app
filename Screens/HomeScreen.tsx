/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native';;
import React, {useEffect} from 'react';
import MenuBar from '../Components/MenuBar';

const HomeScreen: React.FC = () =>{
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar />
      <View style={styles.buttonContainer}>
        <Button title="Go to Settings" onPress={() => navigation.navigate('SettingScreen')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
