import React from 'react';
import { View, TextInput, StyleSheet, StyleProp, ViewStyle, TextInputProps } from 'react-native';
import INVDivider from './INVDivider';

export interface INVTextInputProps extends TextInputProps {
  /* as an object of style props for main content View element*/
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * This is the INVTextInput functional component works as a custom text input
 * @param {containerStyle, ...props} : containerStyle prop is defined in INVTextInputProps and ...props
 * related to props of TextInput
 */
const INVTextInput = ({ containerStyle, ...props }: INVTextInputProps): JSX.Element => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={styles.textInput} {...props} />
      <INVDivider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 20 },
  textInput: { paddingHorizontal: 5, paddingVertical: 10 },
});

export default INVTextInput;
