import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {
  const [mode,setMode]= useState("light");
  const [btn,setbtn]= useState("Enable Dark Mode");

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      setbtn('Enable Dark Mode');
      document.body.style.background='black';
      document.body.style.color='white';
    } else {
      setMode('light');
      setbtn('Enable Light Mode');
      document.body.style.background='white';
      document.body.style.color='black';
    }
  }
  return (
    <div>
      <Navbar title="SIT" aboutText="About Us" mode={mode} btn={btn} toggleMode={toggleMode}/>
      <TextForm heading="Enter Your Text below to Anaylases"/>
    </div>
  )
}
