import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text, TextStyle, Switch } from 'react-native';
import config from '../config';

export interface SettingsSwitchCellProps {
  /* as a string for showing text for Text element */
  text?: string;
  /* as an object of style props for main View element */
  containerStyle?: StyleProp<ViewStyle>;
  /* as an object of style props for Text element */
  textStyle?: StyleProp<TextStyle>;
  /* as an object of style props for Switch element */
  switchStyle?: StyleProp<TextStyle>;
  /* as a function initiates when value changes for Switch element*/
  onSwitchValueChange?: (value: boolean) => void;
  /* as a boolean to show the value on Switch element */
  switchValue?: boolean;
}

/**
 * This is the SettingsSwitchCell functional component works as a cell with a switch
 * @param props : props are defined in SettingsSwitchCellProps which can be passed to this component
 */
const SettingsSwitchCell = (props: SettingsSwitchCellProps): JSX.Element => {
  const { text, containerStyle, textStyle, switchStyle, onSwitchValueChange, switchValue } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {text && text !== '' ? (
        <Text
          style={[styles.text, textStyle]}
          testID={config.accessibilityStrings.SETTINGS_SWITCH_TEXT}>
          {text}
        </Text>
      ) : null}
      {onSwitchValueChange ? (
        <Switch
          style={[styles.switch, switchStyle]}
          value={switchValue}
          onValueChange={onSwitchValueChange}
          trackColor={{
            true: config.colors.appTheme,
            false: config.colors.divider,
          }}
          testID={config.accessibilityStrings.SETTINGS_SWITCH}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  text: { flex: 1, paddingVertical: 5, fontSize: 15, marginHorizontal: 15 },
  switch: { marginRight: 15 },
});

export default SettingsSwitchCell;
