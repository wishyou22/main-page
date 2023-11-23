import React from "react";
import Features from "./Features";
import img1 from "../Assets/About-us IMG1.png";
import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <div className="content-div">
        <div className="content-div1">
          <div>
            <h1>ABOUT</h1>
          </div>
          <div>
            <h1  className="content-div-h1">IDUR ACADEMY</h1>
          </div>
          <div>
            <h3>
              At idur acadmey, we belive that eduction is the corner stone of
              personal and societial growth . our mission is to empoer learners
              of all ages in bagrounds with the tools they need to thrive in an
              ever - evolving world. as passionate advocated of knowledge, we've
              created a dyna,ic and innovative education application that
              transforms learning into the engagging and rewarding adventure
            </h3>
          </div>
        </div>
        <div className="content-div2">
          <img src={img1}></img>
        </div>
      </div>
      <div className="managment-div1">
      <div>

      </div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      <div className="managment-div1">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
  );
};

export default AboutUs;
