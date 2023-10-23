import React, {useState} from 'react';
import { render, screen, fireEvent, getByTestId, waitFor } from '@testing-library/react';
import HomePage from '../HomePage';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { RouterProvider, createMemoryRouter } from 'react-router';
import Login from '../../Login/Login';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { getData } from '../util';

const router = createMemoryRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  {
    initialEntries: ["/login"],
    initialIndex: 0,
  }
);

test('renders HomePage', async () => {
  const email = "avd123@gmail.com";
  const password = "123456";
  render(<Provider store={store}><RouterProvider router={router} /></Provider>);
  expect(router.state.location.pathname).toBe("/login");
  await userEvent.type(screen.getByTestId('email'), email);
  await userEvent.type(screen.getByTestId('password'), password);
  await userEvent.click(screen.getByTestId('submit'));
});

test('navigate after click login', async() => {
  await waitFor(() => expect(location.pathname).toBe('/'))
})

test('navigate after click login', async() => {
  render(<Provider store={store}><RouterProvider router={router} /></Provider>);
  const linkElement = screen.getByText(/CHARACTERS R&M/i);
  expect(linkElement).toBeInTheDocument();
})