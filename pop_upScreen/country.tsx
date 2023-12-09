import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { getCountryNames } from './countryService';

interface CountryModalProps {
    visible: boolean;
    onClose: () => void;
  }

const Country: React.FC<CountryModalProps> = ({ visible, onClose }) => {
  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    fetchCountryNames();
  }, []);

  const fetchCountryNames = async () => {
    try {
      const names = await getCountryNames();
      setCountryNames(names);
    } catch (error) {
      console.error('Error fetching country names:', error);
    }
  };
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };
    
    return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.countryText}>Country</Text>
          <ScrollView style={styles.countryList}>
          {countryNames.map((name) => (
            <TouchableOpacity
            key={name}
            style={[
              styles.countryItem,
              selectedCountry === name && styles.selectedCountry,
            ]}
            onPress={() => handleCountrySelect(name)}
          >
            <Text style={styles.countryItemText}>{name}</Text>
          </TouchableOpacity>


            
          ))}
          </ScrollView>
        
          <TouchableOpacity  style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closetext}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    );

        

};
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
     
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      width:"80%",
      height:"75%",

    },
    closeButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
    countryText:{
        fontSize:25,
        color:'#000000',
        fontWeight:'bold'
    },
    closetext:{
        fontSize:15,
        color:'#000000'
    },
    titleContainer: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginTop:30,
        //borderColor:'#000000',
        //borderWidth:2
      },
      titleText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      countryList: {
        maxHeight: '70%', // Adjust the max height as needed
      },
      countryItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      countryItemText: {
        fontSize: 16,
        color: '#000000',
      },
      selectedCountry: {
        backgroundColor: '#e0e0e0',
      },
  });
export default Country;