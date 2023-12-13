/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ProgressBarAndroid,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkInternetConnection = async () => {
      const netInfoState = await NetInfo.fetch();
      setIsConnected(netInfoState.isConnected);
    };

    checkInternetConnection();

    const timeout = setTimeout(() => {
      if (isConnected) {
        navigation.navigate('Login');
      } else {
        Alert.alert(
          'No Internet Connection',
          'Please check your internet connection and try again.',
          [
            {
              text: 'OK',
              onPress: () => {
                checkInternetConnection();
              },
            },
          ],
        );
      }
    }, 4000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [isConnected, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconBackground}>
          <Image source={require('../assets/send.png')} style={styles.image} />
        </View>
        <Text style={styles.textStyle}>Hospital Finder</Text>
        <ProgressBarAndroid color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0057e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Splash;
