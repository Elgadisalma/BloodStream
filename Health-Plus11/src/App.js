import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointement from "./Pages/Appointement";
import Authuser from "./Pages/Authuser";
import Signup from "./Pages/Signup";
import Oudonner from "./Pages/Oudonner";
import Contactus from "./Pages/Contactus";
import Quest from "./Pages/Quest";
import Quisommes from "./Pages/Quisommes"

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/Appointement" element={<Appointement/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Authuser/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Oudonner" element={<Oudonner/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/Quest" element={<Quest/>}/>
          <Route path="/Quisommes" element={<Quisommes/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
