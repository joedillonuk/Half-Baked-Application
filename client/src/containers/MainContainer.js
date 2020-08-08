import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import ListContainer from './ListContainer.js';
import SearchContainer from './SearchContainer.js';

const MainContainer = () => {

//Add in the RecipeContainer to the switch again
  return(
    <Router>
      <Fragment>
        <NavBar/>
        <Switch>
<<<<<<< HEAD
          <SearchContainer/>
          <RecipeContainer/>
          <ListContainer/>
=======

<ListContainer/>
          <SearchContainer/>
          <RecipeContainer/>



>>>>>>> b774169d378881a9a76c1591b1cc4aa5b38729e5
        </Switch>
      </Fragment>
    </Router>
  )
}

export default MainContainer;
