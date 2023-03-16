import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#272527';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'; 
    }
  }
  return (
    <>
      <Navbar title="Dev. 1" mode = {mode} toggleMode ={toggleMode} aboutText="About TextUtils" />
      <div className="container">
        <TextForm heading="Enter the text to analyse " mode = {mode} />
        <About/>
      </div>
     
    </>
  );
}

export default App;
