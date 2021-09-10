import React, { useState, useEffect } from 'react';
import '../assets/css/MemeGen.css';
import comments from '../assets/images/addcomments.jpg';
import sharescreen from '../assets/images/shareyourscreen.jpg';
import touchdown from '../assets/images/touchdown.jpg';
import whosdog from '../assets/images/whosdog.jpg';
import legocat from '../assets/images/legoscat.jpg';


// To-do: Moveable text, Download Button saves new image as SVG/PNG

export default function MemeGen() {
    /* from svg to button tutorial */

    const handleClick = e => {
        e.preventDefault();
        alert("🏗️ Under construction! How about a screenshot? 🤳")
    };

    /* end of tutorial */

    const [inputText, setInputText] = useState({
        topText: "",
        bottomText: "",
    })

    const [randomImg, setRandomImg] = useState(
        "https://i.imgflip.com/tau4.jpg"
    )

    const [allMemeImgs, setAllMemeImgs] = useState([])

    const handleChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        const randMemeImgUrl = allMemeImgs[randNum].url
        setRandomImg(randMemeImgUrl)
    }


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => setAllMemeImgs(response.data.memes))
    }, [])

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text Here"
                    value={inputText.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text Here"
                    value={inputText.bottomText}
                    onChange={handleChange}
                />
                <button>Next Image</button>
                <button onClick={handleClick}>Download</button>
            </form>

            <div className="meme">
                <img src={randomImg} alt="Generated meme" />
                <h2 className="top">{inputText.topText}</h2>
                <h2 className="bottom">{inputText.bottomText}</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="card">
                <h1> Scroll Down for More Memes </h1>
                <img src={ comments } alt="add comments meme"/>
                <img src={ sharescreen } alt="bernie sanders i am once again asking you to share your screen meme"/>
                <img src={ touchdown } alt="burning house girl we've got a touch meme"/>
                <img src={ whosdog } alt="whos dog doge meme"/>
                <img src={ legocat } alt="i should buy legos cat meme"/>

            </div>
        </div>
    );

}