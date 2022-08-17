import React, {useEffect, useState} from 'react';
import "../styles/main.css";
import '../styles/Registration.css';
import {Link} from "react-router-dom";
import {users} from "../shared/projectData";


const Registration = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [firstNameError, setFirstNameError] = useState("This field can't be empty");
  const [lastNameError, setLastNameError] = useState("This field can't be empty");
  const [passwordError, setPasswordError] = useState("This field can't be empty");
  const [emailError, setEmailError] = useState("This field can't be empty");
  const [formValid, setFormValid] = useState(false);
  const [isRegistered, setIsRegistered] = useState("You have not registered yet.")

  useEffect(() => {
    if (firstNameError || lastNameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [firstNameError, lastNameError, emailError, passwordError]);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
    if (event.target.value.length >= 2) {
      setFirstNameError("");
    } else {
      setFirstNameError("invalid name");
    }
  }

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
    if (event.target.value.length >= 1) {
      setLastNameError("");
    } else {
      setLastNameError("invalid last name");
    }
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 3) {
      setPasswordError("you have too week password");
    } else {
      setPasswordError("");
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  }

  const setUpToNothing = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  const confirmData = (e) => {
    e.preventDefault();
    localStorage.setItem("users", JSON.stringify(users));
    users.push([firstName, lastName, email, password]);
    setIsRegistered("You have registered.");
    setUpToNothing();
    console.log(users);
  }

  return (
    <div className="register-form main">
      <div className="registration">
        <form className="register-form">
          <h1 className="register-h1">Registration</h1>
          {(firstNameDirty && firstNameError) && <div className="alert" style={{color: "red"}}>{firstNameError}</div>}
          <input onChange={e => firstNameHandler(e)} onBlur={e => blurHandler(e)} id="nameInput" value={firstName}
                 type="text"
                 className="name register-input" name="firstName"
                 placeholder="Enter your first name..."/>

          {(lastNameDirty && lastNameError) && <div className="alert" style={{color: "red"}}>{lastNameError}</div>}
          <input onChange={e => lastNameHandler(e)} onBlur={e => blurHandler(e)} id="lastNameInput" value={lastName}
                 type="text"
                 className="name register-input" name="lastName"
                 placeholder="Enter your last name..."/>

          {(emailDirty && emailError) && <div className="alert" style={{color: "red"}}>{emailError}</div>}
          <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} id="emailInput" value={email} type="email"
                 className="name register-input" name="email"
                 placeholder="Enter your email..."/>

          {(passwordDirty && passwordError) && <div className="alert" style={{color: "red"}}>{passwordError}</div>}
          <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} id="passwordInput" value={password}
                 type="password"
                 className="name register-input" name="password"
                 placeholder="Enter your password..."/>

          <button className="btn btn-primary mt-3 register-btns" onClick={confirmData} disabled={!formValid}
                  type="submit">Confirm
          </button>
          <button className="btn btn-secondary mt-2  register-btns"><Link to="/login">Back</Link></button>
          <p className="register-text">{isRegistered}</p>
        </form>
      </div>
    </div>
  );
};

export default Registration;