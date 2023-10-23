import React, {useState} from 'react';
import { render, screen, fireEvent, getByTestId, waitFor } from '@testing-library/react';
import Login from '../Login';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from "react-router";
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch } from 'react-redux';
import { store } from '../../../store';
import { router } from '../../../Routes/Routes';
import { getData } from '../../HomePage/util';

describe("Login page", () => {
    it("submits email and password success", async () => {
      const email = "avd123@gmail.com";
      const password = "123456";
      const router = createMemoryRouter(
        [
          {
            path: "/",
            element: <></>,
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
      render(<Provider store={store}><RouterProvider router={router} /></Provider>);
      expect(router.state.location.pathname).toBe("/login");
      await userEvent.type(screen.getByTestId('email'), email);
      await userEvent.type(screen.getByTestId('password'), password);
      await userEvent.click(screen.getByTestId('submit'));
      const emailContainer = screen.getByTestId('email')
      const passwordContainer = screen.getByTestId('password')
      expect(emailContainer).toHaveValue('avd123@gmail.com')
      expect(passwordContainer).toHaveValue('123456')
    });

    test('navigate after click login', async() => {
        render(<Provider store={store}><RouterProvider router={router} /></Provider>)
        const toListScreen = screen.getByText('CHARACTERS R&M')
        expect(toListScreen).toBeInTheDocument()
    })

    test('click signout', async() => {
        render(<Provider store={store}><RouterProvider router={router} /></Provider>)
        const toSignOut = screen.getByTestId('signout')
        await userEvent.click(toSignOut);
        await waitFor(() => expect(location.pathname).toBe('/login'))
    })

    test('wrong password', async() => {
        render(<Provider store={store}><RouterProvider router={router} /></Provider>)
        const email = "avd123@gmail.com";
        const password = "12345689";
        await userEvent.type(screen.getByTestId('email'), email);
        await userEvent.type(screen.getByTestId('password'), password);
        await userEvent.click(screen.getByTestId('submit'));
        expect(screen.getByTestId('errorText')).toHaveStyle('display: block')
    })
  }); 