import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return ( 
  
<div className="Background"> 
<h1>Welcome to Connect and Track!</h1>
<p> Our App is about to keep track of all your contacts you meet in your travels and have it in one place </p>
<Link to="/contacts"> Contacts </Link>
</div>
  );
  
};

export default AboutUs;