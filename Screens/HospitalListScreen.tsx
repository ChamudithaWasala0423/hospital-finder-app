/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import SearchBox from '../Components/SearchBox';
import MenuBar from '../Components/MenuBar';

const HospitalListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.heraderText}>List of Hospitals</Text>
        </View>
        <SearchBox />
      </View>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <View style={styles.leftBox}>
              <Image
                source={require('../assets/Lanka_Hospitals_logo.png')}
                style={styles.hosLogo}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.heraderText}>Lanka Hospital</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <MenuBar />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
  },
  header: {
    width: '100%',
  },
  subHeader: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heraderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    width: '100%',
    height: 120,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  subBox: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
  },
  leftBox: {
    width: '40%',
    height: 100,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hosLogo: {
    width: 70,
    height: 70,
  },
  rightBox: {
    width: '50%',
    height: 100,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HospitalListScreen;
