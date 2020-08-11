import React from 'react';
import JohnSmith from '../../images/JohnSmith.jpg';

const User = (props) => {

  return (
    <div>

    <img width="232" height="204" src={JohnSmith} alt="Profile Picture"></img>
    <div>
    <p className="name">
    {props.user.firstName} {props.user.lastName}
    </p>

    <p className="age">
    Age :{props.user.age}
    </p>

    <p className="gender">
    Gender: {props.user.gender}
    </p>

    <p className="weight">
    Weight: {props.user.weight}kg
    </p>

    {/*<p className="intolerances">
    {props.user.intolerances}
    </p>

    <p className="dietary_needs">
    {props.user.dietaryNeeds}
    </p>

    <p className="shopping_list">
    {props.user.shoppingList}
    </p>

    <p className="blacklist">
    {props.user.blacklist}
    </p>*/}
    </div>
    </div>
  )
}

export default User;
