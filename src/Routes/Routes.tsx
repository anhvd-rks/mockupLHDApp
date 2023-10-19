import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Detail from "../Pages/Detail/Detail";
import { Route } from "react-router-dom"
import PrivateRoute from "./privateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail/>}/>
      </Route>
    </>
  )
);