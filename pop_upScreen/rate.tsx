import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RateModalProps {
    visible: boolean;
    onClose: () => void;
  }

const Rate: React.FC<RateModalProps> = ({ visible, onClose }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating: number) => {
    // You can send the rating to your backend or handle it as needed
    console.log('User rated:', selectedRating);
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRating(i)}
          activeOpacity={0.7}
        >
          <Text style={i <= rating ? styles.starFilled : styles.starOutline}>
            ★
          </Text>
        </TouchableOpacity>
      );
    }

    return stars;
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
          <Text style={styles.notiText}>Rate Us</Text>

          <View style={styles.ratingContainer}>{renderStars()}</View>
         
        
          <TouchableOpacity  style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closetext}>Ok</Text>
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
      height:"40%",

    },
    closeButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
    notiText:{
        fontSize:25,
        color:'#0057E7',
        fontWeight:'bold'
    },
    closetext:{
        fontSize:15,
        color:'#000000',
        fontWeight:'bold'
    },
    starFilled: {
      fontSize: 30,
      color: 'gold',
    },
    starOutline: {
      fontSize: 30,
      color: 'gray',
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
   
  });
export default Rate;