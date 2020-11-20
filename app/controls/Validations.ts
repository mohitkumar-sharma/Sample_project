import { Alert } from 'react-native';
import config from '../config';

const validateUserName = (userName: string): boolean => {
  if (userName.trim() === '') {
    Alert.alert(
      config.strings.ALERT_TITLE_INVALID_USER_NAME,
      config.strings.ALERT_ENTER_VALID_USER_NAME
    );
    return false;
  }
  return true;
};

export { validateUserName };
