// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserList from '../components/user/UserList'
import UserDetail from '../components/user/UserDetail'
import UserForm from '../components/user/UserForm'

import RecipeList from '../components/recipe/RecipeList'
import RecipeDetail from '../components/recipe/RecipeDetail'
import RecipeForm from '../components/recipe/RecipeForm'

import backEndURL from "../helpers/BackEndURL.js";
import recipeSearchByIngredientsURL from "../helpers/APIURL.js";
import Request from '../helpers/request';

class ListContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      users: [],
      recipes:[]
    }
    this.findUserById = this.findUserById.bind(this);
    this.findRecipeById = this.findRecipeById.bind(this);
  }

  // LOGIC STARTS HERE
  componentDidMount(){
    const request1 = new Request();
    const request2 = new Request();

    const url1 = "http://localhost:8080/api/users"
    const url2 = "http://localhost:8080/api/recipes"

    request1.get(url1)
    request2.get(url2)

    .then(data => {
      this.setState({users: data});
    })
    .then(lore => {
      this.setState({recipes: lore});
    })
  }



  findUserById(id) {
    return this.state.users.find(user => {
      return user.id === parseInt(id);
    })
  }

  findRecipeById(id) {
    return this.state.recipes.find(recipe => {
      return recipe.id === parseInt(id);
    })
  }

  handleUserDelete(id){
    const request1 = new Request();
    const url1 = '/api/users/' +id;
    request1.delete(url1)
    .then(() => {
      window.location = '/users'
    })
  }

  handleRecipeDelete(id){
    const request2 = new Request();
    const url2 = '/api/recipes/' +id;
    request2.delete(url2)
    .then(() => {
      window.location = '/recipes'
    })
  }

  handleUserPost(user){
    const request1 = new Request();
    request1.post('/api/users', user)
    .then(()=>{
      window.location = '/users';
    })
  }

  handleRecipePost(recipe){
    const request2 = new Request();
    request2.post('/api/recipes', recipe)
    .then(()=>{
      window.location = '/recipes';
    })
  }



  //RENDER STARTS HERE
  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/users/new" render={()=> {
        return <UserForm dietaryNeeds={this.state.dietaryNeeds} onCreate={this.handleUserPost}/>
      }} />
      <Route exact path="/users/:id" render={(props)=> {
        const id = props.match.params.id //id as a string
        const user = this.findUserById(id);
        console.log(user);
        return <UserDetail user={user} onDelete={this.handleUserDelete}/>
      }}/>
      <Route render={(props) => {
        return <UserList users={this.state.users}/>
      }}/>
      </Switch>
      </Fragment>
      <Fragment>
      <Switch>
      <Route exact path="/recipes/new" render={()=> {
        return <RecipeForm onCreate={this.handleRecipePost}/>
      }} />
      <Route exact path="/recipes/:id" render={(props)=> {
        const id = props.match.params.id //id as a string
        const recipe = this.findRecipeById(id);
        console.log(recipe);
        return <UserDetail recipes={recipe} onDelete={this.handleRecipeDelete}/>
      }}/>
      <Route render={(props) => {
        return <UserList recipes={this.state.recipes}/>
      }}/>
      </Switch>
      </Fragment>
      <Fragment>
      <Switch>
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
