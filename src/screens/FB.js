import React from "react";
import Navbar from "../components/Navbar";
import fb from "../images/fb.svg";
import EndFooter from "./EndFooter";
import "./FB.css";

const FB = () => {
  return (
    <div>
      <Navbar />
      <div className="fb_logo">
        <img src={fb} alt="fb" />
        <h4 className="fb_h4">FEATURES & BENEFITS</h4>
        <h1 className="fb_h1">A GAME PLAN FOR GROWTH: WORK SMART.</h1>
        <h1 className="fb_h1">WORK EASY. PARTNER WITH LXRGUIDE.</h1>
        <h4 className="fb_p p1">It is not easy to stay online and concentrate on paid search all the time. There are so many other</h4>
        <h4 className="fb_p">pressing tasks for entrepreneurs and marketing managers. Let LXRGuide handle the difficult and</h4>
        <h4 className="fb_p">time-consuming tasks, while you stay in charge.</h4>    
      </div>
      <EndFooter/>
    </div>
  );
};

export default FB;
