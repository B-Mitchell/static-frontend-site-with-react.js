import React from "react";
import './styles/infosection.css'
import hospital_building from '../images/hospital_building.png'

export default function InfoSec() {

   return(

      <section className="section_main">
         <div className="containersec">
            
         <div className="sec1">

            <p className="sec1mainText">
               Find Medical Centers Close to You
            </p>
            <p className="sec1subText">
            Looking for a health center near you? Our directory can help you find the nearest facility, whether it's a hospital, clinic, or pharmacy. Simply enter your zip code or city and state, and we'll provide a list of options in your area
            </p>
            <form action="#">
               <div className="form_float">
                  <input className="inputtags" placeholder="Enter your city"/>
                  <input className="inputtags" placeholder="Enter your state"/>
               </div>
               <button className="formbutton" type="submit">Search for nearby Centres</button>
            </form>

         </div>

         <div className="sec2">
            <img className="hospital_building" src={hospital_building} alt="hospital" ></img>
         </div>

         </div>
         
         
      </section>
   )
   
}