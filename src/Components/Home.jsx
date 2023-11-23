import React from "react";
import img1 from "../Assets/Untitl.jpg";
import img2 from "../Assets/Untitled-1.jpg";
import img3 from "../Assets/Untitled-1c.jpg";
import img4 from "../Assets/11.jpg"
import img5 from "../Assets/2.jpg"
import img6 from "../Assets/3.jpg"
import img7 from "../Assets/4.jpg"
import img8 from "../Assets/5.jpg"
import img9 from "../Assets/6.jpg"
import img10 from "../Assets/7.jpg"
import Card from "./Card";
import "./Home.css";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";




const Home = () => {
  const gallery=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
  const[image,setImage]=useState(gallery[0])
  function change(){
    const i=  Math.floor(Math.random()*10)
  console.log(i)
    setImage(gallery[i])
  }


  
  
 return (
    <div>
      <div className="main-div1">
      <div className={image ? "toggle":"notToggle"}  >
      <div >
        
        </div>
      </div>
        <div className="less-then-div" onClick={change}>&lt;</div>
        <img className="image-div" src={image}  alt="apic"/>
        <div className="less-thn-div"  onClick={change} >&gt;</div>
      </div>
      <div className="middile-div">
        <div><img className=" middile-div-image" src={img3} alt="a mid pic"/></div>
        <div>
          <div className="main-card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div className="children-div">
      <div className="children-div1"></div>
      <div className="children-div2"></div>
      <div className="children-div3"></div>
      <div className="children-div4"></div>
      
      </div>
    </div>
  );
};

export default Home;
 