import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

  return (
    <div className="component">
    <p>{user.firstName}</p>
    <p>{user.lastName}</p>
    <p>{user.age}</p>
    <p>{user.gender}</p>
    <p>{user.weight}</p>
    <p>{user.intolerances}</p>
    <p>{user.dietaryNeeds}</p>
    <p>{user.shoppingList}</p>
    <p>{user.blacklist}</p>
    </div>
  )
}

export default User;
