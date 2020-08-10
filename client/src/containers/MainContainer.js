import React, {Component, Fragment} from 'react';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import ListContainer from './ListContainer.js';
import SearchContainer from './SearchContainer.js';

class MainContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      view: ["recipe"]

    }
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(event){
    let newState = this.state.view.concat(event)
    console.log(event)
    this.setState({view: newState}); 
  }
  //Add in the RecipeContainer to the switch again
  render(){
    if (this.state.view[0] === "recipe"){
      return(
        <Fragment>
        <NavBar handleViewChange={this.handleViewChange}/>
        <RecipeContainer recipeID="716429" view={this.state.view}/>
        </Fragment>
      )
    }

    if (this.state.view[0] === "list"){
      return(
        <Fragment>
        <NavBar handleViewChange={this.handleViewChange}/>
        <ListContainer view={this.state.view}/>
        </Fragment>
      )
    }

    if (this.state.view[0] === "search"){
      return(
        <Fragment>
        <NavBar handleViewChange={this.handleViewChange}/>
        <SearchContainer view={this.state.view}/>
        </Fragment>
      )
    }

  }
}



export default MainContainer;
