import React from 'react';

const Registration = () => {
  return (
    <div className="register-form">
      <form action="">
        <h1>Registration</h1>
        <input type="text" name="myName" placeholder="Enter your first name..."/>
        <input type="text" name="myLastMame" placeholder="Enter your last name..."/>
        <input type="email" name="myEmail" placeholder="Enter your email..."/>
        <input type="password" name="myNPassword" placeholder="Enter your password..."/>
      </form>
    </div>
  );
};

export default Registration;