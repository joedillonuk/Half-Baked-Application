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


	return (
		<ul className="component-list">
			{userEls}
    </ul>

	)
}
 export default UserList;
