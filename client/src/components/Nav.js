import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MEME GENERATOR
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