import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const[mode,setMode]= useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background='black'
    } else {
      setMode('light')
      document.body.style.background='white'
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Contact Us" mode ={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter Text To Analyse Below"/>
    </>
  );
}

export default App;
