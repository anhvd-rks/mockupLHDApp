import React, {useState} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

test('renders Login', async() => {
    render(<Provider store={store}><Router><Navbar /></Router></Provider>);
    const nav = screen.getByTestId('navbar');
    expect(nav).toBeInTheDocument();
});



