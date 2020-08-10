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
      <RecipeContainer recipeID="716429"/>
      <ListContainer/>
      <SearchContainer/>
    </Fragment>
      
        <SearchContainer/>

      </Fragment>
      </Router>
      )
  }

export default MainContainer;
