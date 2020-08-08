import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import ListContainer from './ListContainer.js';
import SearchContainer from './SearchContainer.js';

const MainContainer = () => {

  return(
    <Router>
      <Fragment>
        <NavBar/>
        <Switch>
          <RecipeContainer/>
          <ListContainer/>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default MainContainer;
