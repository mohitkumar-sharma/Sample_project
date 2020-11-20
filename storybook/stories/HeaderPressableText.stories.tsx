import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { HeaderPressableText } from '../../app/components';
import { StyleSheet } from 'react-native';
import config from '../../app/config';
import { action } from '@storybook/addon-actions';

storiesOf('HeaderPressableText', module)
  .add('Default', () => <HeaderPressableText />)
  .add('With text non-pressable', () => <HeaderPressableText text={config.strings.SIGN_OUT} />)
  .add('With text pressable', () => (
    <HeaderPressableText text={config.strings.SIGN_OUT} onPress={action('Signout Pressed')} />
  ))
  .add('Custom styling', () => (
    <HeaderPressableText
      text={config.strings.SIGN_OUT}
      onPress={action('Signout Pressed')}
      containerStyle={styles.container}
      textStyle={styles.text}
    />
  ));

const styles = StyleSheet.create({
  container: { backgroundColor: config.colors.themeBlue, alignSelf: 'flex-start' },
  text: { fontSize: 20 },
});
