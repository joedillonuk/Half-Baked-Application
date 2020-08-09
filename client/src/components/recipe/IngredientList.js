import React, {Component, Fragment} from 'react';

class IngredientList extends Component {
  constructor(props){
    super(props);

    this.state={
      metric: true,
      currentUnits: "metric",
      imgUrl: "https://spoonacular.com/cdn/ingredients_100x100/"

    }
    this.measures = this.measures.bind(this);
    this.handleUnitsClick = this.handleUnitsClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
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

handleItemClick(event){
  console.log(event);
}






render(){

  const ingredientList = this.props.ingredients.map((ingredient, index) => {
    return (
      <div key={index} onClick={ () => this.handleItemClick(ingredient)} className="ingredient-list-item" value={ingredient}>

      {/* The above makes the entire Div clickable.
        Currently handleItemClick just consoleLog the item that has been clicked.
        Will add functionality to add to shopping list later.
        May add logic to show which items are already in Shopping List? */}

        <img src={this.state.imgUrl + ingredient.image}/>
         <p>{this.measures(ingredient) + " " + ingredient.name}</p>
        </div>
    )
  })

    return(
      <div>
      <h2>Ingredients</h2>
      <h3 onClick={ () => this.handleUnitsClick()}>Units: {this.state.currentUnits}</h3>

      <div className="ingredient-list-container">
      {ingredientList}
      </div>
      </div>
    )
  }
  }


export default IngredientList;
