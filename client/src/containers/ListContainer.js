// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import backEndURL from "../helpers/BackEndURL.js";
import recipeSearchByIngredientsURL from "../helpers/APIURL.js";

class ListContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      users: []
    }
  }

  // LOGIC STARTS HERE
  componentDidMount(){
    const request = new Request();

    request.get('api/users')
    .then(data => {
      this.setLastName({
        users: data
      })
    });

    findPirateById(id) {
    return this.state.pirates.find(pirate => {
      return pirate.id === parseInt(id);
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/users/' +id;
    request.delete(url)
    .then(() => {
      window.location = '/users'
    })
  }

  handlePost(user){
    const request = new Request();
    request.post('/api/users', user)
      .then(()=>{
        window.location = '/users';
      })
  }


  }
  //RENDER STARTS HERE
  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <p>Allergies List</p>
      <p>Dietary Needs List</p>
      <p>Shopping List</p>
      <p>Blacklist</p>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default ListContainer;
