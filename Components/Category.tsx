/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import DirectionCard from './DirectionCard';

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
        <Text style={styles.titleText}>Near You</Text>
      </View>
      <ScrollView>
        <DirectionCard />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCategory: {
    width: '100%',
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
  subConatiner: {
    width: '100%',

    flexDirection: 'row',
  },
  subBox: {
    width: '50%',
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  subBoxTwo: {
    width: '100%',
    height: 160,
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

export default Category;
