import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import INVButton from '../INVButton';
import config from '../../config';

describe('INVButton', () => {
  const props = {
    containerStyle: { backgroundColor: config.colors.appTheme },
    buttonTextStyle: { backgroundColor: config.colors.themeBlue, fontSize: 17 },
  };

  const buttonText = config.strings.GO_TO_HOME;
  const onPress = jest.fn();

  it('matches snapshot', () => {
    expect(render(<INVButton {...props} />)).toMatchSnapshot();
    expect(
      render(<INVButton {...props} buttonText={buttonText} onPress={onPress} />)
    ).toMatchSnapshot();
  });

  it('renders the button text', () => {
    const { queryByTestId } = render(<INVButton {...props} buttonText={buttonText} />);
    expect(queryByTestId(config.accessibilityStrings.NORMAL_BUTTON_TEXT)).toBeTruthy();
  });

  it('does not render the button text', () => {
    const { queryByTestId } = render(<INVButton {...props} />);
    expect(queryByTestId(config.accessibilityStrings.NORMAL_BUTTON_TEXT)).toBeFalsy();
  });

  it('button press', () => {
    const buttonPress = jest.fn();
    const { getByTestId } = render(
      <INVButton {...props} buttonText={buttonText} onPress={buttonPress} />
    );

    const button = getByTestId(config.accessibilityStrings.NORMAL_BUTTON);
    fireEvent.press(button);

    expect(buttonPress).toHaveBeenCalledWith();
  });
});
