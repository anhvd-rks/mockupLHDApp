import React, {useState} from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import HomePage from '../HomePage';

test('renders HomePage', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/CHARACTERS R&M/i);
  expect(linkElement).toBeInTheDocument();
});
