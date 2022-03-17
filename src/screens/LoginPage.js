import React, { Component } from "react";
import Navbar from "../components/Navbar";
import EndFooter from "./EndFooter";
import './Login.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      password:''
    };
  }
  render() {
    return (
      <form >
          <Navbar/>
          <div className="loginpage">
        <div className="login_header">
          <h1 className="ld">Login Details</h1>
        </div>
        <div className="login_fields">
          <div className="f">
          <input className="btn-login ip1 mail" value={this.state.input} type="email" placeholder="Email" />
          </div>
          <div className="f">
          <input  className="btn-login ip2 pass" value={this.state.password} type="password" placeholder="Password" />
          </div>
          <div className="f">
          <input className="cb"  type="checkbox" value="lsRememberMe" id="rememberMe" />
          <label className="cbn" for="rememberMe">Remember me</label>
          </div>
          <button className="f btn-login btn-log-btn"><h3 className="login_p">LOGIN</h3></button>
          <h3 className="f fp">Forgot Password?</h3>
        </div>
        </div>
        <EndFooter/>
      </form>
    );
  }
}

export default LoginPage;