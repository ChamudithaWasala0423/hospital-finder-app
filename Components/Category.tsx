/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  BookmarkIcon,
  ShareIcon,
} from 'react-native-heroicons/solid';

const Category = () => {
  return (
    <View style={styles.mainCategory}>
      <View style={styles.box}>
        <Text style={styles.titleText}>Your Perfect Finding ways</Text>
      </View>
      <View style={styles.subConatiner}>
        <View style={styles.subBox}>
          <View style={styles.subBoxTwo}>
            <Image
              source={require('../assets/10613398_10130-ai.png')}
              style={styles.mainImg}
            />
          </View>
          <Text style={styles.subBoxText}>Find your hospitals</Text>
        </View>
        <View style={styles.subBox}>
          <View style={styles.subBoxTwo}>
            <Image
              source={require('../assets/4387754_2328234-ai.png')}
              style={styles.mainImg}
            />
          </View>
          <Text style={styles.subBoxText}>Find hospitals</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.titleTextTwo}>Near You</Text>
      </View>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCategory: {
    width: '100%',
    height: 700,
  },
  box: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  titleTextTwo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
  },
  subConatiner: {
    width: '100%',
    height: 190,
    flexDirection: 'row',
  },
  subBox: {
    width: '50%',
    height: 190,
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  subBoxTwo: {
    width: '100%',
    height: 190,
    backgroundColor: '#dae4f4',
    borderRadius: 20,
    padding: 20,
  },
  mainImg: {
    width: '100%',
    height: '100%',
  },
  subBoxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  backText: {
    width: '100%',
    height: 40,
    backgroundColor: '#dae4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCatContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  catBox: {
    width: '100%',
    height: 155,
    backgroundColor: 'white',
    marginTop: 10,
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

export default Category;