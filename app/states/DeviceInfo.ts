import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeviceInfoProps, DeviceDetailsProps } from '../native/DeviceInfo';

const initialState: DeviceInfoProps = {
  /* version of the app provided */
  version: '',
  /* name of the android or ios device */
  deviceName: '',
  /* UUID or unique device Id of the device*/
  deviceId: '',
  /* type of device whether simulator, emulator or physical device */
  deviceType: '',
};

/**
 * This function will save the DeviceDetails data to redux
 * @param state : state having DeviceDetailsProps
 * @param action : action called from app with DeviceDetailsProps
 */
const saveDeviceDetails = (
  state: DeviceInfoProps,
  action: PayloadAction<DeviceDetailsProps>
): void => {
  state.version = action.payload.deviceInfo?.version;
  state.deviceId = action.payload.deviceInfo?.deviceId;
  state.deviceName = action.payload.deviceInfo?.deviceName;
  state.deviceType = action.payload.deviceInfo?.deviceType;
};

// Create slice having sliceName, reducer and initialState
const DeviceInfoSlice = createSlice({
  name: 'deviceInfo',
  initialState: initialState,
  reducers: {
    saveDeviceInfo: saveDeviceDetails,
  },
});

// Get actions from created DeviceDetailsSlice
const { saveDeviceInfo } = DeviceInfoSlice.actions;

/**
 * Selector for selecting data from redux
 * @param deviceInfo : deviceInfo consists of DeviceDetailsProps like version, deviceName, deviceId
 * & deviceType
 */
const selectDeviceType = ({ deviceInfo }: DeviceDetailsProps): string => {
  return deviceInfo?.deviceType ?? '';
};
const deviceInfoReducer = DeviceInfoSlice.reducer;

export { deviceInfoReducer, saveDeviceInfo, selectDeviceType };
