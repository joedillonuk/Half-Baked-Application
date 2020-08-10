import React from 'react';

class SearchFilers extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ingredientSearchFilters:[],
      dietaryFilters: [],
      intolerenceFilters: []

    }
    this.handleAddDietaryFilter = this.handleAddDietaryFilter.bind(this);
    this.handleAddIntoleranceFilter = this.handleAddIntoleranceFilter.bind(this);
  }

  //LOGIC HERE

  handleAddDietaryFilter(event){
    const newFilter = event.target.value;
    if(document.getElementById(event.target.id).checked){
      let filters = this.state.dietaryFilters;
      filters.push(newFilter);
      this.setState({
        dietaryFilters: filters
      })
    } else {
      let filters = this.state.dietaryFilters;
      let index = filters.indexOf(newFilter);
      filters.splice(index,1);
      this.setState({
        dietaryFilters: filters
      })
    }
  }

  handleAddIntoleranceFilter(event){
    const newFilter = event.target.value;
    if(document.getElementById(event.target.id).checked){
      let filters = this.state.intolerenceFilters;
      filters.push(newFilter);
      this.setState({
        intoleranceFilters: filters
      })
    } else {
      let filters = this.state.intolerenceFilters;
      let index = filters.indexOf(newFilter);
      filters.splice(index,1);
      this.setState({
        intoleranceFilters: filters
      })
    }
  }

  //RENDER HERE

  render(){
    return(
      <div>
        <form>
          <h3>Filter by Ingredient: </h3>

          <label for="ingredientName">Ingredient name:</label>
          <input type="text" id="ingredientName" name="ingredientName"></input>

          <h3> FIlter by Dietary Requirements :</h3>

          <label for="Gluten Free">Gluten-free:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Gluten Free" name="Gluten Free" value="Gluten Free"/>
          <label for="Ketogenic">Ketogenic:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Ketogenic" name="Ketogenic" value="Ketogenic"/>
          <label for="Vegetarian">Vegetarian:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian"/>
          <label for="Lactovegetarian">Lactovegetarian:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Lactovegetarian" name="Lactovegetarian" value="Lactovegetarian"/>
          <label for="Ovovegetarian">Ovovegetarian:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Ovovegetarian" name="Ovovegetarian" value="Ovovegetarian"/>
          <label for="Vegan">Vegan:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Vegan" name="Vegan" value="Vegan"/>
          <label for="Pescetarian">Pescetarian:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Pescetarian" name="Pescetarian" value="Pescetarian"/>
          <label for="Paleo">Paleo:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Paleo" name="Paleo" value="Paleo"/>
          <label for="Primal">Primal:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Primal" name="Primal" value="Primal"/>
          <label for="Whole30">Whole30:</label>
          <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Whole30" name="Whole30" value="Whole30"/>

          <h3> Filter by Intolerences :</h3>

          <label for="Dairy">Dairy:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Dairy" name="Dairy" value="Diary"/>
          <label for="Egg">Eggs:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Egg" name="Egg" value="Egg"/>
          <label for="Gluten">Gluten:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Gluten" name="Gluten" value="Gluten"/>
          <label for="Grain">Grains:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Grain" name="Grain" value="Grain"/>
          <label for="Peanut">Peanut:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Peanut" name="Peanut" value="Peanut"/>
          <label for="Seafood">Seafood:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Seafood" name="Seafood" value="Seafood"/>
          <label for="Sesame">Sesame:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Sesame" name="Sesame" value="Sesame"/>
          <label for="Shellfish">Shellfish:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Shellfish" name="Shellfish" value="Shellfish"/>
          <label for="Soy">Soya:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Soy" name="Soy" value="Soy"/>
          <label for="Sulfite">Sulfite:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Sulfite" name="Sulfite" value="Sulfite"/>
          <label for="Tree Nut">Tree Nut:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Tree Nut" name="Tree Nut" value="Tree Nut"/>
          <label for="Wheat">Wheat:</label>
          <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Wheat" name="Wheat" value="Wheat"/>

        </form>
      </div>
    )
  }


}

export default SearchFilers;
