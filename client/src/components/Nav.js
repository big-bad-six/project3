import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/MG_Logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt='Meme Gen Logo' className="navbar-logo">
          </img>
        </Link>
        <ul className="main-nav">
          <li>
            <Link to='/sign-up' className='nav-links'>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to='/log-in' className='nav-links'>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar