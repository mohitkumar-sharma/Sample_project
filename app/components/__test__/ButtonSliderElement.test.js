import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonSliderElement from '../ButtonSliderElement';
import config from '../../config';

describe('ButtonSliderElement', () => {
  const props = { iconContainerStyle: { height: 60, width: 60 }, iconStyle: { fontSize: 25 } };

  const iconName = config.strings.DIAMOND_ICON;

  it('matches snapshot', () => {
    expect(render(<ButtonSliderElement {...props} />)).toMatchSnapshot();
    expect(render(<ButtonSliderElement {...props} iconName={iconName} />)).toMatchSnapshot();
  });

  it('renders the icon', () => {
    const { queryByTestId } = render(<ButtonSliderElement {...props} iconName={iconName} />);
    expect(queryByTestId(config.accessibilityStrings.SLIDER_BUTTON_ICON)).toBeTruthy();
  });

  it('does not render icon', () => {
    const { queryByTestId } = render(<ButtonSliderElement {...props} />);
    expect(queryByTestId(config.accessibilityStrings.SLIDER_BUTTON_ICON)).toBeFalsy();
  });
});
