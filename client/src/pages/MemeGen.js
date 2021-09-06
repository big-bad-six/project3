import React from 'react';

export default function MemeGen() {
    
    return (
        <div className="card">
            <div>
                <input type='text' placeholder='Search Meme...' />
                <button>Create</button>
                <div>
                    <textarea id="top-text"></textarea>
                    Text size: <input type="range" id="top-text-size-input" min="0.05" max="0.25" value="0.15" step="0.01" />
                </div>
                <textarea id="bottom-text"></textarea>
                Text size: <input type="range" id="bottom-text-size-input" min="0.05" max="0.25" value="0.15" step="0.01" />
            </div>
            <input type="file" id="image-input" accept="image/*" />
            <button id="generate-btn">Generate!</button>

            <canvas id="meme-canvas" title="Right click to save this meme"></canvas>
        </div>
    );
}