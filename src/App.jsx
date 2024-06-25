import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import PrivacyPolicy from './components/PrivacyPolicy';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');

  const [btnText, newbtnText] = useState('Enble Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      newbtnText("Enble Light Mode")
      showAlert("Dark Mode Has Been Enable", "success");
      setInterval(() => {
        document.title = " SIt - Admission";
      }, 2000);
      setInterval(() => {
        document.title = " SIt - BS.C IT";
        
      }, 1500);
    } else {
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Enble Dark Mode")
      showAlert("Light Mode Has Been Enable", "success");
    }
  }
  const router=createBrowserRouter([
    {
      path:'/Home',
      element:<>
      <Navbar title="SIT" aboutText="Contact  Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      </>
  },
  {
    path: 'PrivacyPolicy',
    element: <>
    <Navbar title="SIT" aboutText="Contact  Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
    <PrivacyPolicy />
    </>
  }
])
  return (
    <>
      <RouterProvider/>
    </>
  );
}

export default App;