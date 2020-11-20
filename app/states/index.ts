import { combineReducers } from '@reduxjs/toolkit';
import * as UserInfo from './UserInfo';
import * as DeviceInfo from './DeviceInfo';
import * as SettingsInfo from './SettingsInfo';

const rootReducer = combineReducers({
  userInfo: UserInfo.userInfoReducer,
  deviceInfo: DeviceInfo.deviceInfoReducer,
  settings: SettingsInfo.settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer, UserInfo, DeviceInfo, SettingsInfo };
