import React from 'react';

const IngredientList = (props) => {

  if (props.length === 0) {
	return <p>Select a recipe to view ingredients...</p>
}

console.log(props.ingredients[0].name);

let metric = true;

const measures = (ingredient) => {
  if(metric == true){
    return ingredient.measures.metric.amount.toFixed(0) + " " + ingredient.measures.metric.unitShort
  } else {
    return ingredient.measures.us.amount.toFixed(0) + " " + ingredient.measures.us.unitShort
  }
}


const handleUnitsClick = () => {
  metric = !metric
  console.log(metric);


}

const handleItemClick = (event) => {
  console.log(event);
}

const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";

  const ingredientList = props.ingredients.map((ingredient, index) => {
  	return (
      <div key={index} onClick={ () => handleItemClick(ingredient)} className="ingredient-list-item" value={ingredient}>

      {/* The above makes the entire Div clickable.
        Currently handleItemClick just consoleLog the item that has been clicked.
        Will add functionality to add to shopping list later.
        May add logic to show which items are already in Shopping List? */}

        <img src={imgUrl + ingredient.image}/>
  		   <p>{measures(ingredient) + " " + ingredient.name}</p>
  			</div>
  	)
  })





    return(
      <div>
      <h2>Ingredients</h2>
      <h3 onClick={ () => handleUnitsClick()}>Units: placeholder</h3>

      <div className="ingredient-list-container">
      {ingredientList}
      </div>
      </div>
    )
  }


export default IngredientList;
