// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const [state, setstate] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if (mode === 'light' ) {
      setmode('dark');
      setstate('Enable Light Mode')
      document.body.style.backgroundColor = 'black';
    }
    else {
      setmode('light');
      setstate('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Navbar mode={mode} state={ state} toggleMode = {toggleMode} />
  );
}

export default App;
