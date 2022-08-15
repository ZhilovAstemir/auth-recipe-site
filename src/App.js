import React from 'react';
import "./App.css"
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";


function App() {
  return (
    <>
      <div className="app-div">
        <button className="initial-btn"><Link to="/">Home</Link></button>
        <button className="initial-btn"><Link to="/login">Log In</Link></button>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App;
