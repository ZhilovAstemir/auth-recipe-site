import React from 'react';
import "./App.css"
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Recipes from "./pages/Recipes";


function App() {
  return (
    <>
      <div className="app-div">
        <button className="initial-btn"><Link to="/resipes">Home</Link></button>
        <button className="initial-btn"><Link to="/login">Log In</Link></button>
        <button className="initial-btn"><Link to="/signin">Sign in</Link></button>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signin" element={<Registration/>}/>
        <Route path="/resipes" element={<Recipes/>}/>
      </Routes>
    </>
  )
}

export default App;
