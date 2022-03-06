import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import RootScreen from './src/screens/RootScreen';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);

const App = () => {
  return (
    <Provider store={store}>
      {/*add theme provider here */}
      <RootScreen />
    </Provider>
  );
};

export default App;
