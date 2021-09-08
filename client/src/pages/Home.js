import React from 'react';
import mainLogo from '../assets/images/MG_Logo_Main.png';
import '../assets/css/MemeGen.css'
import { Link } from 'react-router-dom';

export default function Home() {



    return (
        <div className="card" >
            
            <h1> Welcome!</h1>
            <img className='main-logo' src={mainLogo} alt='Mem Gen Main logo'></img>
            <p>Click the button below to start making memes!</p>
            <p>Log in or Sign-up to save your creations</p>
            <div className="buttondiv">
            <Link to="/generate-meme"><button className="home-button">
             Get to the Memes!
            </button>
            </Link>
            </div>
            
        </div>
    );
}