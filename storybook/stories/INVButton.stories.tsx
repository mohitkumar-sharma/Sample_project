import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { INVButton } from '../../app/components';
import config from '../../app/config';
import { StyleSheet } from 'react-native';

storiesOf('INVButton', module)
  .add('Default', () => <INVButton />)
  .add('With text', () => <INVButton buttonText={config.strings.GO_TO_HOME} />)
  .add('With onPress function', () => (
    <INVButton
      buttonText={config.strings.GO_TO_HOME}
      onPress={action('Go To Home button pressed')}
    />
  ))
  .add('With custom styling', () => (
    <INVButton
      buttonText={config.strings.GO_TO_HOME}
      onPress={action('Go To Home button pressed')}
      containerStyle={styles.container}
      buttonTextStyle={styles.buttonText}
    />
  ));

const styles = StyleSheet.create({
  container: { backgroundColor: config.colors.themeLightBlack, marginHorizontal: 40 },
  buttonText: { fontSize: 18, fontWeight: config.fontWeights.FONT_WEIGHT_MEDIUM },
});
