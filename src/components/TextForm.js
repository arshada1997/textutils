import React, { useState } from 'react'

export default function TextForm(props) {
 
 const handleUpClick=()=>{
    console.log("onlcilk changed"+text)
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase","success");


 }   

 const handleonChange=(event)=>{
    console.log("onchange clicked")
    setText(event.target.value)
 }

 const heandleLClick=(event)=>
 {
  
  setText(text.toLowerCase())
  props.showAlert("Converted to LowerCase","success");

}
  const handleCopy = async () => {
      await navigator.clipboard.writeText(text);
     // alert('Text copied to clipboard!');
     props.showAlert("Text copied to clipboard!","success");

    
  }

  const removeSpaces=()=>{
     const newStr=text.replace(/\s+/g,' ').trim();
     setText(newStr)
     props.showAlert("Removed Extra Spaces","success");

  }

  const clearText=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text Cleared!","success");

    
  }


 const[text,setText]=useState("")  

 return (
 <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
         <br></br>
    <div class="mb-3" >
     <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#2f425f':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="mybox" onChange={handleonChange} rows="8"></textarea>
    </div>
    
  <div className="input-group mb-3" style={{backgroudColor:props.mode==='#042743'?'white':'#042743'}}>

  <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
  <button className="btn btn-primary mx-1" onClick={heandleLClick}>LowerCase</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-1" onClick={removeSpaces}>Remove Spaces</button>
  <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
 </div> 

<div className="container my-3">
  <h2>Your Summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} time to read</p>
</div>
<div className="container">
    <h2>Preview</h2>
    <p>{text.length===0?"Nothing to Preview":text}</p>  
</div>  
 </div>
  )
}
