import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <BrowserRouter>
      <Route>
        <nav>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              MEME GENERATOR
            </Link>
            <ul>
              <li>
                <Link to='/sign-in' className='nav-links'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to='/sign-up' className='nav-links'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Route>
    </BrowserRouter>
  )
}

export default Navbar