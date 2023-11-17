/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {TagIcon} from 'react-native-heroicons/solid';

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
        </View>
        <View style={styles.subBox}>
          <View style={styles.subBoxTwo}>
            <Image
              source={require('../assets/4387754_2328234-ai.png')}
              style={styles.mainImg}
            />
          </View>
          {/* <Text style={styles.subBoxText}>Find hospitals\ Pharmacies</Text> */}
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.titleText}>Near You</Text>
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
                <Text>Lanka Hospital</Text>
                <TagIcon size={20} color="black" />
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
    height: 130,
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
    height: 130,
    backgroundColor: 'red',
    padding: 10,
  },
  middlebox: {
    width: '80%',
    height: 130,
    backgroundColor: 'blue',
  },
  boxhead: {
    width: '100%',
    height: 40,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Category;
