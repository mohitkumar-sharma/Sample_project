import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo, DeviceInfo } from '../states';
import config from '../config';
import { INVTextInput, INVButton, INVBanner } from '../components';
import { validateUserName } from '../controls';

const Welcome = (): JSX.Element => {
  /* useDispatch hook from react-redux for dispatching actions*/
  const dispatch = useDispatch();

  /* useSelector hook from react-redux to select device type from redux */
  const deviceType = useSelector(DeviceInfo.selectDeviceType);

  /* local state for storing user name when entered by user */
  const [name, setUserName] = useState('');

  /**
   * This function is responsible for dispatching an action for storing the user name in redux
   */
  const onGoToHomeBtnPress = () => {
    if (validateUserName(name)) {
      dispatch(UserInfo.saveUser({ userName: name }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <INVBanner text={`${config.strings.APP_RUNNING_WARNING} ${deviceType}`} />
      <INVTextInput
        containerStyle={styles.textInputContainer}
        placeholder={config.strings.WELCOME_INPUT_PLACEHOLDER}
        placeholderTextColor={config.colors.divider}
        style={styles.textInput}
        onChangeText={(text) => setUserName(text)}
        value={name}
        testID={config.accessibilityStrings.INV_TEXT_INPUT}
      />
      <INVButton
        containerStyle={styles.buttonContainer}
        buttonText={config.strings.GO_TO_HOME}
        onPress={onGoToHomeBtnPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: config.colors.appTheme },
  textInputContainer: { marginTop: 145 },
  buttonContainer: { marginTop: 40 },
  textInput: { paddingHorizontal: 5, paddingVertical: 10, color: config.colors.white },
});

export default Welcome;
