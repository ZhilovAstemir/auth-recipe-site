import {Link} from "react-router-dom";
import React, {useState} from 'react';
import "../styles/main.css"
import "../styles/LoginPage.css"
import {users} from "../shared/projectData";


const LoginPage = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("You are not logged in.");

  const emailHandler = (e) => {
    setUserEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    setUserPassword(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    let userDate = [userEmail, userPassword];
    let checkUsers = users.map((el) => el.filter((el, ind) => ind === 2 || ind === 3));
    let loggedIn = checkUsers.some((el, ind) => el[ind] === userDate[ind]);
    if (loggedIn) {
      setIsLoggedIn("You logged in.");
    } else {
      setIsLoggedIn("Invalid data, try again.");
    }
  }

  return (
    <div className="main register-form">
      <div className="sub-main">
        <div>
          <div>
            <h1 className="register-h1">Login Page</h1>
            <div>
              <input type="email" onChange={e => emailHandler(e)} placeholder="user email"
                     className="name register-input"/>
            </div>
            <div className="second-input">
              <input type="password" onChange={e => passwordHandler(e)} placeholder="user password"
                     className="name register-input"/>
            </div>
            <div className="login-btn">
              <button className="btn btn-primary m-2 login-btn" onClick={login}>Login</button>
            </div>
            <p className="link">
              or<Link to="/signin" className="login-link"> Sign up</Link>
            </p>
            <p className="login-text">{isLoggedIn}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;