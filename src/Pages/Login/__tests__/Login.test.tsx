import React, {useState} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../../../store';

const onChange = require('../Login')


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

