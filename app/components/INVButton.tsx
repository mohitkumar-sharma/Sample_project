import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import config from '../config';

export interface INVButtonProps {
  /* as an string to show the text of button on Text element */
  buttonText?: string;
  /* as an object of style props for TouchableOpacity element */
  containerStyle?: StyleProp<ViewStyle>;
  /* as an object of style props for Text element */
  buttonTextStyle?: StyleProp<TextStyle>;
  /* as a function triggered when pressed */
  onPress?: () => void;
}

/**
 * This is the INVButton functional component works as a button and can be customized from where it is used
 * @param props : props are defined in INVButtonProps which can be passed to this component
 */
const INVButton = (props: INVButtonProps): JSX.Element => {
  const { buttonText, containerStyle, buttonTextStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      disabled={!onPress}
      testID={config.accessibilityStrings.NORMAL_BUTTON}>
      {buttonText && buttonText !== '' ? (
        <Text
          style={[styles.buttonText, buttonTextStyle]}
          numberOfLines={1}
          testID={config.accessibilityStrings.NORMAL_BUTTON_TEXT}>
          {buttonText}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.themeBlue,
    height: 55,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: config.fontWeights.FONT_WEIGHT_REGULAR,
    color: config.colors.white,
    textAlign: 'center',
  },
});

export default INVButton;
