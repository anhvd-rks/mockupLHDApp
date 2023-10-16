import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Detail from "../Pages/Detail/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/login", element: <Login />},
      { path: "/signup", element: <Signup />},
      { path: "/:id", element: <Detail />}
    ],
  },
]);
