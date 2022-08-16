import React from 'react';


const RecipeItem = (props) => {

  return (
    <div className="recipesContainer">
      <div className="recipeContent">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button className="deleteBtn btn">Delete</button>
      <button className="deleteBtn btn">Edit</button>
    </div>
  );
};

export default RecipeItem;