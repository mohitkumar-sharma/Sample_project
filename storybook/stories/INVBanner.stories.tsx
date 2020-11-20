import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { INVBanner } from '../../app/components';
import { StyleSheet } from 'react-native';
import config from '../../app/config';

storiesOf('INVBanner', module)
  .add('Default', () => <INVBanner />)
  .add('With warning message', () => (
    <INVBanner text={`${config.strings.APP_RUNNING_WARNING} Simulator`} />
  ))
  .add('With error message', () => (
    <INVBanner
      text={`${config.strings.APP_RUNNING_WARNING} Emulator`}
      containerStyle={styles.errorContainer}
    />
  ));

const styles = StyleSheet.create({
  errorContainer: { backgroundColor: config.colors.red },
});
