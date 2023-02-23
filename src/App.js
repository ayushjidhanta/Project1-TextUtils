import './App.css';

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Dev. 1" aboutText="About TextUtils" />
      <div className="container">
        <TextForm heading="Enter the text to analyse " />
      </div>
      <div className = "container ">
      
      </div>
    </>
  );
}

export default App;
