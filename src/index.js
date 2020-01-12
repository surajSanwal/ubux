import React from 'react';
import {View, Text} from 'react-native';
import SafeView from './components/common/SafeView';

const App = () => {
  return (
    <SafeView>
      <View>
        <Text>App</Text>
      </View>
    </SafeView>
  );
};

export default App;
