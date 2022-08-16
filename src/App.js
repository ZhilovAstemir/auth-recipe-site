import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Recipes from "./pages/Recipes";


function App() {

  return (
    <>
      <div className="app-div">
        <button className="btn btn-primary m-2"><Link to="/resipes">Home</Link></button>
        <button className="btn btn-primary m-2"><Link to="/login">Log In</Link></button>
        <button className="btn btn-primary m-2"><Link to="/signin">Sign in</Link></button>
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
