import { render } from '@testing-library/react';

import My from './my';

describe('My', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<My />);
    expect(baseElement).toBeTruthy();
  });
});
