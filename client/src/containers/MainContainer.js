import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import SimpleListContainer from './SimpleListContainer.js';

import SearchContainer from './SearchContainer.js';

const MainContainer = () => {

//Add in the RecipeContainer to the switch again
  return(
    <Router>
      <Fragment>
      <NavBar/>
      <Switch>



        <SimpleListContainer/>
        <SearchContainer/>


      </Switch>
      </Fragment>
      </Router>
      )
      }

      export default MainContainer;
