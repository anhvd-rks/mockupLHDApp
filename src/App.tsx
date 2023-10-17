import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider } from "react-router";
import Navbar from './Components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from './Components/features/userSlice';
import { AppRouter } from './Routes/Routes';

function App() {
  return (
    <AppRouter />
  );
}

export default App;
