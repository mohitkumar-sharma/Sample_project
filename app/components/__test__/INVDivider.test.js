import React from 'react';
import { render } from '@testing-library/react-native';
import INVDivider from '../INVDivider';

describe('INVDivider', () => {
  it('matches snapshot', () => {
    const { toJSON } = render(<INVDivider />);
    expect(toJSON()).toMatchSnapshot();
  });
});
