//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import ListOfRecipes from '../components/recipe/ListOfRecipes.js';
import RecipeInstructions from '../components/recipe/RecipeInstructions.js';
import IngredientList from '../components/recipe/IngredientList.js';

class RecipeContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoading: false,
      selectedRecipe: null
    }
  }

  // LOGIC STARTS HERE

  componentWillMount(){
  this.setState({isLoading: true});
  const testRecipeID = "1100000"
  const url = `https://api.spoonacular.com/recipes/${this.props.recipeID}/information?apiKey=412af1d196fd4a28af649ebd01a51d74`
  fetch(url)
  .then(res => res.json())
  .then(recipe => this.setState({selectedRecipe: recipe, isLoading: false}))
  .catch(error => console.error)
};

  //RENDER STARTS HERE
  render(){
    const {isLoading} = this.state;
    if(isLoading){
      return <p>"Loading..."</p>
    }
    return(
      <Fragment>
        <ListOfRecipes/>
        <img src={this.state.selectedRecipe.image}/>
        <RecipeInstructions selectedRecipe={this.state.selectedRecipe}/>
        <IngredientList ingredients={this.state.selectedRecipe.extendedIngredients} />
      </Fragment>
    )
  }
}

export default RecipeContainer;
