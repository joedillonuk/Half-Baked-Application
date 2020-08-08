import React from "react";
import User from "./User"

const UserDetail = ({user, onDelete}) => {

    const handleDelete = () => {
      onDelete(user.id)
    }

    if (!user) {
      return "no user yet..."
    }

    const userAllergies = user.allergies.map((allergy, index) => {
      return <li key={index}>{allergy.name}</li>
    })

    const userDietaryNeeds = user.dietaryNeeds.map((diet, index) => {
      return <li key={index}>{diet.name}</li>
    })

    const userShoppingList = user.shoppingList.map((shopping, index) => {
      return <li key={index}>{shopping.name}</li>
    })

    const userBlacklist = user.blacklist.map((blacklist, index) => {
      return <li key={index}>{blacklist.name}</li>
    })

    return (
      <div className="component">
        <User user={user}/>
        <h3>Allergies:</h3>
        <ul>
        {userAllergies}
        </ul>
        <h3>Dietary Needs:</h3>
        <ul>
        {userDietaryNeeds}
        <h3>Shopping List:</h3>
        <ul>
        {userShoppingList}
        </ul>
        <h3> Recipe Blacklist:</h3>
        <ul>
        {userBlacklist}
        </ul>
        <button onClick={handleDelete}>Delete {user.firstName}</button>
      </div>
    )
};

export default UserDetail;
