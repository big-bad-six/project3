import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {

    return (
        <>
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
        </>
    )
}

export default Navbar