import React, { useState } from 'react';

export default function TextForm(props) {

      const handleUpClick=()=>{
      //console.log("uppercase was clicked:"+ text);
      let newtext=text.toUpperCase();
       settext(newtext)
       props.showAlert("coverted to the UpperCase","success")
  }
   const handleLoClick=()=>{
      //console.log("uppercase was clicked:"+ text);
      let newtext=text.toLowerCase();
       settext(newtext)
        props.showAlert("coverted to the Lowercase","success")
  }

  const handleExtraSpaces = () => {
  let newText = text.replace(/\s+/g, ' ').trim();
    settext(newText);
     props.showAlert("Remove  to ExtraSpaces","success")
}

const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied to clipboard!","success");
  document.getSelection().removeAllRanges()
}

  
  const handleClearClick = () => {
  settext('');
    props.showAlert("Text cleared!","success");
}


        const handleOnchange=(event)=>{
      //console.log("On change");
      settext(event.target.value)
  }

  const [text, settext] = useState('');

  return (
    <div>
      <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  {props.heading}
</h1>
      <div className="mb-3">
        <label htmlFor="Mybox" className="form-label"></label>
        <textarea
          className="form-control"
          id="Mybox"
          onChange={handleOnchange}
          rows="8"
          value={text}
        ></textarea>
       <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
  Convert to Uppercase
</button>
 <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
  Convert to Lowercase
</button>
 <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
  cleartext
</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
  Remove Extra Spaces
</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
 copy Text
</button>
      </div>
    <div className="container" my-3>
    <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text summary</h1>
  <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    {text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters
  </p>
  <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    {0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length} Minutes read
  </p>
  <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
        <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length>0?text:"Enter something in the textbox above to preview it here"} </p>
    </div>
    </div>
  );
}
