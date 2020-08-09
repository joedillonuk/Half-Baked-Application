import React from 'react';
import User from './User.js';


const UserList = (props) => {
	const users = props.users.map((user) => {
			return (
				<li key={user.id} className="component-item">
				<User user={user} />
			</li>
		)
		})


	const allergies = props.users.allergies.map((allergy, index) => {
		return (
			<li key={index}>
				<div className="component-item">
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

	const blacklistRecipes = props.users.savedRecipes.map((recipe, index) => {
		if (recipe.blacklist == true){

		return (
			<li key={index}>
				<div className="component">
				<User user={recipe}/>
				</div>
			</li>
		)}
	})


	return (
		<ul className="component-list">
			{users}
			{allergies}
			{shoppingList}
			{blacklistRecipes}
    </ul>

	)
}
 export default UserList;
