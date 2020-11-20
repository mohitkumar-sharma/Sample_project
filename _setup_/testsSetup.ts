jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn(() => Promise.resolve()),
  combineReducers: jest.fn(() => Promise.resolve()),
  createSlice: jest.fn(() => Promise.resolve()),
  getDefaultMiddleware: jest.fn(() => Promise.resolve()),
  createAction: jest.fn(),
}));

jest.mock('../app/config/store', () => ({}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => Promise.resolve()),
  useSelector: jest.fn((data) => data),
}));

jest.mock('../app/states/UserInfo', () => {
  return {
    saveUser: jest.fn(),
  };
});

jest.mock('../app/states/DeviceInfo', () => {
  return {
    saveDeviceInfo: jest.fn(),
  };
});

jest.mock('../app/states/SettingsInfo', () => {
  return {
    saveWarningBannerStatus: jest.fn(),
  };
});

export {};
