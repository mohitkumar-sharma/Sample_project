import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import config from '../config';

export interface INVDividerProps {
  /* as an object of style props for View element */
  dividerStyle?: StyleProp<ViewStyle>;
}

/**
 * This is the INVDivider functional component works as a divider and can be used within the app
 * @param props : props are defined in INVDividerProps which can be passed to this component
 */
const INVDivider = (props: INVDividerProps): JSX.Element => {
  const { dividerStyle } = props;
  return <View style={[styles.divider, dividerStyle]} />;
};

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: config.colors.divider },
});

export default INVDivider;
