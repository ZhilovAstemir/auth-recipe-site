import {Link} from "react-router-dom";
import React from 'react';
import "../styles/main.css"
import "../styles/LoginPage.css"


const LoginPage = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login Page</h1>
            <div>
              <input type="text" placeholder="user email" className="name"/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="user password" className="name"/>
            </div>
            <div className="login-btn">
              <button className="login-btn btn">Login</button>
            </div>
            <p className="link">
              or<Link to="/signin"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;