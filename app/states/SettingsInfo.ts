import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsProps {
  /* as a boolean of show/hide banner */
  isShowWarningBanner?: boolean;
}

interface SettingsSelectorProps {
  /* as a type of SettingsProps for selector*/
  settings?: SettingsProps;
}

const initialState: SettingsProps = {
  /* status of banner provided */
  isShowWarningBanner: true,
};

/**
 * This function will save the warning banner status data to redux
 * @param state : state having SettingsProps
 * @param action : action called from app with SettingsProps
 */
const saveBannerStatus = (state: SettingsProps, action: PayloadAction<SettingsProps>): void => {
  state.isShowWarningBanner = action.payload.isShowWarningBanner;
};

// Create slice having sliceName, reducer and initialState
const SettingsInfoSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    saveWarningBannerStatus: saveBannerStatus,
  },
});

// Get actions from created SettingsInfoSlice
const { saveWarningBannerStatus } = SettingsInfoSlice.actions;

/**
 * Selector for selecting data from redux
 * @param settings : settings consists of SettingsSelectorProps like userName
 */
const selectWarningBannerStatus = ({ settings }: SettingsSelectorProps): boolean =>
  settings?.isShowWarningBanner ?? false;

const settingsReducer = SettingsInfoSlice.reducer;

export { settingsReducer, saveWarningBannerStatus, selectWarningBannerStatus };
