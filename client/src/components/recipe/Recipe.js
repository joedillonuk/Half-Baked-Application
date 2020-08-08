import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Recipe = (props) => {

  return (
    <div className="component">
        <p className="name">
          {props.recipe.name}
        </p>
    </div>
  )
}

export default Recipe;
