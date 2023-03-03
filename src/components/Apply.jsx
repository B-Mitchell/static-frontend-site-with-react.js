import React from "react";
import './styles/apply.css'
import grouptherapy from '../images/grouptherapy.png'

export default function Apply() {

   return(
      <section className="section_Apply">

         <div className="container_Apply">
            <div className="div1_Apply">
               <p className="div1_ApplyMtext">
                  Book a consultation with us today
               </p>

               <p className="div1_ApplyStext">
                  Book a consultation session today with our team of medical professionals is here to assist you with all of your healthcare needs.
               </p>

               <button className="Apply_button">
                  <a href="#">
                     Book a Consultation
                  </a>
               </button>
            </div>

            <div className="div2_Apply">
               <img src={grouptherapy} alt="image of group therapy"></img>
            </div>
         </div>

      </section>
   )

}