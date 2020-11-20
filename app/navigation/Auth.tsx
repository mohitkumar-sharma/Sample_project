import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { Welcome } from '../screens';

const Stack = createStackNavigator();

const Auth = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={() => {
      return {
        headerStyle: { backgroundColor: config.colors.appTheme },
        headerTintColor: config.colors.white,
        headerTitleStyle: {
          color: config.colors.white,
          alignSelf: 'center',
        },
        headerBackTitle: 'Back',
      };
    }}>
    <Stack.Screen name={config.routes.WELCOME} component={Welcome} options={{ title: 'Welcome' }} />
  </Stack.Navigator>
);

export default Auth;
