import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { INVSliderButton } from '../../app/components';
import { StyleSheet } from 'react-native';
import config from '../../app/config';
import { action } from '@storybook/addon-actions';

storiesOf('INVSliderButton', module)
  .add('Default', () => <INVSliderButton />)
  .add('With icon only', () => <INVSliderButton iconName={config.strings.DIAMOND_ICON} />)
  .add('With text only', () => <INVSliderButton buttonText={config.strings.SLIDE_ME} />)
  .add('With icon & text', () => (
    <INVSliderButton iconName={config.strings.DIAMOND_ICON} buttonText={config.strings.SLIDE_ME} />
  ))
  .add('With all props', () => (
    <INVSliderButton
      iconName={config.strings.DIAMOND_ICON}
      iconStyle={styles.icon}
      buttonText={config.strings.SLIDE_ME}
      onEndReached={action('Slided to the end')}
      buttonTextStyle={styles.buttonText}
    />
  ));

const styles = StyleSheet.create({
  buttonText: { fontSize: 18, color: config.colors.themeLightBlack },
  icon: { fontSize: 30 },
});
