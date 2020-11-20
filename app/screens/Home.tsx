import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import config from '../config';
import { INVButton, INVSliderButton, HeaderPressableText, INVBanner } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo, DeviceInfo, SettingsInfo } from '../states';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/Main';
import { useBackButton } from '../hooks';

/* Props for navigation*/
type NavigationProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Home'>;
};

const Home: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {
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
   * This function is responsible to clear the user name stored in redux
   */
  const onSignOutPress = useCallback(() => {
    dispatch(UserInfo.saveUser({ userName: '' }));
    dispatch(SettingsInfo.saveWarningBannerStatus({ isShowWarningBanner: true }));
  }, [dispatch]);

  /**
   * This function is responsible for setting a signout button on left side of header
   */
  const setNavigationOptions = useCallback(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderPressableText
          text={config.strings.SIGN_OUT}
          containerStyle={styles.headerLeftContainer}
          textStyle={styles.headerLeftText}
          onPress={onSignOutPress}
        />
      ),
    });
  }, [navigation, onSignOutPress]);

  /* useEffect hook to set the navigation options */
  useEffect(() => {
    setNavigationOptions();
  }, [setNavigationOptions]);

  /**
   * This function is called when a button pressed
   */
  const buttonOnPress = (btnString: string) => {
    Alert.alert(config.strings.ALERT_TITLE_BTN_PRESSED, btnString);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isShowBanner && deviceType !== 'Device' ? (
        <INVBanner text={`${config.strings.APP_RUNNING_WARNING} ${deviceType}`} />
      ) : null}
      <View style={styles.wrapper}>
        <Text style={styles.text}>{config.strings.HOME_BUTTONS_HEADING}</Text>
        <INVButton
          containerStyle={styles.firstBtnContainer}
          buttonText={config.strings.PRESS_ME}
          onPress={() => buttonOnPress(config.strings.TRANSPARENT_BTN_PRESSED)}
          buttonTextStyle={styles.commonBtnText}
        />
        <INVButton
          containerStyle={styles.secondBtnContainer}
          buttonText={config.strings.PRESS_ME}
          onPress={() => buttonOnPress(config.strings.LIGHT_BLACK_BTN_PRESSED)}
          buttonTextStyle={styles.commonBtnText}
        />
        <INVButton
          containerStyle={styles.thirdBtnContainer}
          buttonText={config.strings.PRESS_ME}
          onPress={() => buttonOnPress(config.strings.BLUE_BTN_PRESSED)}
        />
        <INVSliderButton
          buttonText={config.strings.SLIDE_ME}
          buttonTextStyle={styles.commonBtnText}
          containerStyle={styles.sliderBtnContainer}
          iconName={config.strings.DIAMOND_ICON}
          onEndReached={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: config.colors.appTheme },
  wrapper: { bottom: 20, position: 'absolute', width: '100%' },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: config.colors.warning,
    fontWeight: config.fontWeights.FONT_WEIGHT_MEDIUM,
    padding: 5,
  },
  firstBtnContainer: { marginTop: 15, backgroundColor: 'transparent' },
  commonBtnText: { color: config.colors.themeBlue },
  secondBtnContainer: { marginTop: 15, backgroundColor: config.colors.themeLightBlack },
  thirdBtnContainer: { marginTop: 15 },
  sliderBtnContainer: { marginTop: 15, marginBottom: 30 },
  headerLeftContainer: { alignSelf: 'flex-start', paddingHorizontal: 10 },
  headerLeftText: { color: config.colors.white },
});

export default Home;
