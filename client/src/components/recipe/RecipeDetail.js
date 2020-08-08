import React from "react";
import Recipe from "./Recipe"

const RecipeDetail = ({recipe, onDelete}) => {

    const handleRecipeDelete = () => {
      onDelete(recipe.id)
    }

    if (!recipe) {
      return "no recipe returned yet..."
    }



    return (
      <div className="component">
        <Recipe recipe={recipe}/>
        <h3>Recipe Name:</h3>

        <button onClick={handleRecipeDelete}>Delete {recipe.name}</button>
      </div>
    )
};

export default RecipeDetail;
