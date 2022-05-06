import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Contacts from './components/Contacts';


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

        <Route path='/' element={<About/>}></Route>
        {/* <Route path='/signup' element={<SignUp/>}></Route> */}
        <Route path='/contacts' element={<Contacts/>}></Route>
       
      </Routes>

    </div>

    </div>
  );
}

export default App;
