import React, {Component, Fragment} from 'react';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import ListContainer from './ListContainer.js';
import SearchContainer from './SearchContainer.js';
import ListOfRecipes from '../components/recipe/ListOfRecipes.js';

class MainContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      view: "recipe"

    }
    this.handleViewChange = this.handleViewChange.bind(this);
    this.currentView = this.currentView.bind(this);
  }

  handleViewChange(event){
    console.log(event);
    this.setState({view: event});
  }

  currentView(){


    if (this.state.view === "dietary" || this.state.view === "shopping"){
      return(
        <ListContainer view={this.state.view}/>
      )
    }

    if (this.state.view[0] === "search"){
      return(
        <SearchContainer view={this.state.view}/>
      )
    }
    return null;
  }

  //Add in the RecipeContainer to the switch again
  render(){





    return(
      <div>
      <NavBar handleViewChange={this.handleViewChange}/>
      {this.currentView()}
        <div className="main-container">

          <tr>
            <td id="list-of-recipes">
              <ListOfRecipes />
            </td>

          <td id="recipe-container">
            <RecipeContainer recipeID="716400" view={this.state.view}/>
            </td>
          </tr>
        </div>
      </div>
    )

  }
}



export default MainContainer;
