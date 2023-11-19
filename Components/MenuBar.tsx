/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
  MapIcon,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const MenuBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.icon}>
          <HomeIcon size={25} color="#747474" />
          <Text style={styles.menuText}>Home</Text>
        </View>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('HospitalList')}>
          <ListBulletIcon size={25} color="#747474" />
          <Text style={styles.menuText}>Hospital</Text>
        </TouchableOpacity>
        <View style={styles.icon}>
          <MapIcon size={25} color="#747474" />
          <Text style={styles.menuText}>Map</Text>
        </View>
        <View style={styles.icon}>
          <Cog8ToothIcon size={25} color="#747474" />
          <Text style={styles.menuText}>Setting</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    backgroundColor: '#f2f4f5',
  },
  subContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 30,
  },
  icon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 11,
    color: '#747474',
    fontWeight: 'bold',
  },
});

export default MenuBar;
