// import {useState, useEffect} from "react";
import './style.css';
// import axios from "axios";
// import raw from "./text.txt";
// import word from "./words.txt";
import Easy from "./levels/easy.js"
import Medium from "./levels/medium.js"
import Hard from "./levels/hard.js"
import Choose from "./levels/choose.js"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return(
    <div>
      
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Choose />} />
            <Route exact path="/easy" element={<Easy />} />
            <Route exact path="/medium" element={<Medium />} />
            <Route exact path="/hard" element={<Hard />} />
            </Routes>
          </BrowserRouter>
    </div>
   
  )
}

export default App;
