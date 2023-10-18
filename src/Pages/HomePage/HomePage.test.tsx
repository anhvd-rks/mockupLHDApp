import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/CHARACTERS R&M/i);
  expect(linkElement).toBeInTheDocument();
});
