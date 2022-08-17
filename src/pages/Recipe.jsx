import React, {useState} from 'react';
import EditRecipe from "../modals/EditRecipe";
import {users} from "../shared/projectData";


const Recipe = ({recipeObj, index, deleteRecipe, updateRecipeArray}) => {

  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ]

  const toggle = () => {
    setModal(!modal);
  }

  const updateRecipe = (obj) => {
    updateRecipeArray(obj, index);
  }

  const handleDelete = () => {
    deleteRecipe(index);
  }

  return (
    <div className="recipes-wrapper mr-5">
      <div className="recipe-top" style={{
        backgroundColor: colors[index % 5].primaryColor
      }}>
      </div>
      <div className="recipes-holder">
        <span className="recipe-header" style={{
          backgroundColor: colors[index % 5].primaryColor,
          borderRadius: "10px"
        }}>{recipeObj.Name}</span>
        <p className="mt-2">{recipeObj.Description}</p>

        <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
          <p className="user-email">{users.email}</p>
          <i className="far fa-edit mr-4" style={{"color": colors[index % 5].primaryColor, "cursor": "pointer", "margin": "10px"}}
             onClick={() => {
               setModal(true)
             }}>
          </i>
          <i className="fas fa-trash-alt ml-3" style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
             onClick={handleDelete}>
          </i>
        </div>
      </div>
      <EditRecipe modal={modal} toggle={toggle} updateRecipe={updateRecipe} recipeObj={recipeObj}/>
    </div>
  );
};

export default Recipe;