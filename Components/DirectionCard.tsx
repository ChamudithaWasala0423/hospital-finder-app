/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  BookmarkIcon,
  ShareIcon,
} from 'react-native-heroicons/solid';

const DirectionCard = () => {
  return (
    <>
      <View style={styles.subCatContainer}>
        <View style={styles.catBox}>
          <View style={styles.leftbox}>
            <Image
              source={require('../assets/Lanka_Hospitals_logo.png')}
              style={styles.hosLogo}
            />
          </View>
          <View style={styles.middlebox}>
            <View style={styles.boxhead}>
              <Text style={styles.boxText}>Lanka Hospital</Text>
              <BookmarkIcon size={20} color="#0057e7" />
            </View>
            <View style={styles.boxmiddle}>
              <Text>Hospital</Text>
              <Text>171 1/1, Nawala Road, Nugegoda, Sri Lanka. </Text>
            </View>
            <View style={styles.boxbottom}>
              <View style={styles.buttomOne}>
                <PhoneIcon size={20} color="#0057e7" />
                <Text style={styles.buttontext}>Call</Text>
              </View>
              <View style={styles.buttomTwo}>
                <MapPinIcon size={20} color="#fff" />
                <Text style={{color: '#fff'}}>Direction</Text>
              </View>
              <View style={styles.buttomOne}>
                <ShareIcon size={20} color="#0057e7" />
                <Text style={styles.buttontext}>Share</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subCatContainer}>
        <View style={styles.catBox}>
          <View style={styles.leftbox}>
            <Image
              source={require('../assets/Lanka_Hospitals_logo.png')}
              style={styles.hosLogo}
            />
          </View>
          <View style={styles.middlebox}>
            <View style={styles.boxhead}>
              <Text style={styles.boxText}>Lanka Hospital</Text>
              <BookmarkIcon size={20} color="#0057e7" />
            </View>
            <View style={styles.boxmiddle}>
              <Text>Hospital</Text>
              <Text>171 1/1, Nawala Road, Nugegoda, Sri Lanka. </Text>
            </View>
            <View style={styles.boxbottom}>
              <View style={styles.buttomOne}>
                <PhoneIcon size={20} color="#0057e7" />
                <Text style={styles.buttontext}>Call</Text>
              </View>
              <View style={styles.buttomTwo}>
                <MapPinIcon size={20} color="#fff" />
                <Text style={{color: '#fff'}}>Direction</Text>
              </View>
              <View style={styles.buttomOne}>
                <ShareIcon size={20} color="#0057e7" />
                <Text style={styles.buttontext}>Share</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
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
    width: 60,
    height: 60,
  },
  leftbox: {
    width: '20%',
    height: 155,
    padding: 10,
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
    justifyContent: 'space-between',
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
});

export default DirectionCard;
