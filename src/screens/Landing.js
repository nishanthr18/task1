import React from "react";
import "../App.css";
import FooterButtons from "../components/FooterButtons";
import Navbar from "../components/Navbar";
import img3 from "../images/img3.svg";
import EndFooter from "./EndFooter";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="landing_image">
        <img src={img3} alt="landing page" />
        <h1 className="small_heading">
          GOOGLE ADS, MICROSOFT ADS, SEO TOOLS & EXPERT HELP
        </h1>
        <h1 className="big_heading">PAID SEARCH MANAGEMENT SOLUTION FOR </h1>
        <h1 className="big_heading2"> SMALL AND MID SIZE BUSINESSES</h1>
        <h3 className="para1">Profitably Grow Google and Microsoft Ad Campaigns in 10</h3>
        <h3 className="para2">minutes a week.</h3>
      </div>
      <FooterButtons/>
      <EndFooter/>
    </div>
  );
};

export default Landing;
