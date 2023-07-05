import React, { useState } from 'react'

function TextForm(props) {
    const Upper =()=>{
        setText(text.toUpperCase())
    }
    const Lower =()=>{
        setText(text.toLowerCase())
    }
    
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const Clear = ()=>{
        setText("")
    }

    const RemoveSpaces = ()=>{
        setText(text.replace(/\s/g,''))
    }

    const[text,setText] = useState("")

  return (
    <React.Fragment>
    <div className="container-fluid">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} rows="3" onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={Upper}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={Lower}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={Clear}>Clear Text</button>
        <button className='btn btn-primary' onClick={RemoveSpaces}>Remove Spaces</button>
    </div>
    <div className='container-fluid'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*(text.split(" ").length)} minutes to read</p>
    </div>
    </React.Fragment>
  )
}

export default TextForm