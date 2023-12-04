/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  BookmarkIcon,
  ShareIcon,
} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface DirectionCardProps {
  name: string;
  address: string;
  hospitalPhone: string;
  logo: string;
  type: string[];
  openingHours: string;
  latitude: number;
  longitude: number;
}

const DirectionCard: React.FC<DirectionCardProps> = ({
  name,
  type,
  address,
  hospitalPhone,
  logo,
  openingHours,
  latitude,
  longitude,
}) => {
  const isOpenNow = openingHours;
  const navigation = useNavigation();

  const callHospital = () => {
    if (hospitalPhone) {
      const phoneNumber = `tel:${hospitalPhone}`;
      Linking.openURL(phoneNumber);
    }
  };

  const getDirectionsToHospital = () => {
    navigation.navigate('MapScreen', {location: {latitude, longitude}});
  };

  return (
    <View style={styles.subCatContainer}>
      <View style={styles.catBox}>
        <View style={styles.leftbox}>
          <Image source={{uri: logo}} style={styles.hosLogo} />
        </View>
        <View style={styles.middlebox}>
          <View style={styles.boxhead}>
            <Text style={styles.boxText}>{name}</Text>
            <BookmarkIcon size={20} color="#0057e7" />
          </View>
          <View style={styles.boxmiddle}>
            <View style={styles.subText}>
              <Text>{type}</Text>
              {isOpenNow ? (
                <Text style={{color: 'green', marginRight: 150}}>Open Now</Text>
              ) : (
                <Text style={{color: 'red', marginRight: 170}}>Closed</Text>
              )}
            </View>
            <Text>{address} </Text>
          </View>
          <View style={styles.boxbottom}>
            <TouchableOpacity style={styles.buttomOne} onPress={callHospital}>
              <PhoneIcon size={20} color="#0057e7" />
              <Text style={styles.buttontext}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttomTwo}
              onPress={getDirectionsToHospital}>
              <MapPinIcon size={20} color="#fff" />
              <Text style={{color: '#fff'}}>Direction</Text>
            </TouchableOpacity>
            {/* <View style={styles.buttomOne}>
              <ShareIcon size={20} color="#0057e7" />
              <Text style={styles.buttontext}>Share</Text>
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subCatContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 13,
  },
  catBox: {
    width: '100%',
    height: 155,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
  },
  hosLogo: {
    width: 40,
    height: 40,
  },
  leftbox: {
    width: '20%',
    height: 155,
    padding: 20,
  },
  middlebox: {
    width: '80%',
    height: 130,
  },
  boxhead: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  boxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  boxmiddle: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
  boxbottom: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
  },
  buttomOne: {
    height: 40,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 4,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttomTwo: {
    height: 40,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 4,
    borderColor: '#0057e7',
    borderWidth: 1,
    backgroundColor: '#0057e7',
  },
  buttontext: {
    color: '#0057e7',
  },
  subText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DirectionCard;
