import React from "react";
import './styles/About.css'
import upquote from '../images/Vector_upquote.png'
import downquote from '../images/Vector_downquote.png'
import girlimg from '../images/girlnameimg.png'

export default function About() {

   return(
      <main>
         <div className="first_div">
            <p className="text_">What our clients say</p>
            <p className="text_i">Read reviews from our past clients about our services.</p>

            <div className="main_div">

               <div className="right">

                  <div className="quote">
                  <img className="upquote" src={upquote} alt='upquote'></img>

                  <p className="quoted_text">
                     I can't say enough good things about this healthcare service. The staff is always friendly and welcoming, and the doctors are top-notch.  I highly recommend this service to anyone in need of high-quality, affordable healthcare.
                  </p>
                  <img className="downquote" src={downquote} alt='downquote'></img>
                  </div>
                  <p className="name">-Tamara Banks, NY.</p>
               </div>

               <div className="left">
               <img className="girlimage" src={girlimg} alt='a girl image'></img>
               </div>
               
            </div>
         </div>

      </main>
      
   )
}