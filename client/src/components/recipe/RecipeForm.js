import React, {Component} from 'react';


class RecipeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: {
        name: ""

      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event){
    let propertyName = event.target.name;
    let user = this.state.user;
    user[propertyName] = event.target.value;
    this.setState({user: user});
  }


  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.user);
  }

  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      placeholder=" Recipe Name"
      name="name"
      onChange={this.handleChange}
      value={this.state.recipe.name}
      />
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}

export default RecipeForm
