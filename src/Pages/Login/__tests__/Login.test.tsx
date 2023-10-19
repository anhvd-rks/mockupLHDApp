import React, {useState} from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import Login from '../Login';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch } from 'react-redux';
import { store } from '../../../store';
import { AppRouter } from '../../../Routes/Routes';
import { getData } from '../../HomePage/util';


test('renders Login', () => {
    render(<Provider store={store}><Router><Login /></Router></Provider>);
    const linkElement = screen.getByTestId('email');
    expect(linkElement).toBeInTheDocument();
    const button = screen.getByTestId('submit')
    fireEvent.click(button)
    expect(screen.getByTestId('errorText')).toBeInTheDocument()
});

test('check submit button in Login', () => {
    render(<Provider store={store}><Router><Login /></Router></Provider>);
    const linkElement = screen.getByTestId('submit');
    expect(linkElement).toBeInTheDocument();
    const button = screen.getByTestId('submit')
    const warning = screen.getByTestId('errorText')
    fireEvent.click(button)
    expect(warning).toHaveStyle('display: block')
});

test('check change email password field in Login', () => {
    render(<Provider store={store}><Router><Login /></Router></Provider>);
    const mail = screen.getByTestId('password')
    const pass = screen.getByTestId('email')
    const warning = screen.getByTestId('errorText')
    fireEvent.change(mail,{ target: { value: 'avd123@gmail.com' } })
    fireEvent.change(pass,{ target: { value: '123456' } })
    expect(warning).toHaveStyle('display: none')
});

test('check change email password field in Login', () => {
    render(<Provider store={store}><Router><Login /></Router></Provider>);
    const email = screen.getByTestId('email')
    const password = screen.getByTestId('password')
    userEvent.type(email, 'avd123@gmail.com')
    userEvent.type(password, '123456')
    expect(email).toHaveValue('avd123@gmail.com')
    expect(password).toHaveValue('123456')
    const button = screen.getByTestId('submit')
    fireEvent.click(button)
});

test('navigate after click login', async() => {
    render(<Provider store={store}><AppRouter /></Provider>)
    const toListScreen = screen.getByText('CHARACTERS R&M')
    expect(toListScreen).toBeInTheDocument()
})

test('navigate after click login', async() => {
    render(<Provider store={store}><AppRouter /></Provider>)
    const toListScreen = screen.getByText('CHARACTERS R&M')
    expect(toListScreen).toBeInTheDocument()
})
