import React, { Component } from "react";
import Navbar from "../components/Navbar";
import EndFooter from "./EndFooter";
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
      <form>
        <Navbar />
          <div className="signup_data">
            <div className="labels">
              <label for="Name">Name<img className="que" src="https://lxrguide.com/images/help.png" alt='mark'/></label>
              <label className="lab le" for="Email">Email Address<img className="que"  src="https://lxrguide.com/images/help.png" alt='mark'/></label>
              <label className=" lab lp" for="Password">Password<img className="que"  src="https://lxrguide.com/images/help.png" alt='mark'/></label>
              <label className="lab lc" for="Company">Company<img className="que"  src="https://lxrguide.com/images/help.png" alt='mark'/></label>
              <label className="lab ln" for="Phone No">Phone No<img className="que"  src="https://lxrguide.com/images/help.png" alt='mark'/></label>
            </div>
            <div className="inputs">
                <div className="inp">
                <input className="i" type='text'></input>
                </div>
                <div className="inp ie">
                <input className="i" type='email'></input>
                </div>
                <div className="inp ip" >
                <input className="i" type='password'></input>
                </div>
                <div  className="inp ic">
                <input className="i" type='text'></input>
                </div>
                <div className="inp in" >
                <input className="i" type='text'></input>
                </div>
            </div>
            </div>
        <EndFooter />
      </form>
    );
  }
}

export default Signup;
