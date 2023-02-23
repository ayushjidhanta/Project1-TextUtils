import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked ");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("text here");

  // const [textarea] = useState('Text here');
  // text = "new text";    // Wrong weay to change the state
  // setText("new text");     //right way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-success" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        
        <button className="btn btn-dark" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read it</p>
      </div>
      <div>
        <h1>
          preview of the text 
        </h1>
        <p>
          {text}
        </p>
      </div>

    </>
  );
}
