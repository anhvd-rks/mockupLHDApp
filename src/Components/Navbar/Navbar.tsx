import React from "react";
import logo from "../../logo.svg"
import logoRM from "./91MteSqsrJL._AC_UF1000,1000_QL80_.jpg"
import "./Navbar.css";
import { Link } from "react-router-dom";
import { selectUser, logout } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from 'react-router-dom';
import * as helpers from "../../Pages/HomePage/helper";

interface Props {}

const Navbar = (props: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const access = useSelector(selectUser)
  const userHistory = localStorage.getItem('username') || ''
  const handleSignOut = helpers.debounce(() => {
    dispatch(logout());
    localStorage.clear();
    navigate('/signup', {replace: true})
  }, 200)

  return (
    <nav className="relative container mx-auto p-6" style={{maxWidth: '90%'}}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
            <Link to = "/">
                <img src={logo} alt="" style={{width: 100, height: 50 }}/>
            </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/" className="text-black hover:text-darkBlue">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          {access?.loggedIn || userHistory ? 
            <div className="hidden lg:flex items-center space-x-6 text-back px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70">
              {access?.username} {userHistory}
            </div> 
            :
            <Link
              to="/login"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Login
            </Link>
          }
          {access?.loggedIn || userHistory
          ? 
          <button
            onClick={handleSignOut}
            className="hover:text-darkBlue"
          >
            Sign out
          </button>
          :
          <Link
             to="/signup"
            className="hover:text-darkBlue"
          >
            Sign up
          </Link>
          }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;