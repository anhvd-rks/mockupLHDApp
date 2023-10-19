import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../Components/features/userSlice";
import Navbar from "../Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const PrivateRoute = () => {
  const navigate = useNavigate();
  const access = useSelector(selectUser)
  const allAccess = localStorage.getItem("access") && JSON.parse(localStorage.getItem("access") || "")

  useEffect(() => {
    if (!(allAccess && allAccess?.loggedIn)) {
      navigate("/login");
    }
  }, [access, allAccess]);

  if(!(allAccess && allAccess?.loggedIn)) return null
  return (
    <div>
      <Navbar/>
      <div className="pt-4">
      <Outlet />
      </div>
    </div>
  );
};

export default PrivateRoute;
