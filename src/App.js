import React, { useCallback, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Recipes from "./pages/Recipes";


function App() {
  const [checkState, setCheckState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(Boolean(user));
    },
    [checkState],
  )

  const handleLogOut = useCallback(
    () => {
      localStorage.setItem('user', '');
      setCheckState((prev) => !prev);
    },
    [],
  )

  return (
    <>
      <div className="app-div">
        <button className="btn btn-primary m-2"><Link to="/resipes">Home</Link></button>
        {isLoggedIn ? (
          <button className="btn btn-primary m-2" onClick={handleLogOut}>Log Out</button>
        ) : (
          <>
            <button className="btn btn-primary m-2"><Link to="/login">Log In</Link></button>
            <button className="btn btn-primary m-2"><Link to="/signin">Sign in</Link></button>
          </>
        )}
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage changeState={setCheckState} />}/>
        <Route path="/signin" element={<Registration/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
      </Routes>
    </>
  )
}

export default App;
