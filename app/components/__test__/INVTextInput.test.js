import React from 'react';
import { render } from '@testing-library/react-native';
import INVTextInput from '../INVTextInput';

describe('INVTextInput', () => {
  it('matches snapshot', () => {
    expect(render(<INVTextInput />)).toMatchSnapshot();
    expect(render(<INVTextInput containerStyle={{ margin: 20 }} />)).toMatchSnapshot();
  });
});
