// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import backEndURL from "../helpers/BackEndURL.js";
import recipeSearchByIngredientsURL from "../helpers/APIURL.js";
import Request from '../helpers/request';

class ListContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      users: []
    }
    this.findUserById = this.findUserById.bind(this);
  }

  // LOGIC STARTS HERE
  componentDidMount(){
    const request = new Request();
    const url = "http://localhost:8080/api/users"
    request.get(url)
    .then(data => {
      this.setState({users: data});
      })
    }



    findUserById(id) {
    return this.state.users.find(user => {
      return user.id === parseInt(id);
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
