import React from "react";
import User from "./User"

const UserDetail = ({user, onDelete}) => {

    const handleUserDelete = () => {
      onDelete(user.id)
    }

    if (!user) {
      return "no user returned yet..."
    }

    // const userAllergies = user.allergies.map((allergy, index) => {
    //   return <li key={index}>{allergy.name}</li>
    // })
    //
    // const userDietaryNeeds = user.dietaryNeeds.map((diet, index) => {
    //   return <li key={index}>{diet.name}</li>
    // })
    //
    // const userShoppingList = user.shoppingList.map((shopping, index) => {
    //   return <li key={index}>{shopping.name}</li>
    // })
    //
    // const userBlacklist = user.blacklist.map((blacklist, index) => {
    //   return <li key={index}>{blacklist.name}</li>
    // })

    return (
      <div className="component">
        <User user={user}/>
        <h3>Intolerances:</h3>
        <ul>
        <p>a list of Ingredients the user is allergic/intolerant to will go here </p>
        </ul>
        <h3>Dietary Needs:</h3>
        <ul>
        <p>a list of dietary needs, e.g. vegitatian, vegan, keto will go here </p>
        </ul>
        <h3>Shopping List:</h3>
        <ul>
        <p>a list of ingredients requiered for a recipe to be purchased will go here </p>
        </ul>
        <h3>Blacklist:</h3>
        <ul>
        <p>a list of recipes the user does not like that will be omitted from the filet will go here </p>
        </ul>
        <button onClick={handleUserDelete}>Delete {user.firstName}</button>
      </div>
    )
};

export default UserDetail;
