import React from 'react';
import './Navbar.css';
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
        <ul class="main-nav">
          <li>
            <Link to='/sign-in' className='nav-links'>
              Log In/Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar