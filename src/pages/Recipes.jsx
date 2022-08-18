import React, {useEffect, useState} from 'react';
import CreatRecipe from "../modals/CreatRecipe";
import Recipe from "./Recipe";


const Recipes = () => {

  const [modal, setModal] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const deleteRecipe = (index) => {
    let tempList = recipeList;
    tempList.splice(index, 1);
    localStorage.setItem("recipesList", JSON.stringify(tempList));
    setRecipeList(tempList);
    window.location.reload();
  }

  const updateRecipeArray = (obj, index) => {
    let tempRecipe = recipeList;
    tempRecipe[index] = obj;
    localStorage.setItem("recipesList", JSON.stringify(tempRecipe));
    setRecipeList(tempRecipe);
    window.location.reload();
  }

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

  useEffect(() => {
    let arr = localStorage.getItem("recipesList");
    if (arr) {
      let obj = JSON.parse(arr);
      setRecipeList(obj);
    }
  }, []);

  const isLogged = localStorage.getItem("user");

  return (
    <>
      <div className="header text-center">
        <h3>Recipes List</h3>
        {isLogged ? <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Recipe</button> :
          <p>for editing please log in</p>}

      </div>
      <div className="recipe-container">
        {recipeList.map((obj, index) => (
          <Recipe
            key={obj.Description}
            recipeObj={obj}
            index={index}
            deleteRecipe={deleteRecipe}
            updateRecipeArray={updateRecipeArray}/>
        ))}
      </div>
      <CreatRecipe toggle={toggle} modal={modal} save={saveRecipe}/>
    </>
  );
};

export default Recipes;