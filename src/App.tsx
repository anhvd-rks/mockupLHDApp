import React from 'react';
import './App.css';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
  );
}

export default App;
