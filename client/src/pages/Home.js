import React from 'react';
import mainLogo from '../assets/images/MG_Logo_Main.png';
import '../assets/css/MemeGen.css'
import { Link } from 'react-router-dom';

export default function Home() {



    return (
        <div className="card" >
            <h1> Welcome!</h1>
            <img className='main-logo' src={mainLogo} alt='Mem Gen Main logo'></img>
            <Link to="/generate-meme"><button>
             Get to the Memes!
            </button>
            </Link>
            
        </div>
    );
}