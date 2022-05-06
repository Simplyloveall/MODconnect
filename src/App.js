import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/AboutUs";
import SignUp from "./components/SignUp";

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



    


    <div>
      <Routes>


        
      </Routes>

    </div>
  );
}

export default App;
