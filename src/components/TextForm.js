import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked ");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("handle copy text working");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleFormat = () => {
    console.log("Format buttobn working");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("text here");

  // const [textarea] = useState('Text here');
  // text = "new text";    // Wrong weay to change the state
  // setText("new text");     //right way to change the state

  return (
    <> 
      {/* problem **------------- */}
      {/* {`container ${props.mode} bg-${props.mode}`} */}
      <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>

        <div className="mb-3 ">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange} style = {{backgroundColor: props.mode ==='dark'? 'grey': 'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-success my-1 mx-1 " onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn btn-dark my-1 mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success my-2 mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className ="btn btn-success" onClick={handleFormat}>
          Format
        </button>
        
      </div>

      <div className="container my-3" style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read it</p>
      </div>
      <div>
        <h1 style = {{color: props.mode ==='dark'?'white':'black'}}>preview of the text  </h1>
        <p style = {{color: props.mode ==='dark'?'white':'black'}}>{text}</p>
      </div>
    </>
  );
}
