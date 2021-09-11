import React from 'react';
import Auth from "../utils/auth";
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/MG_Logo.png';
import { BiUserPlus, BiLogIn, BiLogOut } from 'react-icons/bi';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt='Meme Gen Logo' className="navbar-logo">
          </img>
        </Link>
        <div className="mobile-nav">
          {!Auth.loggedIn() && <Link to='/sign-up'><BiUserPlus /></Link>}
          {!Auth.loggedIn() && <Link to='/log-in'><BiLogIn /></Link>}
          {Auth.loggedIn() && <Link to='/' onClick={() => Auth.logout()}><BiLogOut /></Link>}
        </div>
        <ul className="main-nav">
          {!Auth.loggedIn() &&
            <li>
              <Link to='/sign-up' className='nav-links'>
                Sign Up
              </Link>
            </li>
          }
          {!Auth.loggedIn() &&
            <li>
              <Link to='/log-in' className='nav-links'>
                Log In
              </Link>
            </li>
          }
          {Auth.loggedIn() &&
            <li>
              <Link to='/' className='nav-links' onClick={() => Auth.logout()}>
                Log Out
              </Link>
            </li>
          }
        </ul>
      </div>
    </nav >
  )
}

export default Navbar