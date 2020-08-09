import React from 'react';

class SearchFilers extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <form>
          <h3>Filter by Ingredient: </h3>

          <label for="ingredientName">Ingredient name:</label>
          <input type="text" id="ingredientName" name="ingredientName"></input>
          <button>Add</button>

          <h3> Filter by Dietary Requirements </h3>

          <label for="vegetarian">Vegetarian:</label>
          <input type="checkbox" id="vegetarian" name="vegetarian"/>
          <label for="vegan">Vegan:</label>
          <input type="checkbox" id="vegan" name="vegan"/>
          <label for="gluten">Gluten-free:</label>
          <input type="checkbox" id="gluten" name="gluten"/>
          <label for="dairy">Dairy-free:</label>
          <input type="checkbox" id="dairy" name="dairy"/>
        </form>
      </div>
    )
  }


}

export default SearchFilers;
