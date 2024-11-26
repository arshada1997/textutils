
import React,{ useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

    
   const [mode,setMode]=useState('light');

   const [btn,setBtn]=useState('Enable Dark Mode');

   const [alert, setAlert] = useState(null);
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

   const toggleMode=()=>
   {
  //  setMode('dark');
 // setMode((prevMode) => (prevMode === "light" ? "dark" : "light")); // Toggles between light and dark

    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      setBtn('Enable Light Mode');
      showAlert("Dark Mode has been enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setBtn('Enable Dark Mode');
      showAlert("Light Mode has been enabled","success");
    }
  } 
    // Debugging: Log the mode whenever it changes
    useEffect(() => {
      console.log("Mode updated to Ashwini:", mode);
    }, [mode]);
  
  return (
   <> 
    <Router>
     <Navbar title="TextUtils2" mode={mode} btn={btn} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
      {/*   <Navbar/>
      */}  
       {/* <div className="container">
        <h1>Welcome to TextUtils</h1>
      </div> 
      */}

      <div className="container my-3">
       <Routes>
          <Route exact path="/"
          element={<TextForm heading="Enter your text below to analyze"  showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
       }/>
          <Route path="/about"

          element={  <About mode={mode} toggleMode={toggleMode}/>}/>
        
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Routes>
        <br/>
      <div align="center" className="container">
        <p style={{color:mode==='dark'?'white':'black'}}>Build for Practise Purpose...</p>
      </div>
      </div>
  
         {/*   <div className="container my-3">

           <About/>
           </div> 
        */}

    </Router>    
</>
  );
}

export default App;
