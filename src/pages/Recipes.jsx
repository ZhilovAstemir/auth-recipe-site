import React from 'react';
import "../styles/Recipes.css"
import RecipeItem from "./RecipeItem";
import {recipes} from "../shared/projectData";

const Recipes = () => {

  const recipesPost = recipes.map((item) => {

    return (
      <RecipeItem
        key={item.id}
        title={item.title}
        description={item.description}
      />
    )
  })

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