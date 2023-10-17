import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Detail from "../Pages/Detail/Detail";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../Components/features/userSlice";
import Navbar from "../Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect } from "react";

const NavbarLayout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
)
}

export const AppRouter = () => {
  const access = useSelector(selectUser)
  useEffect(()=>{
    //console.log(access?.loggedIn)
  },[access])
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavbarLayout />} >
                  <Route path='/' element={ access?.loggedIn ? <HomePage /> : <Navigate to='/login' replace />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/detail/:id' element={access?.loggedIn ? <Detail /> : <Navigate to='/login' replace />} />
                  <Route path='*' element={<Navigate to='/login' replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}