import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { Home, Settings } from '../screens';
import { StyleSheet } from 'react-native';
import { HeaderPressableText } from '../components';

export type MainStackParamList = {
  /* params to be passed to home screen if any otherwise undefined*/
  Home: undefined;
  /* params to be passed to settings screen if any otherwise undefined*/
  Settings: undefined;
};

interface MainNavigationProps {
  /* as a string of user name for showing name of user on header*/
  userName?: string;
}

const Stack = createStackNavigator();

const Main = ({ userName }: MainNavigationProps): JSX.Element => {
  const getHeaderRightComponent = () => (
    <HeaderPressableText
      text={userName}
      containerStyle={styles.container}
      textStyle={styles.text}
    />
  );

  return (
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
      <Stack.Screen
        name={config.routes.HOME}
        component={Home}
        options={{ title: 'Home', headerRight: () => getHeaderRightComponent() }}
      />
      <Stack.Screen
        name={config.routes.SETTINGS}
        component={Settings}
        options={{ title: 'Settings', headerRight: () => getHeaderRightComponent() }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-end', paddingHorizontal: 10 },
  text: { color: config.colors.white },
});

export default Main;
