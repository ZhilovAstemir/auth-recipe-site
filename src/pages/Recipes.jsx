import React, {useEffect, useState} from 'react';
import CreatRecipe from "../modals/CreatRecipe";
import Recipe from "./Recipe";

const Recipes = () => {
  const [modal, setModal] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("recipesList");
    if (arr) {
      let obj = JSON.parse(arr);
      setRecipeList(obj);
    }
  }, [])

  const toggle = () => {
    setModal(!modal);
  };

  const saveRecipe = (recipeObj) => {
    let tempList = recipeList;
    tempList.push(recipeObj);
    localStorage.setItem("recipesList", JSON.stringify(tempList));
    setModal(false);
    setRecipeList(tempList);
  }

  return (
    <>
      <div className="header text-center">
        <h3>Recipes List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Recipe</button>
      </div>
      <div className="recipe-container">
        {recipeList.map((obj, index) => <Recipe recipeObj={obj} index={index}/>)}
      </div>
      <CreatRecipe toggle={toggle} modal={modal} save={saveRecipe}/>
    </>
  );
};

export default Recipes;