import React from 'react';
import { Link} from 'react-router-dom';
import "./header.css";
import logomain2 from "../../assets/logomain-2.svg";

function Header() {


  return (
 


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <div className="logo">
         <img src={logomain2} alt="Logo" />
         Explore-Ethio
    </div>
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar_One">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"  to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link project"  to="/project">View projects</Link>
          </li>
        
         
        </ul>
        
      </div>
    </div>
  </nav>

    
   
  
  );
}

export default Header;
