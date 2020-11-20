import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SettingsSwitchCell } from '../../app/components';
import { StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';
import config from '../../app/config';

storiesOf('SettingsSwitchCell', module)
  .add('Default', () => <SettingsSwitchCell />)
  .add('With text only', () => <SettingsSwitchCell text={config.strings.SWITCH_TEXT} />)
  .add('With switch only', () => (
    <SettingsSwitchCell onSwitchValueChange={action('Switch value changes')} />
  ))
  .add('With text and switch', () => (
    <SettingsSwitchCell
      text={config.strings.SWITCH_TEXT}
      onSwitchValueChange={action('Switch value changes')}
    />
  ))
  .add('With custom styling', () => (
    <SettingsSwitchCell
      text={config.strings.SWITCH_TEXT}
      onSwitchValueChange={action('Switch value changes')}
      containerStyle={styles.container}
    />
  ));

const styles = StyleSheet.create({
  container: { paddingVertical: 10, backgroundColor: config.colors.themeBlue },
});
