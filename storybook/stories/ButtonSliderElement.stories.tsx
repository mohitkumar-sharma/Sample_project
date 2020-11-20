import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ButtonSliderElement } from '../../app/components';
import { StyleSheet } from 'react-native';
import config from '../../app/config';

storiesOf('ButtonSliderElement', module)
  .add('Default', () => <ButtonSliderElement />)
  .add('With icon', () => <ButtonSliderElement iconName={config.strings.DIAMOND_ICON} />)
  .add('With custom styling', () => (
    <ButtonSliderElement
      iconName={config.strings.DIAMOND_ICON}
      iconStyle={styles.icon}
      iconContainerStyle={styles.container}
    />
  ));

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: config.colors.themeLightBlack,
    borderRadius: 10,
  },
  icon: { fontSize: 30 },
});
