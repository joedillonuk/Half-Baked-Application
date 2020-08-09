// HANDLES SALLERGIES, DIETARY NEEDS, BLACKLIST

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import IntolerenceList from '../components/list/IntolerenceList.js';

class SimpleListContainer extends Component{
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
    .then(users => this.setState({users: users.result}))
    .catch(error => console.error)
    .then(this.setState({isLoading: false}))
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
