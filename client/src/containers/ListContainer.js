// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import Blacklist from '../components/list/Blacklist.js';
import DietaryList from '../components/list/DietaryList.js';
import IntolerenceList from '../components/list/IntolerenceList.js';
import SavedRecipes from '../components/list/SavedRecipes.js';
import ShoppingList from '../components/list/ShoppingList.js';

class ListContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoading: false,
      users: []
    }
  }

  // LOGIC STARTS HERE
  componentDidMount(){
    this.setState({isLoading: true});

    const url = "http://localhost:8080/api/users"

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({users: data[0], isLoading: false}))
    .catch(error => console.error)
  }

  //RENDER STARTS HERE
  render(){
    const {users} = this.state;
    if(!users){
      return <p>"Loading..."</p>
    }
      return(
        <Fragment>
          <Blacklist/>
          <SavedRecipes/>
          <DietaryList/>
          <IntolerenceList intolerences={this.state.users.intolerences}/>
          <ShoppingList/>
        </Fragment>
      )
    }
}


export default ListContainer;
