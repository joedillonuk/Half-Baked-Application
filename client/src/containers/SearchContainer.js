// HANDLES SEARCHES ... DUH

//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import SearchFilters from '../components/search/SearchFilters.js';
import ActiveFiltersList from '../components/search/ActiveFiltersList.js';

class SearchContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      setFilters:["Test1", "Test2"]
    }
  }

  // LOGIC STARTS HERE


  //RENDER STARTS HERE
  render(){
    return(
      <div>
        <p> This is the Search Container </p>
        <SearchFilters/>
        <ActiveFiltersList setFilters={this.state.setFilters}/>
        <button>Clear Filters</button>
        <button>Submit(placeholder)</button>
      </div>
    )
  }
}

export default SearchContainer;
