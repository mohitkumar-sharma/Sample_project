import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeaderPressableText from '../HeaderPressableText';
import config from '../../config';

describe('HeaderPressableText', () => {
  const props = {
    textStyle: { fontSize: 17 },
    containerStyle: { backgroundColor: config.colors.themeBlue },
  };

  const text = config.strings.SIGN_OUT;
  const textPress = jest.fn();

  it('matches snapshot', () => {
    expect(render(<HeaderPressableText {...props} />)).toMatchSnapshot();
    expect(
      render(<HeaderPressableText {...props} text={text} onPress={textPress} />)
    ).toMatchSnapshot();
  });

  it('renders the text', () => {
    const { queryByTestId } = render(<HeaderPressableText {...props} text={text} />);
    expect(queryByTestId(config.accessibilityStrings.HEADER_SIDES_TEXT)).toBeTruthy();
  });

  it('does not render the text', () => {
    const { queryByTestId } = render(<HeaderPressableText {...props} />);
    expect(queryByTestId(config.accessibilityStrings.HEADER_SIDES_TEXT)).toBeFalsy();
  });

  it('header text press', () => {
    const { getByTestId } = render(
      <HeaderPressableText {...props} text={text} onPress={textPress} />
    );

    const pressableElement = getByTestId(config.accessibilityStrings.HEADER_PRESSABLE_ELEMENT);
    fireEvent.press(pressableElement);

    expect(textPress).toHaveBeenCalledWith();
  });
});
