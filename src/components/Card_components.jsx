import React from "react";
import './styles/card_component.css'
import femaleDocImg from '../images/female doctor.png'
import msgImg from '../images/msg.png'
import backImg from '../images/backImg_card.png'
import starPng from '../images/star.png'

function card_component() {

   return (
      <section className="card_comp">
         <article className="card_comp_article">
            <h3 className="card_comp_h3">Meet Our Experts</h3>

            <p className="card_comp_text">
               Our team is made up of doctors, nurses, and other medical professionals who are experts in their respective fields. We are confident that you will receive the highest quality care when you choose us for your healthcare needs.
            </p>
         </article>

         <div
         className="card_container">

            <div className="cards">
               <img className="backImg_card" src={backImg} alt="backImg"></img>
               <img className="femaleDocImg" src={femaleDocImg} alt="female doctor"></img>

               <div className="text_card">

                  <p className="name_card">Dr Jane Cooper</p>

                  <span className="name_card_link">
                     <p>
                        <a href="#">View schedule</a>
                     </p>
                     <img src={msgImg} alt="msg img"></img>
                        
                  </span>
               </div>

               

               <p className="medTag">Senior physician</p>
               <div className="starCont">
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <span className="rating">(80)</span>
               </div>

               <p className="yearSpent">5+ years of experience in Pediatrics.</p>

            </div>

            <div className="cards">
               <img className="backImg_card" src={backImg} alt="backImg"></img>
               <img className="femaleDocImg" src={femaleDocImg} alt="female doctor"></img>

               <div className="text_card">

                  <p className="name_card">Dr Jane Cooper</p>

                  <span className="name_card_link">
                     <p>
                        <a href="#">View schedule</a>
                     </p>
                     <img src={msgImg} alt="msg img"></img>
                        
                  </span>
               </div>

               

               <p className="medTag">Senior physician</p>
               <div className="starCont">
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <span className="rating">(80)</span>
               </div>

               <p className="yearSpent">5+ years of experience in Pediatrics.</p>

            </div>

            <div className="cards">
               <img className="backImg_card" src={backImg} alt="backImg"></img>
               <img className="femaleDocImg" src={femaleDocImg} alt="female doctor"></img>

               <div className="text_card">

                  <p className="name_card">Dr Jane Cooper</p>

                  <span className="name_card_link">
                     <p>
                        <a href="#">View schedule</a>
                     </p>
                     <img src={msgImg} alt="msg img"></img>
                        
                  </span>
               </div>

               

               <p className="medTag">Senior physician</p>
               <div className="starCont">
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <img src={starPng} alt="star image"></img>
                  <span className="rating">(80)</span>
               </div>

               <p className="yearSpent">5+ years of experience in Pediatrics.</p>

            </div>

            

         </div>
         <p className="link_experts"><a href="#">See all Experts</a></p>
      </section>
   )
}

export default card_component