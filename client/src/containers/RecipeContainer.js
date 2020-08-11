//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import ListOfRecipes from '../components/recipe/ListOfRecipes.js';
import RecipeInstructions from '../components/recipe/RecipeInstructions.js';
import IngredientList from '../components/recipe/IngredientList.js';

class RecipeContainer extends Component{
  constructor(props){
    super(props);

    this.state={

      selectedRecipe: null
    }
  }

  // LOGIC STARTS HERE

  componentWillMount(){
  const url = `https://api.spoonacular.com/recipes/${this.props.recipeID}/information?apiKey=94c5356f0eb24c80821176ea3ea11789`
  fetch(url)
  .then(res => res.json())
  .then(recipe => this.setState({selectedRecipe: recipe}))
  .catch(error => console.error)
};

  //RENDER STARTS HERE
  render(){
    const {selectedRecipe} = this.state;

    if(!selectedRecipe){
      return <p>"Loading..."</p>
    }
    return(

      <div className="recipe-container">
        {/* Removing ListOfRecipes from RecipeContainer
            May move to MainContainer
          <ListOfRecipes/> */}
          <h2 id="header">{this.state.selectedRecipe.title}</h2>
        <div className="row">
        <div className="column">
        <div className="recipe-container-image-and-directions">
        <img id="floated" src={this.state.selectedRecipe.image}/>
        <RecipeInstructions selectedRecipe={this.state.selectedRecipe} />

        <p>Add to favourites</p>
        <p>Blacklist Recipe</p>
        </div>
        </div>
        <div className="column">
        <IngredientList ingredients={this.state.selectedRecipe.extendedIngredients} />
        </div>
        </div>
    </div>
    )
  }
}


export default RecipeContainer;
