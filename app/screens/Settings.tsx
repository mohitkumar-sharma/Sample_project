import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import config from '../config';
import { INVBanner, SettingsSwitchCell } from '../components';
import { DeviceInfo, SettingsInfo } from '../states';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/Main';
import { useBackButton } from '../hooks';

/* Props for navigation*/
type NavigationProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Settings'>;
};

const Settings: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {
  /* useDispatch hook from react-redux for dispatching actions*/
  const dispatch = useDispatch();

  /* useSelector hook from react-redux to select device type from redux */
  const deviceType = useSelector(DeviceInfo.selectDeviceType);
  /* useSelector hook from react-redux to select warning banner from redux */
  const isShowBanner = useSelector(SettingsInfo.selectWarningBannerStatus);

  /**
   * This function is responsible to handle the hardware button of android
   */
  const backButtonHandler = () => {
    navigation.goBack();
    return true;
  };

  /* custom hook called from hook directory */
  useBackButton(backButtonHandler);

  /**
   * This function is responsible to dispatch an action to save switch value in to redux
   * @param value : a boolean value
   */
  const onSwitchValueChange = (value: boolean) =>
    dispatch(SettingsInfo.saveWarningBannerStatus({ isShowWarningBanner: value }));

  return (
    <SafeAreaView style={styles.container}>
      {isShowBanner && deviceType !== 'Device' ? (
        <INVBanner text={`${config.strings.APP_RUNNING_WARNING} ${deviceType}`} />
      ) : null}
      <SettingsSwitchCell
        text={config.strings.SWITCH_TEXT}
        onSwitchValueChange={onSwitchValueChange}
        containerStyle={styles.switchContainer}
        switchValue={isShowBanner}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: config.colors.appTheme },
  switchContainer: { paddingVertical: 10, backgroundColor: config.colors.themeBlue },
});

export default Settings;
