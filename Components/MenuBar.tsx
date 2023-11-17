/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
  MapIcon,
} from 'react-native-heroicons/outline';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.icon}>
          <HomeIcon size={30} color="black" />
          <Text style={styles.menuText}>Home</Text>
        </View>
        <View style={styles.icon}>
          <ListBulletIcon size={30} color="black" />
          <Text style={styles.menuText}>Hospital</Text>
        </View>
        <View style={styles.icon}>
          <MapIcon size={30} color="black" />
          <Text style={styles.menuText}>Map</Text>
        </View>
        <View style={styles.icon}>
          <Cog8ToothIcon size={30} color="black" />
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
    color: 'black',
  },
});

export default MenuBar;
