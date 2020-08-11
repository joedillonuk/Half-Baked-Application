// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import Blacklist from '../components/list/Blacklist.js';
import DietaryList from '../components/list/DietaryList.js';
import IntoleranceList from '../components/list/IntoleranceList.js';
import SavedRecipes from '../components/list/SavedRecipes.js';
import ShoppingList from '../components/list/ShoppingList.js';

class ListContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoading: false,
      intolerances: [],
      dietaryNeeds: [],
      shoppingList: [],
      recipes:[],
    }
    this.expandDietary = this.expandDietary.bind(this);
  }

  // LOGIC STARTS HERE
  componentDidMount(){
    this.setState({isLoading: true});

    const url = "http://localhost:8080/api/intolerances"

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({intolerances: data}))
    .catch(error => console.error)

    const url1 = "http://localhost:8080/api/dietary_needs"

    fetch(url1)
    .then(res => res.json())
    .then(data => this.setState({dietaryNeeds: data}))
    .catch(error => console.error)

    const url2 = "http://localhost:8080/api/recipes"

    fetch(url2)
    .then(res => res.json())
    .then(data => this.setState({recipes: data}))
    .catch(error => console.error)

    const url3 = "http://localhost:8080/api/shopping_list"

    fetch(url3)
    .then(res => res.json())
    .then(data => this.setState({shoppingList: data, isLoading: false}))
    .catch(error => console.error)
  }

  expandDietary(){
    console.log("Click did work");
    return           <DietaryList dietaryNeeds={this.state.dietaryNeeds}/>

  }

  //RENDER STARTS HERE
  render(){
    // if (this.props.view[0] === "list"){
    //   const {shoppingList} = this.state;
    //   if(!shoppingList){
    //     return <p>"Loading..."</p>
    //   }
    //
    //
    //   if(this.props.view[1] === "recipes"){
    //     return(
    //       <Fragment>
    //       <Blacklist blacklist={this.state.recipes}/>
    //       <SavedRecipes recipes={this.state.recipes}/>
    //       </Fragment>
    //     )
    //   }
      if(this.props.view === "dietary"){
        return(
          <Fragment>
          <p onClick={this.expandDietary}>Dietary: Click to expand</p>

          <IntoleranceList intolerances={this.state.intolerances}/>
          </Fragment>
        )
      }
      if(this.props.view === "shopping"){
        return(
          <Fragment>
          <ShoppingList shoppingList={this.state.shoppingList}/>
          </Fragment>
        )
      }
    }

}


export default ListContainer;
