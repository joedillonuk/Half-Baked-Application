import React from 'react';
import Recipe from './Recipe.js';


const RecipeList = (props) => {

	if(props.recipes.length === 0) {
		return <p>you haven't submitted any recipies yet...</p>
	}

	const recipes = props.recipes.map((recipe, index) => {
			return (
        <li key={index}>
          <div className="component">
					<Recipe recipe={recipe} />
          </div>
				</li>
		)
		})

	return (
		<ul className="component-list">
			{recipes}
		</ul>

	)
}
 export default RecipeList;
