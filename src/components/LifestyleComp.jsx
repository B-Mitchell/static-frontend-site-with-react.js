import React from "react";
import './styles/lifestyle.css'
import Lifestyleimg from '../images/Lifestyleimg1.png'
import Lifestyleimg2 from '../images/lifestyleimg2.png'
import lifestyleimg3 from '../images/lifestyleimg3.png'

export default function Lifestyle() {

   return (
      <section className="lifestyle_section"> 
         <p className="firstL">Lifestyle Blog</p>
         <p className="secL">
         Discover a wide variety of articles and resources to educate and help you live your best life in best of health
         </p>

         <div className="lifestyleCards">

            <div className="cardoneL">
               <img className="lifestyleimg" src={Lifestyleimg} alt='lifeimg'></img>

               <div className="cardtexts">
               <p className="cardmajText">
               Benefits of physical activities
               </p>
               <p className="cardminText">
               Engaging in physical activities such as walking, running and HIIT cardiovascular workouts have been proven...<a href="#">Read more</a>
               </p>
               </div>
            </div>

            <div className="cardoneL">
               <img className="lifestyleimg" src={Lifestyleimg2} alt='lifeimg'></img>

               <div className="cardtexts">
               <p className="cardmajText">
               Making healthy food choices
               </p>
               <p className="cardminText">
               Sticking to a healthy diet plan might sound easier than it actually is when you could just grab a piece of burger...<a href="#">Read more</a>
               </p>
               </div>
            </div>

            <div className="cardoneL">
               <img className="lifestyleimg" src={lifestyleimg3} alt='lifeimg'></img>

               <div className="cardtexts">
               <p className="cardmajText">
               Flu: when to speak to a doctor
               </p>
               <p className="cardminText">
               Sticking to a healthy diet plan might sound easier than it actually is when you could just grab a piece of burger...<a href="#">Read more</a>
               </p>
               </div>
            </div>

            
         </div>

         <p className="linkforBlog">See all Blog Posts</p>
      </section>
   )
}