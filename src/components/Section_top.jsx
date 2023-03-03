import React from "react";
import './styles/section_top.css'
import textImg from '../images/Affordable and accessible healthcare for all.png'
import textInfo from '../images/textInfo.png'
import vectorImg from '../images/Vector 18.png'
import largeImg from '../images/cuate.jpg'
import statsImg from '../images/Frame9.png'

function Section_top() {

   return (
      <div className="container">

         <div className="child_container_one">
            <img src={textImg} alt='imgText'></img>
            <img src={textInfo} alt='imgText'></img>
            
            <div className="child_container_one_button">
               <button className="child_one_button">
                  Book a Consultation
               </button>
            <img src={vectorImg} alt='VectorImg'></img>
            </div>

            <div className="stats-section_top">
               <img src={statsImg} alt='statsImg'></img>
            </div>

         </div>

         <div className="child_container_two">
            <img src={largeImg} alt='Large Image' className="majImg"></img>

         </div>

      </div>
   )
}

export default Section_top
