// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserList from '../components/user/UserList'
import UserDetail from '../components/user/UserDetail'
import UserForm from '../components/user/UserForm'

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
      <Route exact path="/users/new" render={()=> {
        return <UserForm dietaryNeeds={this.state.dietaryNeeds} onCreate={this.handlePost}/>
      }} />
      <Route exact path="/users/:id" render={(props)=> {
        const id = props.match.params.id //id as a string
        const user = this.findUserById(id);
        console.log(user);
        return <UserDetail user={user} onDelete={this.handleDelete}/>
      }}/>
      <Route render={(props) => {
        return <UserList users={this.state.users}/>
      }}/>
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
