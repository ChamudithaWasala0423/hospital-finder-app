import React, { useState, useEffect } from 'react';
import {Text, View,Button,TouchableOpacity} from 'react-native';
import Country from './pop_upScreen/country';
import Language from './pop_upScreen/language';
import Notification from './pop_upScreen/notification';
import Privacy from './pop_upScreen/privacy';
import Terms from './pop_upScreen/terms';
import Rate from './pop_upScreen/rate';

const App: React.FC = () => {
  //comment country pop up screen
  /*const [modalVisible, setModalVisible] = useState(false);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return(
    <View>
      
      <Button title=" Country " onPress={handleToggleModal} />
      <Country visible={modalVisible} onClose={handleToggleModal} />
      
    </View>
  );*/

  /*const [termsVisible, setTermsVisible] = useState(false);

  const handleOpenTerms = () => {
    setTermsVisible(true);
  };

  const handleCloseTerms = () => {
    setTermsVisible(false);
  };

  return(
    <View>
     <Button title="Show Terms" onPress={handleOpenTerms} />

    <Terms visible={termsVisible} onClose={handleCloseTerms} />
    </View>


  );
};*/
/*const [privacyVisible, setPrivacyVisible] = useState(false);

  const handleOpenPrivacy = () => {
    setPrivacyVisible(true);
  };

  const handleClosePrivacy = () => {
    setPrivacyVisible(false);
  };

  return (
    <View>
      <Button title="Privacy Policy" onPress={handleOpenPrivacy} />

      <Privacy visible={privacyVisible} onClose={handleClosePrivacy} />
    </View>
  );
};*/
const [rateVisible, setRateVisible] = useState(false);

  const handleOpenRate= () => {
    setRateVisible(true);
  };

  const handleCloseRate = () => {
    setRateVisible(false);
  };

  return (
    <View>
      <Button title="Rate Us" onPress={handleOpenRate} />

      <Rate visible={rateVisible} onClose={handleCloseRate} />
    </View>
  );
};


export default App;
