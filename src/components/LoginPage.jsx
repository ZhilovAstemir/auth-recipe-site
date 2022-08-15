import React from 'react';
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login Page</h1>
            <div>
              <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="user password" className="name"/>
            </div>
            <div className="login-btn">
              <button>Login</button>
            </div>

            <p className="link">
              or<a href="#"> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;