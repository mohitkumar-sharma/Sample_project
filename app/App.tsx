import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import StorybookUIRoot from '../storybook';
import RootNavigator from './navigation';
import config from './config';
import { StatusBar } from 'react-native';
import { getDeviceInfo } from './native';

const App = (): JSX.Element => {
  /* useEffect hook called when getDeviceInfo runs */
  useEffect(() => {
    getDeviceInfo();
  }, []);

  /* storybookEnabled to be set in localConfig.js */
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }
  return (
    <Provider store={config.store}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
