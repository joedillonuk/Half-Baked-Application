import React from 'react';

const RecipeInstructions = (props) => {


function hasInstructions(){
  if(props.selectedRecipe.instructions){
    return <div><p><b>Directions:</b></p>
      <p>{props.selectedRecipe.instructions}</p></div>
  } else {
    return <div><p>Sorry, no directions available but I'm sure you'll figure it out.</p>
    <a href={props.selectedRecipe.sourceUrl}> Link to original recipe </a></div>
  }
}

  return(
    <div className="recipe-instructions">
    <p><b>Serves: </b>{props.selectedRecipe.servings}</p>
    <p><b>Cooking Time: </b>{props.selectedRecipe.readyInMinutes} min</p>



      {hasInstructions()}


    </div>
  )
}

export default RecipeInstructions;
