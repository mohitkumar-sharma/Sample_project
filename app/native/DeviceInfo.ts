import { NativeModules } from 'react-native';
import config from '../config';
import { DeviceInfo } from '../states';

export interface DeviceInfoProps {
  /* as a string of version of app */
  version?: string;
  /* as a string of name of device */
  deviceName?: string;
  /* as a string of UUID or device Id */
  deviceId?: string;
  /* as a string of type of device whether simulator, emulator or physical device */
  deviceType?: string;
}

export interface DeviceDetailsProps {
  /* as an object of type DeviceInfoProps*/
  deviceInfo?: DeviceInfoProps;
}

/**
 * This function is responsible to communicate with native modules of android and iOS and
 * fetch the device info and save it into redux.
 */
const getDeviceInfo = (): void => {
  const { DeviceInfoManager } = NativeModules;
  DeviceInfoManager.getNativeDeviceInfo(({ deviceInfo }: DeviceDetailsProps) => {
    config.store.dispatch(DeviceInfo.saveDeviceInfo({ deviceInfo }));
  });
};

export { getDeviceInfo };
