import React from 'react';
import "../styles/Recipes.css"
import {recipesPost} from "../shared/functions";

const Recipes = () => {

  return (
    <>
      <h1>Recipes</h1>
      <div className="recipes">
        {recipesPost}
      </div>
    </>
  );
};

export default Recipes;