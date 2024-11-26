import React from 'react'

export default function About(props) {

 /* A */ //const[btn,setbtn]=useState("Enable dark mode")

 /*  const togglebtn=()=>{
    if(mystyle.color==='white')
    {
        setMyStyle({
            color:'black',
            backgroundColor:'black',
            border:'1px solid white'

        })
        setbtn("Enable Dark Mode")
    }
    else{
        setMyStyle({
            color:'white',
            backgroundColor:'black',

        })
        setbtn("Enable Light Mode")
    }
    }


  */ return (
    <div className="accordion my-3 " id="accordionExample" style={{backgroundColor:props.mode==='dark'?'#042743':'white',borderColor:'#86b7fe',color:props.mode==='dark'?'white':'black'}} >
     <h1 className='About my-3 mx-3'>About Us</h1>
     <p className=' my-5 mx-3'>TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, 
      which definitely makes it a cut above the rest.</p>
      <p className=' my-3 mx-3'>The most eminent features of the website are as follows :</p>
    <div className="accordion-item border-0" style={{border:'1px  042743'}}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse"  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}>
      It is a Simple Text Analyzer , which mutilates your text, but in a tender way

      </div>
    </div>
  </div>
  <div className="accordion-item border-0" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}>
        It is completely free to use. No credit cards required. Use as much as you want!!</div>
    </div>
  </div>
  <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatability
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}>
        It is compatible with all of your favorite browsers.
      </div>
     </div>
     
  </div>
 {/*  <div className="container" style={mystyle}>
      <button className="btn btn-primary my-3" onClick={togglebtn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       {btn}</button>
      </div>
  */}   
</div>)
}
