import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../assets/css/MemeGen.css';
import comments from '../assets/images/addcomments.jpg';
import sharescreen from '../assets/images/shareyourscreen.jpg';
import touchdown from '../assets/images/touchdown.jpg';
import whosdog from '../assets/images/whosdog.jpg';
import legocat from '../assets/images/legoscat.jpg';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default function MemeGen() {
    const handleClick = e => {
        e.preventDefault();
        let memeEl = document.querySelector('.meme');
        domtoimage.toBlob(memeEl)
            .then(function (blob) {
                saveAs(blob, 'meme.png');
            });
    };

    const [inputText, setInputText] = useState({
        topText: "",
        midText: "",
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
            <div className="meme-container">
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
                        name="midText"
                        placeholder="Middle Text Here"
                        value={inputText.midText}
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

                    <p>Click and drag text for more options ???????</p>
                </form>

                <div className="meme">
                    <img src={randomImg} alt="Generated meme" />
                    <Draggable><h2 className="top">{inputText.topText}</h2></Draggable>
                    <Draggable><h2 className="mid">{inputText.midText}</h2></Draggable>
                    <Draggable><h2 className="bottom">{inputText.bottomText}</h2></Draggable>
                </div>
            </div>

            <div className="gallery">
                <div className="galleryTitle">The Mini Mothership Meme Museum </div>
                <div className="galleryImgs">
                    <img src={comments} alt="add comments meme" />
                    <img src={sharescreen} alt="bernie sanders i am once again asking you to share your screen meme" />
                    <img src={touchdown} alt="burning house girl we've got a touchdown meme" />
                    <img src={whosdog} alt="whos dog doge meme" />
                    <img src={legocat} alt="i should buy legos cat meme" />
                </div>
            </div>
        </div>
    );

}