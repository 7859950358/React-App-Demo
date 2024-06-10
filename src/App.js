import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const [mode, setMode] = useState('light')
  const [btnText, newbtnText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      newbtnText('Enable Light Mode');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      newbtnText('Enable Dark Mode');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Contact Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
