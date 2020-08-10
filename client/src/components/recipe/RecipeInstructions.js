import React from 'react';

const RecipeInstructions = (props) => {
  return(
    <div className="recipe-instructions">
    <p><b>Serves: </b>{props.selectedRecipe.servings}</p>
    <p><b>Cooking Time: </b>{props.selectedRecipe.readyInMinutes} min</p>

    <p><b>Directions:</b></p>
      <p>{props.selectedRecipe.instructions}</p>
    </div>
  )
}

export default RecipeInstructions;
