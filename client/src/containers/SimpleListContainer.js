// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserList from '../components/user/UserList'
import UserDetail from '../components/user/UserDetail'
import UserForm from '../components/user/UserForm'

import IntolerenceList from '../components/simpleList/IntolerenceList'

import backEndURL from "../helpers/BackEndURL.js";
import recipeSearchByIngredientsURL from "../helpers/APIURL.js";
import Request from '../helpers/request';

class SimpleListContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoading: false,
      users: []
    }
    this.findUserById = this.findUserById.bind(this);
  }

  // LOGIC STARTS HERE
  componentDidMount(){
    this.setState({isLoading: true});

    const url = "http://localhost:8080/api/users"

    fetch(url)
    .then(res => res.json())
    .then(users => this.setState({users: users.result}))
    .catch(error => console.error)
    .then(this.setState({isLoading: false}))
    .then(console.log(this.state.users))
  }



  findUserById(id) {
    return this.state.users.find(user => {
      return user.id === parseInt(id);
    })
  }


  handleUserDelete(id){
    const request = new Request();
    const url = "http://localhost:8080/api/users" +id;
    request.delete(url)
    .then(() => {
      window.location = '/users'
    })
  }


  handleUserPost(user){
    const request = new Request();
    request.post('/api/users', user)
    .then(()=>{
      window.location = '/users';
    })
  }




  //RENDER STARTS HERE
  render(){
    if (!this.isLoading){
      return(
        <Fragment>
        <p>Shopping List</p>
        <p>Dietary Needs</p>
        <p>Blacklist</p>
        <p>Saved Recipies</p>
        </Fragment>
      )
    }
  }
}


export default SimpleListContainer;
