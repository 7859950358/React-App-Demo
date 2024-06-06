import React, { useState } from 'react';

export default function TextForm() {
    const [text, setText] = useState("Input Your Text Here");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }
    const handleClear = () => {
        let newText = "";
        setText(newText)
    }
    return (
        <div>
            <div class="container my-3">
                <h3>Enter your Analyse Below</h3>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
                <br /><br />
                <button type='btn' className='btn btn-outline-success' onClick={handleUpChange}>Click to get Upper Case</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='btn' className='btn btn-outline-primary' onClick={handleLoChange}>Click to get Lower Case</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='btn' className='btn btn-outline-info' onClick={speak}>Speak</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='btn' className='btn btn-outline-dark' onClick={handleClear}>Clear</button>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br /><br /><br />
            <div className='container my-3'>
                <h2>See Your Summary</h2>
                <p>{text.split(" ").length}&nbsp;Words</p>
                <p>{text.length}&nbsp;characters</p>
                <p>{0.008 * text.split("").length} Reading Time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
