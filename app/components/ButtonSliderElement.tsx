import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import config from '../config';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface ButtonSliderElementProps {
  /* as a string of icon name for react native vector Icon element */
  iconName?: string;
  /* as an object of style props for main content View element*/
  iconContainerStyle?: StyleProp<ViewStyle>;
  /* as an object of style props for react native vector Icon element*/
  iconStyle?: StyleProp<TextStyle>;
}

/**
 * This is the ButtonSliderElement functional component for slider button
 * @param props : props are defined in ButtonSliderElementProps which can be passed to this component
 */
const ButtonSliderElement = (props: ButtonSliderElementProps): JSX.Element => {
  const { iconContainerStyle, iconName, iconStyle } = props;

  return (
    <View style={[styles.container, iconContainerStyle]}>
      {iconName && iconName !== '' ? (
        <SimpleLineIcons
          name={iconName}
          style={[styles.icon, iconStyle]}
          size={20}
          color={config.colors.white}
          testID={config.accessibilityStrings.SLIDER_BUTTON_ICON}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 55,
    backgroundColor: config.colors.themeBlue,
    borderRadius: 8,
  },
  icon: { fontSize: 25, color: config.colors.white },
});

export default ButtonSliderElement;
