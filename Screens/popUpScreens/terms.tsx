import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TermsModalProps {
    visible: boolean;
    onClose: () => void;
  }

const Terms: React.FC<TermsModalProps> = ({ visible, onClose }) => {
    
    return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.notiText}>Terms of use</Text>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome</Text>
            <Text style={styles.termsText}>
              Thank you for using our  Hospital Finder
              App. By using the app, you agree to these simple terms.
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Using the App</Text>
            <Text style={styles.termsText}>
              This app is for finding nearby
              healthcare facilities. Please use it responsibly for your
              healthcare needs.
            </Text>
          </View>
         
        
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
    titleContainer: {
      //backgroundColor: '#e0e0e0',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      marginTop: 30,
    },
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop:5,
      color:'#000000'
    },
    termsText:{
      fontSize:15,
      //color:'#000000',
      marginTop:10,
    }
    
  });
export default Terms;