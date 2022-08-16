import React, {useState} from 'react';
import CreatRecipe from "../modals/CreatRecipe";

const Recipes = () => {
  const [modal, setModal] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveRecipe = (recipeObj) => {
    let tempList = recipeList;
    tempList.push(recipeObj);
    setRecipeList(tempList);
    setModal(false);
  }

  return (
    <>
      <div className="header text-center">
        <h3>Recipes List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Recipe</button>
      </div>
      <div className="recipe-container">
        {recipeList.map((obj) => <li>{obj.Name}</li>)}
      </div>
      <CreatRecipe toggle={toggle} modal={modal} save={saveRecipe}/>
    </>
  );
};

export default Recipes;