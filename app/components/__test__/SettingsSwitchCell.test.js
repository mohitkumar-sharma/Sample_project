import React from 'react';
import { render } from '@testing-library/react-native';
import SettingsSwitchCell from '../SettingsSwitchCell';
import config from '../../config';

describe('SettingsSwitchCell', () => {
  const props = {
    containerStyle: { padding: 10 },
    textStyle: { color: config.colors.appTheme },
    switchStyle: { marginLeft: 20 },
    switchValue: true,
  };
  const text = config.strings.SWITCH_TEXT;
  const onSwitchValueChange = jest.fn();

  it('matches snapshot', () => {
    expect(render(<SettingsSwitchCell {...props} />)).toMatchSnapshot();
    expect(
      render(
        <SettingsSwitchCell {...props} text={text} onSwitchValueChange={onSwitchValueChange} />
      )
    ).toMatchSnapshot();
  });

  it('renders the text', () => {
    const { queryByTestId } = render(<SettingsSwitchCell {...props} text={text} />);
    expect(queryByTestId(config.accessibilityStrings.SETTINGS_SWITCH_TEXT)).toBeTruthy();
  });

  it('does not render the text', () => {
    const { queryByTestId } = render(<SettingsSwitchCell {...props} />);
    expect(queryByTestId(config.accessibilityStrings.SETTINGS_SWITCH_TEXT)).toBeFalsy();
  });

  it('renders the switch', () => {
    const { queryByTestId } = render(
      <SettingsSwitchCell {...props} onSwitchValueChange={onSwitchValueChange} />
    );
    expect(queryByTestId(config.accessibilityStrings.SETTINGS_SWITCH)).toBeTruthy();
  });

  it('does not render the switch', () => {
    const { queryByTestId } = render(<SettingsSwitchCell {...props} />);
    expect(queryByTestId(config.accessibilityStrings.SETTINGS_SWITCH)).toBeFalsy();
  });
});
