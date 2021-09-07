import React, { useState, useEffect } from 'react';
import './MemeGen.css';

// To-do: Moveable text, Download Button saves new image as SVG/PNG

// 


export default function MemeGen() {

    const [inputText, setInputText] = useState({
        topText: "",
        bottomText: "",
    })

    const [randomImg, setRandomImg] = useState(
        "https://i.imgflip.com/2fm6x.jpg"
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
        console.log("test run")
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
                <button>Generate</button>
                <button>Download</button>
            </form>
            <div className="meme">
                <img src={randomImg} alt="Generated meme" />
                <h2 className="top">{inputText.topText}</h2>
                <h2 className="bottom">{inputText.bottomText}</h2>
            </div>
        </div>
    );
}