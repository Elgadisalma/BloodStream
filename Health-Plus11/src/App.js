import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Authuser from "./Pages/Authuser";
import Signup from "./Pages/Signup";
import Oudonner from "./Pages/Oudonner";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Authuser/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/search" element={<Oudonner/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
