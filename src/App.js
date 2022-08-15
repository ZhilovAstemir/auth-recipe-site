import './App.css';
import React from "react";
import "./styles/main.css";
import "./styles/LoginPage.css";

function App() {
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
              or<a href="/src/Registration.jsx"> Sign up</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
