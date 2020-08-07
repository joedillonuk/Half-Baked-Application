import React from 'react';

const RecipeInstructions = (props) => {
  return(
    <div>
      <h2>{props.selectedRecipe.title}</h2>
      <p>{props.selectedRecipe.instructions}</p>
    </div>
  )
}

export default RecipeInstructions;
