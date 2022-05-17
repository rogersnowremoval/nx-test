import { render, renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Welcome my-new-app/gi)).toBeTruthy();
  });
});


const h = (p1: string) => {
  const [a, setA] = useState({});

  useEffect(() => {
    setA({});
  }, [p1]);
};

it('', () => {
  const { result } = renderHook(() => h('a'));
});
