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
      view: ["search"]

    }
    this.handleViewChange = this.handleViewChange.bind(this);
    this.currentView = this.currentView.bind(this);
  }

  handleViewChange(event){
    let newState = this.state.view.concat(event)

    console.log(event)
    console.log(newState);
    this.setState({view: newState});
  }

  currentView(){
  if (this.state.view[0] === "savedRecipes"){
    return(
      <RecipeContainer recipeID="716400" view={this.state.view}/>

    )
  }

  if (this.state.view[0] === "list"){
    return(
      <ListContainer view={this.state.view}/>
    )
  }

  if (this.state.view[0] === "search"){
    return(
      <SearchContainer view={this.state.view}/>
    )
  }
  return <h1>I do return something</h1>
  }

  //Add in the RecipeContainer to the switch again
  render(){





      return(
        <Fragment>

        <NavBar handleViewChange={this.handleViewChange}/>
        <ListOfRecipes />
        <RecipeContainer recipeID="716400" view={this.state.view}/>

        {this.currentView()}
        </Fragment>
      )

  }
}



export default MainContainer;
