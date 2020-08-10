import React, {Fragment} from 'react';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import ListContainer from './ListContainer.js';
import SearchContainer from './SearchContainer.js';

const MainContainer = () => {

//Add in the RecipeContainer to the switch again
return(
    <Fragment>
      <NavBar/>
      <RecipeContainer className="recipe_container" recipeID="716400"/>
      <ListContainer/>
      <SearchContainer/>
    </Fragment>

      )
  }

export default MainContainer;
