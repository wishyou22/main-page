import React from "react";
import "./Footer.css";
import logo from "../Assets/IDUR Academy PNG.png";
import footerimg1 from "../Assets/footer-image1.jpg";
import logo1 from "../Assets/Stroke logo.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="upper-footer-div">
      <div>
        <div className="transparent-div">

        </div>
       
        <div className="footer-div-image">
          <img src={footerimg1} />
        </div>
      </div>
      <div className="footer-div">
        <div className="footer-div1">
          <div>
            <img src={logo1} className="logo-image1" />
          </div>
          <div>
            <h4>Stay connected with us</h4>
          </div>
          <div className=" conection-div">
            <div>
              <a href="https://www.instagram.com/iduracademy/" target="blank">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/idur-global-tech-solutions-pvt-ltd/"
                target="blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a href="">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61550020842162"
                target="blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-div2">
          <div>
            <h3>Download the app</h3>
          </div>
         <a className="test" href="https://play.google.com/store/apps/details?id=com.iduracademylearning&pcampaignid=web_share" target="blank"> 
          <div className="download-div">
         <div className="playstore">
           <BiLogoPlayStore size={50} />
         </div>
         <div className="right-playstore">
           <div className="upper-right">
             <h5>Get it on</h5>
           </div>
           <div className="Google-play">Google Play</div>
         </div>
       </div></a>
          <div className="download-div">
            <div className="playstore">
              <FaApple size={50} />
            </div>
            <div className="right-playstore">
              <div className="upper-right">
                <h5>Comming soon</h5>
              </div>
              <div className="Google-play">Apple Store</div>
            </div>
          </div>
        </div>

        <div className="footer-div4">
          <div>
            <h3>Get in touch</h3>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i> No 84, Nost Building, 13th
            Cross, Post, Ganga Nagar, RT Nagar, Bengaluru, Karnataka 560032
          </div>
          <div>
            <i class="fa-solid fa-phone"></i> +91 8073249800
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i> contact@iduracademy.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
