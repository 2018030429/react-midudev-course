import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Last search/i);
  expect(title).toBeInTheDocument();
});
