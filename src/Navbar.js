import './Navbar.css'
import { useState } from 'react';
import { useEffect } from "react";

export function Navbar() {

  return (
  
   <nav >
       <ul>    
        <li><a href="#container-firstpage">Home</a></li> 
        <li><a href="#about"> About</a></li> 
        <li><a href="#journey"> Journey</a></li> 
        <li> <a href="#projects">Project</a></li>
        <li><a href="#skills"> Skills</a></li> 
         <li><a href="#footer"> Contact</a></li> 
      </ul>
      </nav>



  );
}




 
