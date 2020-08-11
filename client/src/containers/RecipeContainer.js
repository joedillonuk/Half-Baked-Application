//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import ListOfRecipes from '../components/recipe/ListOfRecipes.js';
import RecipeInstructions from '../components/recipe/RecipeInstructions.js';
import IngredientList from '../components/recipe/IngredientList.js';

class RecipeContainer extends Component{
  constructor(props){
    super(props);

    this.state={

      selectedRecipe: null,
      recipeID: this.props.recipeID
    }
    this.render = this.render.bind(this)
  }

  componentWillReceiveProps(props) {
    console.log("confirm props received");
    console.log(props.recipeID);
    this.setState({recipeID: props.recipeID});
    this.componentDidMount();


  }

render(){
  let url = `https://api.spoonacular.com/recipes/${this.props.recipeID}/information?apiKey=4e032f0a00ae4ac4a43167135bdca9b4`
  fetch(url)
  .then(res => res.json())
  .then(recipe => this.setState({selectedRecipe: recipe}))
  .catch(error => console.error)
}

  // LOGIC STARTS HERE

  componentDidMount(){
    let url = `https://api.spoonacular.com/recipes/${this.props.recipeID}/information?apiKey=4e032f0a00ae4ac4a43167135bdca9b4`
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
