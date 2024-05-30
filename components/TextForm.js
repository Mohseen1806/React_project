import React, { useState } from 'react'

export default function TextForm(props) {
  const headingUpClick = () => {
    // console.log("Upercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Upercase", "success");
  }

  const headingLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to Lowercase", "success");
  }
  const headingClClick = () => {
    let newText = " ";
    setText(newText)
    props.showAlert("Clear Text", "success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking to text", "success");
  }


  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className="mt-3" ><b>{props.heading}</b></h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={headingUpClick}>Uppercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={headingLoClick}>Lowercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={headingClClick}>Cleare</button>
        <button className='btn btn-primary mx-2 my-1' onClick={speak}>Speak</button>
        <dir className="container">
          <h1>Your text Summury</h1>
          <p>{text.split(" ").length - 1} Word and {text.length} caherector</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Priview</h2>
          <p>{text}</p>
        </dir>
      </div>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMoe</label>
</div>

      </div>

    </>
  )
}
