import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import JohnSmith from '../images/JohnSmith.jpg';

const User = ({user}) => {

  return (
    <div className="component">

    <img width="232" height="204" src={JohnSmith} alt="Profile Picture"></img>

    <p class ClassName="name">
    {user.firstName}
    </p>

    <p class ClassName="name">
    {user.lastName}
    </p>

    <p className="age">
    {user.age}
    </p>

    <p className="gender">
    {user.gender}
    </p>

    <p className="weight">
    {user.weight}
    </p>

    <p className="intolerances">
    {user.intolerances}
    </p>

    <p className="dietary_needs">
    {user.dietaryNeeds}
    </p>

    <p className="shopping_list">
    {user.shoppingList}
    </p>

    <p className="blacklist">
    {user.blacklist}
    </p>
    </div>
  )
}

export default User;
