import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PrivacyModalProps {
    visible: boolean;
    onClose: () => void;
  }

const Privacy: React.FC<PrivacyModalProps> = ({ visible, onClose }) => {
    
    return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.notiText}>Privacy Policy</Text>
          <Text style={styles.titleText}>
            We collect and store voluntary medical and location data for improving healthcare experiences.

            Standard measures are in place for data protection, though absolute security cannot be guaranteed.
            You can access, correct, or delete your data through App settings.
          </Text>
          <Text style={styles.titleText}>
          For questions, contact us at 0111122334
          </Text>
         
        
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
        fontSize: 15,
        marginTop:5
      },
  });
export default Privacy;