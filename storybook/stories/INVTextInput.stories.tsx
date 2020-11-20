import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { INVTextInput } from '../../app/components';
import config from '../../app/config';
import { StyleSheet } from 'react-native';

storiesOf('INVTextInput', module)
  .add('Default', () => <INVTextInput />)
  .add('With placeholder text', () => (
    <INVTextInput placeholder={config.strings.WELCOME_INPUT_PLACEHOLDER} />
  ))
  .add('With custom styling', () => (
    <INVTextInput
      placeholder={config.strings.WELCOME_INPUT_PLACEHOLDER}
      placeholderTextColor={config.colors.gray}
      containerStyle={styles.container}
    />
  ));

const styles = StyleSheet.create({
  container: { marginHorizontal: 40 },
});
