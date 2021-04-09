import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {

     return (
          <div className="header-container">
               <div className="name-container">ALEX FOREMAN</div>
               <div className="page-options-container">
                <Link className="page-option" to="/about">
               ABOUT 
               </Link>
               <Link className="page-option" to="/projects">
               PROJECTS
               </Link> 
               <Link className="page-option" to="/contact">
               CONTACT
               </Link>      
               </div>
          </div>
     )


}

export default Nav