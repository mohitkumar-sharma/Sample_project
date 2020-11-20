import React from 'react';
import { StyleSheet, StyleProp, TextStyle, Text, View, ViewStyle } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import ButtonSliderElement, { ButtonSliderElementProps } from './ButtonSliderElement';
import config from '../config';

export interface INVSliderButtonProps extends ButtonSliderElementProps {
  /* as an object of style props for TouchableOpacity element */
  containerStyle?: StyleProp<ViewStyle>;
  /* as a function triggered when sliding reached at end of Slider element */
  onEndReached?: () => void;
  /* as an string to show the text of button on Text element */
  buttonText?: string;
  /* as an object of style props for Text element */
  buttonTextStyle?: StyleProp<TextStyle>;
}

/**
 * This is the INVSliderButton functional component works as a custom slider button
 * @param params : params is an object of INVSliderButtonProps and ButtonSliderElementProps
 */
const INVSliderButton = ({
  buttonText,
  onEndReached,
  buttonTextStyle,
  containerStyle,
  ...props
}: INVSliderButtonProps): JSX.Element => {
  return (
    <View style={containerStyle} testID={config.accessibilityStrings.SLIDER_BUTTON_CONTAINER}>
      <Slider
        onEndReached={() => onEndReached?.()}
        containerStyle={styles.wrapper}
        sliderElement={<ButtonSliderElement {...props} />}>
        {buttonText && buttonText !== '' ? (
          <Text
            style={[styles.buttonText, buttonTextStyle]}
            testID={config.accessibilityStrings.SLIDER_BUTTON_TEXT}>
            {buttonText}
          </Text>
        ) : null}
      </Slider>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 55,
    marginHorizontal: 20,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: config.colors.themeBlue,
    justifyContent: 'center',
  },
  buttonText: {
    color: config.colors.themeBlue,
    fontSize: 17,
    fontWeight: config.fontWeights.FONT_WEIGHT_REGULAR,
  },
});

export default INVSliderButton;
