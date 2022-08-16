import {Link} from "react-router-dom";
import React from 'react';
import "../styles/main.css"
import "../styles/LoginPage.css"


const LoginPage = () => {

  return (
    <div className="main register-form">
      <div className="sub-main">
        <div>
          <div>
            <h1 className="register-h1">Login Page</h1>
            <div>
              <input type="text" placeholder="user email" className="name register-input"/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="user password" className="name register-input"/>
            </div>
            <div className="login-btn">
              <button className="btn btn-primary m-2 login-btn">Login</button>
            </div>
            <p className="link">
              or<Link to="/signin" className="login-link"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;