// HANDLES SEARCHES ... DUH

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import SearchFilters from '../components/search/SearchFilters.js';
import ActiveFiltersList from '../components/search/ActiveFiltersList.js';

//tester
import Request from '../helpers/request.js';

class SearchContainer extends Component{
  constructor(props){
    super(props);

    this.state={
    }

    this.postTest = this.postTest.bind(this)
  }

  // LOGIC STARTS HERE

handleChosenFilters(ingredientFilters,dietaryFilters,intoleranceFilters){

}

  //RENDER STARTS HERE
  render(){
    return(
      <div>
        <p> This is the Search Container </p>
        <SearchFilters handleChosenFilters={this.handleChosenFilters}/>
      </div>
    )
  }
}

export default SearchContainer;
