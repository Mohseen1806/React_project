import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042745';
      showAlert("Dark mode has been enables !", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enables !", "success")
    }

  }
  return (
    <>
      <Navbar title="Mohseen" about="about Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">     
      <About heading='About Us' />
      <TextForm heading='Enetr the Text to Analyze' mode={mode} showAlert={showAlert} />
      </div >
      </>
  );
}

export default App;
