import React from 'react';
import "../styles/main.css";
import '../styles/Registration.css'

const Registration = () => {
  return (
    <div className="register-form main">
      <div  className="registration">
        <form>
          <h1>Registration</h1>
          <input type="text" className="name" name="myName" placeholder="Enter your first name..."/>
          <input type="text" className="name" name="myLastMame" placeholder="Enter your last name..."/>
          <input type="email" className="name" name="myEmail" placeholder="Enter your email..."/>
          <input type="password" className="name" name="myNPassword" placeholder="Enter your password..."/>
          <button className="registration-btn">Confirm</button>
          <button className="registration-back-btn">Back</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;