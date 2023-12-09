import React, { useState, useEffect } from 'react';
import {Text, View,Button} from 'react-native';
import Country from './pop_upScreen/country';
import Language from './pop_upScreen/language';
import Notification from './pop_upScreen/notification';
import Privacy from './pop_upScreen/privacy';
import Terms from './pop_upScreen/terms';
import Rate from './pop_upScreen/rate';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return(
    <View>
      <Button title=" Country " onPress={handleToggleModal} />
      <Country visible={modalVisible} onClose={handleToggleModal} />
    </View>
  );
};
export default App;
