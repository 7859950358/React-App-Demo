import React, { useState } from 'react'

export default function TextArea(props) {
    const [text ,setText] = useState("Input Your Text Here");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpChange = () => {
        let newText = (text.toUpperCase());
        setText(newText)
    }

    const handleLoChange = () => {
        let newText = (text.toLowerCase());
        setText(newText)
    }

    const handleClear = () => {
        let newText = ("");
        setText(newText)
    }

    const handleCopy = () => {
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleESpace = () => {
        let newText =text.split(/[" "] + /);
        setText(newText.join(" "));
    }

    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText);
    }
    return (

        <div className="container my-5">
            <h1>{props.heading}</h1>
            <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            <br />
            <button type='btn' className='btn btn-outline-info mx-3' onClick={handleUpChange}>Upper Case</button>
            <button type='btn' className='btn btn-outline-info mx-3' onClick={handleLoChange}>Lower Case</button>
            <button type='btn' className='btn btn-outline-info mx-3' onClick={handleClear}>Clear</button>
            <button type='btn' className='btn btn-outline-info mx-3' onClick={handleCopy}>Copy</button>
            <button type='btn' className='btn btn-outline-info mx-3' onClick={handleESpace}>Remove Extra Space</button>
            <button type='btn' className='btn btn-outline-info mx-3' onClick={handleSpeak}>Speak</button>
            <br /><br /><br />
            <h2>Text Summary</h2>
            <p>{text.split(" ").length}&nbsp;&nbsp;&nbsp;Words</p>
            <p>{text.length}&nbsp;&nbsp;&nbsp;Charackters</p>
            <p>{0.008 * text.split("").length}&nbsp;&nbsp;&nbsp;reading Speed</p>
        </div>
    )
}
