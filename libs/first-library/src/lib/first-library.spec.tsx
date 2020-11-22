import React from 'react';
import { render } from '@testing-library/react';

import FirstLibrary from './first-library';

describe('FirstLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
