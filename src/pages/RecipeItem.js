import React from 'react';

const RecipeItem = (props) => {
  return (
    <div>
      <div className="recipeContent">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button className="deleteBtn">Delete</button>
    </div>
  );
};

export default RecipeItem;