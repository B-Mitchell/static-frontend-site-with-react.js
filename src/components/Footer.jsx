import React from "react";
import './styles/footer.css'
import min_stethoscope from '../images/min_stethoscope.png'
import app_store_badge from '../images/app_store_badge 1.png'
import play_store_badge from '../images/google_play_badge 1.png'

export default function Footer() {

   return(
      <footer>

         <div className="top_footer">
            <div className="top_footer_flexLeftBlock">
            <div className="top_footer_flexLeft">
               <ul>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Consultations</a></li>
                  <li><a href="#">Medical Care</a></li>
                  <li><a href="#">Recommendations</a></li>
               </ul>

               <ul>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Premium</a></li>
                  <li><a href="#">Insurance</a></li>
               </ul>

               <ul>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
               </ul>

               <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Vision</a></li>
               </ul>

            </div>
            </div>
            <div className="top_footer_flexRight">

               <p className="top_footer_flexRight_Mtext">
                  Get health Updates right in your inbox
               </p>
               <p className="top_footer_flexRight_Stext">
                  Subscribe to our newsletter to stay informed about the latest health news and updates and also get expert advice and tips.
               </p>
               <form action="#" className="footer_form">
                  <input placeholder="Enter your Email address" />
                  <button>Subscribe</button>
               </form>

            </div>

         </div>

         <div className="bottom_footer">
            <div className="mainName_footer">
               <p className="mainname_footerText">AccessMed</p>
               <img src={min_stethoscope} alt="small sthethoscope" />
            </div>

            <div className="bottom_footerM2">
               <p>&copy;2017 - 2022 AccessMed. All Rights Reserved</p>

               <div className="bottom_footerM3Policies">
                  <p className="firstchild">Terms and Conditions</p>  
                  <p className="secondchild">Privacy Policy</p>
               </div>

               <div>
                  <a href="#"><img src={app_store_badge} alt="Appstore badge" /> </a>
                  <a href="#"><img src={play_store_badge} alt="Playstore badge" /> </a>
               </div>
            </div>
         </div>

      </footer>
   )

}