import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Text, TextStyle, TouchableOpacity } from 'react-native';
import config from '../config';

export interface HeaderPressableTextProps {
  /* as a string to show the pressable text for Text element*/
  text?: string;
  /* as an object of style props for TouchableOpacity element */
  containerStyle?: StyleProp<ViewStyle>;
  /* as an object of style props for Text element */
  textStyle?: StyleProp<TextStyle>;
  /* as a function triggered when pressed */
  onPress?: () => void;
}

/**
 * This is the HeaderPressableTextProps functional component for showing pressable/non-pressable text on
 * left/right side of navigation header
 * @param props : props are defined in HeaderPressableTextProps which can be passed to this component
 */
const HeaderPressableText = (props: HeaderPressableTextProps): JSX.Element => {
  const { text, containerStyle, textStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={!onPress}
      testID={config.accessibilityStrings.HEADER_PRESSABLE_ELEMENT}>
      {text && text !== '' ? (
        <Text
          style={[styles.text, textStyle]}
          testID={config.accessibilityStrings.HEADER_SIDES_TEXT}>
          {text}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 16, fontWeight: config.fontWeights.FONT_WEIGHT_REGULAR },
});

export default HeaderPressableText;
