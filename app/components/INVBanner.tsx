import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text, TextStyle } from 'react-native';
import config from '../config';

export interface INVBannerProps {
  /* as a string for Text element to show message on banner */
  text?: string;
  /* as an object of style props for View element */
  containerStyle?: StyleProp<ViewStyle>;
  /* as an object of style props for Text element */
  textStyle?: StyleProp<TextStyle>;
}

/**
 * This is the INVBanner functional component to show the banner in the app
 * @param props : props are defined in INVBannerProps which can be passed to this component
 */
const INVBanner = (props: INVBannerProps): JSX.Element => {
  const { text, textStyle, containerStyle } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {text && text !== '' ? (
        <Text style={[styles.text, textStyle]} testID={config.accessibilityStrings.BANNER_TEXT}>
          {text}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: config.colors.warning },
  text: {
    margin: 10,
    padding: 3,
    fontSize: 15,
    fontWeight: config.fontWeights.FONT_WEIGHT_REGULAR,
    color: config.colors.white,
  },
});

export default INVBanner;
