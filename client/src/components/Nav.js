import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <BrowserRouter>
      <Route>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              MEME GENERATOR
            </Link>
            <ul>
              <li>
                <Link to='/' className='nav-links'>
                  Log In/Sign Up
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