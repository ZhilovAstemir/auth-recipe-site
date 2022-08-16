import React from 'react';

const RecipeItem = (props) => {

  const deleteRecipe = () => {

  }

  const editRecipe = () => {

  }

  return (
    <div className="recipesContainer">
      <div className="recipeContent">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button className="deleteBtn" onClick={deleteRecipe}>Delete</button>
      <button className="deleteBtn" onClick={editRecipe}>Edit</button>
    </div>
  );
};

export default RecipeItem;