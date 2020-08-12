//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import ListOfRecipes from '../components/recipe/ListOfRecipes.js';
import RecipeInstructions from '../components/recipe/RecipeInstructions.js';
import IngredientList from '../components/recipe/IngredientList.js';

class RecipeContainer extends Component{
  constructor(props){
    super(props);

    this.state={

      selectedRecipe:  null,
      recipeID: 711310
    }
  }
//RENDER STARTS HERE
  render(){
  {/*  const {selectedRecipe} = this.state;

    if(!selectedRecipe){
      return <p>"Loading..."</p>
    } */}
    return(

      <div className="recipe-container">
        {/* Removing ListOfRecipes from RecipeContainer
            May move to MainContainer
          <ListOfRecipes/> */}
          <h2 id="header">{this.props.selectedRecipe.title}</h2>
        <div className="row">
        <div className="column">
        <div className="recipe-container-image-and-directions">
        <img id="floated" src={this.props.selectedRecipe.image}/>
        <RecipeInstructions user={this.props.user} selectedRecipe={this.props.selectedRecipe} />

        <p>Add to favourites</p>
        <p>Blacklist Recipe</p>
        </div>
        </div>
        <div className="column">
        <IngredientList user={this.props.user} ingredients={this.props.selectedRecipe.extendedIngredients} />
        </div>
        </div>
    </div>
    )
  }
}


export default RecipeContainer;
