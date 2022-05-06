import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/AboutUs";

function App() {
  return (
   <div> 

    <header> 
    <nav>
      <Link to="/">Go Home</Link>
      <Link to="/signup"> Signup  </Link>
      <Link to="/aboutus"> About Us  </Link>
      <Link to="/contacts"> Contacts  </Link>
      
    </nav>
     
  </header>



    
      <Routes></Routes>
    </div>
  );
}

export default App;
