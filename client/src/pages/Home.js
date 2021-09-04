import React from 'react';
import mainLogo from '../assets/images/MG_Logo_Main.png'

export default function Home() {
    return (
        <div className="card" >
            <h1> Welcome!</h1>
            <img className='main-logo' src={mainLogo} alt='Mem Gen Main logo'></img>
            <p>On this site you can search for images and add custom text to them. This is how it works:</p>
            <ul>
                <li>Sign up to be able to come back and see your saved memes! It's free!
                </li>
                <li>Search for an image to add custom text to it
                </li>
                <li>Save it and share it to anyone
                </li>
            </ul>
        </div>
    );
}