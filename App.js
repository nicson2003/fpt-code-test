import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import RootScreen from './src/screens/RootScreen';
import {Provider as PaperProvider} from 'react-native-paper';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);

const App = () => {
  return (
    <Provider store={store}>
      {/*add theme provider here */}
      <PaperProvider>
        <RootScreen />
      </PaperProvider>
    </Provider>
  );
};

export default App;
