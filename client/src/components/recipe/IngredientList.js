import React, {Component, Fragment} from 'react';
import ShoppingKart from './ShoppingKart.png';
import ShoppingKartIn from './ShoppingKartIn.png';


class IngredientList extends Component {
  constructor(props){
    super(props);

    this.state={
      metric: true,
      currentUnits: "metric",
      imgUrl: "https://spoonacular.com/cdn/ingredients_100x100/",
      toShoppingList: []
    }
    this.measures = this.measures.bind(this);
    this.handleUnitsClick = this.handleUnitsClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.isItemInThisStateShoppingList = this.isItemInThisStateShoppingList.bind(this);
  }






 measures(ingredient){
  if(this.state.metric == true){
    return ingredient.measures.metric.amount.toFixed(0) + " " + ingredient.measures.metric.unitShort
  } else {
    return ingredient.measures.us.amount.toFixed(0) + " " + ingredient.measures.us.unitShort
  }
}


 handleUnitsClick(){
if(!this.state.metric){
  this.setState({metric: true})
  this.setState({currentUnits: "metric"})
}else{
  this.setState({metric: false})

this.setState({currentUnits: "us"})}
}


// adds a clicked Ingredient to this.State.toShoppingList
handleItemClick(event){
  // only add item to toShoppingList array if it isn't already there
if(!this.isItemInThisStateShoppingList(event.id)){
  // returns new array with clicked item (event.id) added
 let newShoppingList = this.state.toShoppingList.concat(event.id)

 // updates the state with the new array
 // (this does NOT update the user's saved shopping List yet)
 //
 this.setState({toShoppingList: newShoppingList})

} else {
  let newShoppingList = this.state.toShoppingList;
  let index = newShoppingList.indexOf(event.id);
  newShoppingList.splice(index, 1);
  this.setState({toShoppingList: newShoppingList})

}


}

showShoppingListStatus(ingredient){
  if(this.isItemInThisStateShoppingList(ingredient.id)){
    return <img width="50" height="50" src={ShoppingKartIn}></img>
  } else{
    return <img width="50" height="50" src={ShoppingKart}></img>

  }

}


// checks whether a clicked ingredient is already in this.state.toShoppingList
// TO BE DONE: WILL ALSO NEED TO COMPARE AGAINST USER'S SHOPPING LIST
isItemInThisStateShoppingList(item){
  let result = this.state.toShoppingList.includes(item)
  return result
}

// showShoppingListStatus(ingredient){
//   if(this.isItemInThisStateShoppingList(ingredient.id)){
//     return <p>In shopping list</p>
//   } else {
//     return <p>Click to add to shopping list<p>
//   }
// }



render(){

  const ingredientList = this.props.ingredients.map((ingredient, index) => {
    return (
      <div key={index} onClick={ () => this.handleItemClick(ingredient)} className="ingredient-list-item" value={ingredient}>

      {/* The above makes the entire Div clickable.
        Currently handleItemClick just consoleLog the item that has been clicked.
        Will add functionality to add to shopping list later.
        May add logic to show which items are already in Shopping List? */}
        <h4>{ingredient.name}</h4>

        <div className="ingredient-list-item-image-container">
        <img src={this.state.imgUrl + ingredient.image}/>
        </div>
        <p>{this.measures(ingredient)}</p>

        {this.showShoppingListStatus(ingredient)}

        </div>
    )
  })

    return(
      <div className="ingredient-list-outer-container">
      <div className="row">
      <div className="column">
      <div className="ingredient-list-header">
      <h2>Ingredients</h2>
      <h3 onClick={ () => this.handleUnitsClick()}>Units: {this.state.currentUnits}</h3>
      </div>
      </div>
      </div>


      <div className="ingredient-list-container">
      {ingredientList}
      </div>
      </div>
    )
  }
  }


export default IngredientList;
