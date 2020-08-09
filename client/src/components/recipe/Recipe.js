import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Recipe = ({recipe}) => {

  if (!recipe){
    return "Loading..."
  }

  const url = `/recipies/${recipe.id}`;


  return (
    <Fragment>
    <Link to={url}>
        {recipe.name}
    </Link>
    </Fragment>
  )
}

export default Recipe;
