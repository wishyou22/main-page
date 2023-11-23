import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../Assets/IDUR cademy PNG.png";
import { useState } from "react";

const Navbar = () => {
 
  const [view, setview] = useState(false);
  function open() {
    setview(!view);
    console.log(view)
  }
  return (
    <div>
      <div className="main-div">
        <div className=" Logo-div">
         
        </div>
        <div className="Right-nav-div">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
          <Link to= "/Products">  Products </Link>
          </div>
          <div>
            
            <Link to="/AboutUs">About Us</Link>
          </div>
         
        </div>
        <div className="hamburger" onClick={open}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className={view ? "notoggle":"toggle-div"}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/AboutUs">About Us</Link>
      </div>
      <div>
        <Link to="/Products"> Products </Link>
      </div>
    
      </div>
    </div>
  );
};

export default Navbar;
