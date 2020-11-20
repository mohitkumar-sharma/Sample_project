import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { INVDivider } from '../../app/components';
import { StyleSheet } from 'react-native';

storiesOf('INVDivider', module)
  .add('Default', () => <INVDivider />)
  .add('With custom styling', () => <INVDivider dividerStyle={styles.divider} />);

const styles = StyleSheet.create({
  divider: { height: 2, backgroundColor: 'black', marginHorizontal: 10, marginTop: 20 },
});
