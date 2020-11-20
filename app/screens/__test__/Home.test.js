import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../Home';
import config from '../../config';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Home', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);

  const navigation = {
    navigate: jest.fn(),
    setOptions: jest.fn(),
  };

  /* Mocking store */
  const mockStore = configureStore([]);
  const store = mockStore({ deviceInfo: {}, isShowWarningBanner: true });

  jest
    .spyOn(redux, 'useSelector')
    .mockImplementationOnce(() => store.getState().isShowWarningBanner)
    .mockImplementationOnce(() => store.getState().deviceInfo);

  it('matches snapshot', () => {
    const { toJSON } = render(<Home navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('pressing buttons', () => {
    const buttonPressed = jest.fn();
    const { getAllByTestId } = render(<Home navigation={navigation} />);

    const buttons = getAllByTestId(config.accessibilityStrings.NORMAL_BUTTON);
    buttons.forEach(async (button) => {
      await fireEvent.press(button);
      expect(buttonPressed).toBeCalledTimes(1);
    });
  });

  it('sliding button slides', async () => {
    const { getByTestId } = render(<Home navigation={navigation} />);

    const buttonContainer = getByTestId(config.accessibilityStrings.SLIDER_BUTTON_CONTAINER);
    const [INVSliderButton] = buttonContainer.children;
    INVSliderButton.props.onEndReached();
  });
});
