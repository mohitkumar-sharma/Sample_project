import React from 'react';
import { render } from '@testing-library/react-native';
import INVSliderButton from '../INVSliderButton';
import config from '../../config';

describe('INVSliderButton', () => {
  const props = {
    iconContainerStyle: { marginHorizonta: 20 },
    iconStyle: { fontSize: 20 },
    buttonTextStyle: { fontSize: 19 },
    containerStyle: { marginTop: 15 },
  };

  const iconName = config.strings.DIAMOND_ICON;
  const buttonText = config.strings.SLIDE_ME;
  const onEndReached = jest.fn();

  it('matches snapshot', () => {
    expect(render(<INVSliderButton {...props} />)).toMatchSnapshot();
    expect(
      render(
        <INVSliderButton
          {...props}
          iconName={iconName}
          buttonText={buttonText}
          onEndReached={onEndReached}
        />
      )
    ).toMatchSnapshot();
  });

  it('renders the button text', () => {
    const { queryByTestId } = render(<INVSliderButton {...props} buttonText={buttonText} />);
    expect(queryByTestId(config.accessibilityStrings.SLIDER_BUTTON_TEXT)).toBeTruthy();
  });

  it('does not render the button text', () => {
    const { queryByTestId } = render(<INVSliderButton {...props} />);
    expect(queryByTestId(config.accessibilityStrings.SLIDER_BUTTON_TEXT)).toBeFalsy();
  });

  it('does not call on sliding ends', () => {
    const { getByTestId } = render(<INVSliderButton {...props} />);
    const sliderButtonContainer = getByTestId(config.accessibilityStrings.SLIDER_BUTTON_CONTAINER);
    const [sliderButton] = sliderButtonContainer.children;
    expect(sliderButton.props.onEndReached()).toBeUndefined();
  });

  it('call on sliding ends', () => {
    const { getByTestId } = render(<INVSliderButton {...props} onEndReached={onEndReached} />);
    const sliderButtonContainer = getByTestId(config.accessibilityStrings.SLIDER_BUTTON_CONTAINER);
    const [sliderButton] = sliderButtonContainer.children;
    sliderButton.props.onEndReached();
    expect(onEndReached).toHaveBeenCalledWith();
  });
});
