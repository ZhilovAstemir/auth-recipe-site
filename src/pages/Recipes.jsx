import React, {useState} from 'react';
import creatRecipe from "../modals/creatRecipe";

const Recipes = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };


  return (
    <>
      <div className="header text-center">
        <h3>Recipes List</h3>
        <button className="btn btn-primary mt-2">Add Recipe</button>
      </div>
      <div className="recipe-container">

      </div>
      <creatRecipe toggle={toggle} modal={modal}/>
    </>
  );
};

export default Recipes;