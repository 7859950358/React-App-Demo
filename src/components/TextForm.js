import React,{useState} from 'react'

export default function TextForm(props) {

    const [text , setText]=useState("Input Your Text")
    return (
        <div>
            <div className='mx-5 mb-3 my-5'>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
                <button className='btn btn-outline-success my-3'>convert to upper case</button>
            </div>
        </div>
    )
}
