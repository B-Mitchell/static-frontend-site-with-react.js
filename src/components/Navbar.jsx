import React from "react";
import './styles/navbar.css'
import logoImg from '../images/game-icons_stethoscope.png'

function Navbar() {

   return(
      <nav>
         <div className="logo">
         <h2>AccessMed</h2>
         <img src={logoImg} alt='stethoscope' className="stethpng"></img>
         </div>

         <ul className="ul">
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
         </ul>

         <div className="buttonC">
            <button className="loginB">Log In</button>
            <button className="goaB">Get Our App</button>
         </div>
      </nav>
   )

}

export default Navbar