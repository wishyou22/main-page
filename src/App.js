import React from "react";
import "./App.css";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Teaching from "./Components/Teaching";
import Learning from "./Components/Learning";
import Products from "./Components/Products";
import logo from "./Assets/IDUR Academy PNG.png"
import Footer from "./Components/Footer";





function App() {
  return (
    <div className="App">
      
      <Router>
      <div className=" Logo-div">
      <img className="logo-image" src={logo} alt="alogo" />
    </div>
      <Navbar/>
  
      <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/AboutUs" element={<AboutUs/>}/>
      <Route path = "/Products" element={<Products/>}/>
      <Route path = "/Teaching" element={<Teaching/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
