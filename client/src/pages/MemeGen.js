import React, { useState } from 'react';

export default function MemeGen() {

    const [inputText, setInputText] = useState({
        topText: "",
        bottomText: "",
    })

    const [randomImg, setRandomImg] = useState(
        "https://i.imgflip.com/26am.jpg"
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
        console.log("submitted")
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Add Top Text"
                    value={inputText.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Add Bottom Text Here"
                    value={inputText.topText}
                    onChange={handleChange}
                />
                <button>Generate</button>
            </form>
            <div className="meme">
                <img src={randomImg} alt="Generated meme" />
                <h2 className="top">{inputText.topText}</h2>
                <h2 className="bottom">{inputText.bottomText}</h2>
            </div>
        </div>
    );
}