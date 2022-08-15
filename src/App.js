import {Routes, Route, Link} from "react-router-dom";
import React from 'react';
import "./styles/main.css";
import "./styles/LoginPage.css";
import Registration from "./pages/Registration";

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
              or<Link to="/register"> Sign up</Link>
            </p>
            <Routes>
              <Route path="/register" element={<Registration/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
