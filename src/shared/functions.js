import {recipes} from "./projectData";
import RecipeItem from "../pages/RecipeItem";
import React from "react";


export const recipesPost = recipes.map((item) => {

  return (
    <RecipeItem
      key={item.id}
      title={item.title}
      description={item.description}
    />
  )
})
