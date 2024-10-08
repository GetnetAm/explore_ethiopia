import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logomain2 from "../../assets/logomain-2.svg";

function Header() {

    
  return (
    <nav className="navbar">
    <div className="logo">
        <img src={logomain2} alt="Logo" />
        Explore-Ethio
    </div>
    <ul className="nav-links">
        <li><Link className="link" to='/'>Home</Link></li>
        <li><Link className="link" to='/about'>About Us</Link></li>
        
    </ul>
   
</nav>
        

  

    
   
  
  );
}

export default Header;
