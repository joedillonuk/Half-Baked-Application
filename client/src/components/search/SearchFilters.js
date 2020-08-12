import React from 'react';

class SearchFilers extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ingredientFilters: "",
      dietaryFilters: [],
      intoleranceFilters: []

    }
    this.handleIngredientFilter = this.handleIngredientFilter.bind(this);
    this.handleAddDietaryFilter = this.handleAddDietaryFilter.bind(this);
    this.handleAddIntoleranceFilter = this.handleAddIntoleranceFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //LOGIC HERE

  handleIngredientFilter(event){
    let newFilter = event.target.value;

    console.log(newFilter);


    this.setState({
      ingredientFilters: newFilter
    })
  }

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
      let filters = this.state.intoleranceFilters;
      filters.push(newFilter);
      this.setState({
        intoleranceFilters: filters
      })
    } else {
      let filters = this.state.intoleranceFilters;
      let index = filters.indexOf(newFilter);
      filters.splice(index,1);
      this.setState({
        intoleranceFilters: filters
      })
    }
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.ingredientFilters.length > 0 ){
      let search = "https://api.spoonacular.com/recipes/complexSearch?query="
      search = search + this.state.ingredientFilters
      //take off the extra comma
      if(this.state.dietaryFilters.length > 0 ){
        search = search + "&diet="
        this.state.dietaryFilters.forEach(function(item){ search = search + item + ","})
        search = search.slice(0,-1)
      }
      if(this.state.intoleranceFilters.length > 0 ){
        search = search + "&intolerances="
        this.state.intoleranceFilters.forEach(function(item){ search = search + item + ","})
        search = search.slice(0,-1)
      }
      //return the search url
      this.props.search(search);
    }
  }

  //RENDER HERE

  render(){
    return(
      <div className="search-filter">
      <form>
      <h3>Filter by Ingredient: </h3>

      <label>Ingredient name:</label>
      <input onChange={this.handleIngredientFilter} type="text" id="ingredientName1" name="ingredientName1"></input>

      <h3> FIlter by Dietary Requirements :</h3>

      <label> Gluten-free:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Gluten Free" name="Gluten Free" value="Gluten&Free"/>
      <label> Ketogenic:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Ketogenic" name="Ketogenic" value="Ketogenic"/>
      <label> Vegetarian:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian"/>
      <label> Lactovegetarian:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Lactovegetarian" name="Lactovegetarian" value="Lactovegetarian"/>
      <label> Ovovegetarian:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Ovovegetarian" name="Ovovegetarian" value="Ovovegetarian"/>
      <label> Vegan:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Vegan" name="Vegan" value="Vegan"/>
      <label> Pescetarian:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Pescetarian" name="Pescetarian" value="Pescetarian"/>
      <label> Paleo:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Paleo" name="Paleo" value="Paleo"/>
      <label> Primal:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Primal" name="Primal" value="Primal"/>
      <label> Whole30:</label>
      <input onClick={this.handleAddDietaryFilter} type="checkbox" id="Whole30" name="Whole30" value="Whole30"/>

      <h3> Filter by Intolerances :</h3>

      <label> Dairy:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Dairy" name="Dairy" value="Diary"/>
      <label> Eggs:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Egg" name="Egg" value="Egg"/>
      <label> Gluten:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Gluten" name="Gluten" value="Gluten"/>
      <label> Grains:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Grain" name="Grain" value="Grain"/>
      <label> Peanut:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Peanut" name="Peanut" value="Peanut"/>
      <label> Seafood:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Seafood" name="Seafood" value="Seafood"/>
      <label> Sesame:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Sesame" name="Sesame" value="Sesame"/>
      <label> Shellfish:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Shellfish" name="Shellfish" value="Shellfish"/>
      <label> Soya:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Soy" name="Soy" value="Soy"/>
      <label> Sulfite:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Sulfite" name="Sulfite" value="Sulfite"/>
      <label> Tree Nut:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Tree Nut" name="Tree Nut" value="Tree Nut"/>
      <label> Wheat:</label>
      <input onClick={this.handleAddIntoleranceFilter} type="checkbox" id="Wheat" name="Wheat" value="Wheat"/>

      <input onClick={this.handleSubmit} type="submit" value="Submit"/>
      </form>
      </div>
    )
  }


}

export default SearchFilers;
