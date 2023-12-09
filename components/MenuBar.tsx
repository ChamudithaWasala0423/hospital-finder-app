/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
  MapIcon,
} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';

const MenuBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const getIconColor = (screenName: string) => {
    return route.name === screenName ? '#00f' : '#747474'; // Use your desired colors
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}>
          <HomeIcon size={25} color={getIconColor('Home')} />
          <Text style={{...styles.menuText, color: getIconColor('Home')}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('HospitalList')}>
          <ListBulletIcon size={25} color={getIconColor('HospitalList')} />
          <Text
            style={{...styles.menuText, color: getIconColor('HospitalList')}}>
            Hospital
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('MapScreen')}>
          <MapIcon size={25} color={getIconColor('MapScreen')} />
          <Text style={{...styles.menuText, color: getIconColor('MapScreen')}}>
            Map
          </Text>
        </TouchableOpacity>
        <View style={styles.icon}>
          <Cog8ToothIcon size={25} color={getIconColor('Settings')} />
          <Text style={{...styles.menuText, color: getIconColor('Settings')}}>
            Setting
          </Text>
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
