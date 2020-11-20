import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Welcome from '../Welcome';
import config from '../../config';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Welcome', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);

  it('matches snapshot', () => {
    const { toJSON } = render(<Welcome />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('on changing text', () => {
    const textValue = 'Name';
    const { getByTestId } = render(<Welcome />);

    const textInput = getByTestId(config.accessibilityStrings.INV_TEXT_INPUT);
    fireEvent.changeText(textInput, textValue);

    expect(textInput.props.value).toBe(textValue);
  });

  it('on pressing button without text', () => {
    const textValue = '';
    const { getByTestId } = render(<Welcome />);

    const textInput = getByTestId(config.accessibilityStrings.INV_TEXT_INPUT);
    fireEvent.changeText(textInput, textValue);

    const button = getByTestId(config.accessibilityStrings.NORMAL_BUTTON);
    fireEvent.press(button);
  });

  it('on pressing button with text', () => {
    const expectedPayload = [];
    const mockStore = configureStore([]);
    const deviceInfo = {
      version: '1.0',
      deviceName: 'iPHONE X',
      deviceId: 'kjsdka7662581003-tw',
      deviceType: 'Device',
    };
    const store = mockStore({ deviceInfo });

    jest.spyOn(redux, 'useSelector').mockImplementationOnce(() => store.getState().deviceInfo);

    const textValue = 'Name';
    const { getByTestId } = render(<Welcome />);

    const textInput = getByTestId(config.accessibilityStrings.INV_TEXT_INPUT);
    fireEvent.changeText(textInput, textValue);

    const button = getByTestId(config.accessibilityStrings.NORMAL_BUTTON);
    fireEvent.press(button);

    store.dispatch({ type: 'DEVICEINFO', payload: deviceInfo });
    expectedPayload.push({ type: 'DEVICEINFO', payload: deviceInfo });
    expect(store.getActions()).toEqual(expectedPayload);
  });
});
