import React from "react";
import logoRM from "./thumb.jpg"
import "./Navbar.css";
import { Link } from "react-router-dom";
import { selectUser, logout } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as helpers from "../../Pages/HomePage/helper";

interface Props {}

const Navbar = (props: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const access = useSelector(selectUser)
  const userHistory =  localStorage.getItem("access") && JSON.parse(localStorage.getItem("access") || "")
  const handleSignOut = helpers.debounce(() => {
    dispatch(logout());
    localStorage.clear();
    navigate('/login', {replace: true})
  }, 200)

  return (
    <nav className="relative container mx-auto p-6 navTop" style={{maxWidth: '90%'}} data-testid="navbar" id="navbarLanding">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20 leftSide" >
            <Link to = "/">
                <img src={logoRM} alt="" style={{width: 100, height: 50 }} />
            </Link>
          {(access?.loggedIn || (userHistory && userHistory.loggedIn)) && (
            <div className="font-bold lg:flex dashboard-container">
              <Link to="/" className="text-black hover:text-darkBlue">
                Characters
              </Link>
            </div>
          )}
        </div>
        <div className=" lg:flex items-center space-x-6 text-back rightSide">
          {(access?.loggedIn || (userHistory && userHistory.loggedIn)) && (
            <div className=" lg:flex items-center space-x-6 text-back px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70">
              {(userHistory && userHistory.loggedIn) && userHistory.username}
            </div>
          )}
          {(access?.loggedIn || (userHistory && userHistory.loggedIn)) && (
            <button
              data-testid="signout"
              onClick={handleSignOut}
              className="hover:text-darkBlue btnSignout"
            >
              Sign out
            </button>
          ) 
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;