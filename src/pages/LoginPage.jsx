import { Link, useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import "../styles/main.css"
import "../styles/LoginPage.css"

const LoginPage = ({ changeState }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("You are not logged in.");

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setUserEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    setUserPassword(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const logginedUser = users.find((user) => user[2] === userEmail && user[3] === userPassword);
    if (logginedUser) {
      setIsLoggedIn("You logged in.");
      localStorage.setItem('user', JSON.stringify(logginedUser));
      changeState((prev) => !prev);
      navigate("/recipes", { replace: true });
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