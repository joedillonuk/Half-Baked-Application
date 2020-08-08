import React from 'react';
import User from './User.js';


const UserList = (props) => {

	if (props.users.length === 0) {
		return <p>no users yet....</p>
	}

	const userEls = props.users.map((user, index) => {
		return (
			<li key={index}>
				<div className="component">
				<User user={user}/>
				</div>
			</li>
		)
	})

	const dietaryNeeds = props.users.dietaryNeeds.map((dietaryNeed, index) => {
		return (
			<li key={index}>
				<div className="component">
				<User user={dietaryNeed}/>
				</div>
			</li>
		)
	})

	const allergies = props.users.allergies.map((allergy, index) => {
		return (
			<li key={index}>
				<div className="component">
				<User user={allergy}/>
				</div>
			</li>
		)
	})

	const shoppingList = props.users.shoppingList.map((product, index) => {
		return (
			<li key={index}>
				<div className="component">
				<User user={product}/>
				</div>
			</li>
		)
	})

	const blacklistRecipes = props.users.blacklist.map((recipe, index) => {
		return (
			<li key={index}>
				<div className="component">
				<User user={recipe}/>
				</div>
			</li>
		)
	})


	return (
		<ul className="component-list">
			{userEls}
			{dietaryNeeds}
			{allergies}
			{shoppingList}
			{blacklistRecipes}
    </ul>

	)
}
 export default UserList;
