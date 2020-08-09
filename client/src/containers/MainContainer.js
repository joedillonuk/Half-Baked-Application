import React, {Fragment} from 'react';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import SimpleListContainer from './SimpleListContainer.js';
import SearchContainer from './SearchContainer.js';

const MainContainer = () => {

//Add in the RecipeContainer to the switch again
return(
    <Fragment>
      <NavBar/>
      <RecipeContainer recipeID="716429"/>
      <SimpleListContainer/>
      <SearchContainer/>
    </Fragment>
      )
  }

export default MainContainer;
