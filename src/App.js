import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar title="TextUtils"/>
    <div className='container my-3'> 
    
      <Routes>
          <Route path="/about" element={<About/>}/>
          
          <Route path="/" element={<TextForm heading="Enter the text to analyze below:"/>}/>
      </Routes>
    </div>
    </Router>
    </React.Fragment>
  );
}

export default App;

