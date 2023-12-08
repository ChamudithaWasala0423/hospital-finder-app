import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RateModalProps {
    visible: boolean;
    onClose: () => void;
  }

const Rate: React.FC<RateModalProps> = ({ visible, onClose }) => {
    
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
      height:"40%",

    },
    closeButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
    notiText:{
        fontSize:25,
        color:'#000000',
        fontWeight:'bold'
    },
    closetext:{
        fontSize:15,
        color:'#000000'
    },
   
  });
export default Rate;