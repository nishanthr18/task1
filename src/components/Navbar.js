import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import img2 from "../images/img2.png";
import img1 from "../images/img1.png";
import Solution from "./Solution";
import FreeTools from "./FreeTools";
import Resources from "./Resources";

class Navbar extends Component {
  render() {
    return (
      <header className="parent">
        <div className="child1">
          <Link to='/'>
            <img className='logo logo1' src={img2} alt="netelixir"></img>
            </Link>
            <img className='logo logo2' src={img1} alt="netelixir"></img>
          <nav>
            <ul className="header-nav">
              <li><Solution/></li>
              <li><FreeTools/></li>
              <li>PRICING</li>
              <li><Resources/></li>
            </ul>
          </nav>
        </div>
        <div className="child2">
          <Link to="/loginpage">
            <button className="login">Login</button>
            </Link>
            <Link to="/signup">
            <button className="signup">Signup</button>
            </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;

