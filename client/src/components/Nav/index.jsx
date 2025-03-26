import React from 'react'
import { Link } from 'react-router-dom'
import Auth from "../../utils/auth";
import { FaUserPlus, FaSignInAlt, FaSignOutAlt, FaHome, FaUsers, FaUser, FaCalendarAlt } from 'react-icons/fa';
import "./nav.css"
import Logo from "../../../public/assets/images/mtk-icon.png";

export default function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li className="text-xl text-white -400 transition duration-150 ease hover:text-blue-200">
            <a href="/" onClick={() => Auth.logout()}>
            <FaSignOutAlt className="icon" />
              <span className='nav-full'>Logout</span>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='flex'>
          <li className="text-xl text-white -400 transition duration-150 ease hover:text-blue-200 mx-4">
          <Link to="/signup">
            <FaUserPlus className="icon" />
            <span className="nav-full">Signup</span>
          </Link>
          </li>
          <li className="text-xl text-white -400 transition duration-150 ease hover:text-blue-200 mx-4">
          <Link to="/login">
            <FaSignInAlt className="icon" />
            <span className="nav-full">Login</span>
          </Link>
          </li>
        </ul>
      );
    }
  }


  return (
    <nav className="flex items-center justify-between h-24 p-8 bg-blue-800 mx-auto">
      <a className="company text-2xl font-extrabold text-white">SchedulEd</a>
      <div>
        <img src={Logo} className='comp-icon'></img>
        <a className="comp-short font-extrabold text-white">SchedulEd </a>
      </div>
    <div className='nav-small flex flex-row justify-evenly items-center'>
    <Link to="/"  >
      <FaHome className='icon' />
      <span className="nav-full text-xl text-white -400 transition duration-150 ease hover:text-blue-200 mx-4">Home</span>
    </Link>
    <Link to="/meettheteam"  >
      <FaUsers className='icon' />
      <span className="nav-full text-xl text-white -400 transition duration-150 ease hover:text-blue-200 mx-4">The Team</span>
    </Link>

      {Auth.loggedIn() &&
    <Link to="/profile"  >
      <FaUser className='icon'/>
      <span className="nav-full text-xl text-white -400 transition duration-150 ease hover:text-blue-200 mx-4">My Profile</span>
    </Link>
}
      {Auth.loggedIn() &&
    <Link to="/bookings"  >
      <FaCalendarAlt className="icon" />
      <span className="nav-full text-xl text-white -400 transition duration-150 ease hover:text-blue-200 mx-4">Schedule Booking</span>
    </Link>     
}
      {showNavigation()}
    </div>
  </nav>
  )
}