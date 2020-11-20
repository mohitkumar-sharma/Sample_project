import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from '../Settings';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import config from '../../config';

describe('Settings', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);

  const navigation = {
    navigate: jest.fn(),
    setOptions: jest.fn(),
  };

  /* Mocking store */
  const mockStore = configureStore([]);

  it('matches snapshot', () => {
    const store = mockStore({ deviceInfo: { deviceType: 'Simulator' }, isShowWarningBanner: true });
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().isShowWarningBanner)
      .mockImplementationOnce(() => store.getState().deviceInfo);
    const { toJSON } = render(<Settings navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('switch value to be false', () => {
    const { getByTestId } = render(<Settings navigation={navigation} />);
    const switchButton = getByTestId(config.accessibilityStrings.SETTINGS_SWITCH);
    expect(switchButton.props.value).toBe(false);
  });

  it('switch value changes', () => {
    const expectedPayload = [];
    const settingsInfo = { isShowWarningBanner: false };
    const store = mockStore({ settingsInfo });

    jest.spyOn(redux, 'useSelector').mockImplementationOnce(() => store.getState().deviceInfo);

    const { getByTestId } = render(<Settings navigation={navigation} />);
    const switchButton = getByTestId(config.accessibilityStrings.SETTINGS_SWITCH);
    fireEvent(switchButton, 'onValueChange', true);

    store.dispatch({ type: 'SETTINGSINFO', payload: settingsInfo });
    expectedPayload.push({ type: 'SETTINGSINFO', payload: settingsInfo });
    expect(store.getActions()).toEqual(expectedPayload);
  });
});
