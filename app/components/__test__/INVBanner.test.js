import React from 'react';
import { render } from '@testing-library/react-native';
import INVBanner from '../INVBanner';
import config from '../../config';

describe('INVBanner', () => {
  const props = {
    textStyle: { fontSize: 17 },
    containerStyle: { backgroundColor: config.colors.red },
  };

  const text = `${config.strings.APP_RUNNING_WARNING} Emulator`;

  it('matches snapshot', () => {
    expect(render(<INVBanner {...props} />)).toMatchSnapshot();
    expect(render(<INVBanner {...props} text={text} />)).toMatchSnapshot();
  });

  it('renders the text', () => {
    const { queryByTestId } = render(<INVBanner {...props} text={text} />);
    expect(queryByTestId(config.accessibilityStrings.BANNER_TEXT)).toBeTruthy();
  });

  it('does not render the text', () => {
    const { queryByTestId } = render(<INVBanner {...props} />);
    expect(queryByTestId(config.accessibilityStrings.BANNER_TEXT)).toBeFalsy();
  });
});
