import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("Input Your Text");
    // setText("Enter Your Text");

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const hanldeupchange = () => {
        // console.log("Btn click");
        let newText = (text.toUpperCase());
        setText(newText);
    }
    const hanldeInchange = () => {
        // console.log("Btn click");
        let newText = (text.toLowerCase());
        setText(newText);
    }

    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText)
    }

    const hanldeClear = () => {
        // console.log("Btn click");
        let newText = ("");
        setText(newText);
    }
    return (
        <div>
            <div className='container my-5'>
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-outline-success my-3' onClick={hanldeupchange}>convert to upper case</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info my-3' onClick={hanldeInchange}>convert to Lower case</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-primary my-3' onClick={handleSpeak}>Speak</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-danger my-3' onClick={hanldeClear}>clear</button>
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}&nbsp;&nbsp;Words</p>
                <p>{text.length}&nbsp;&nbsp;Characters</p>
                <p>{0.008 * text.split.length}&nbsp;&nbsp;Reading Time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>

    )
}
