import React, {Component} from 'react';


class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        allergies: null,
        dietaryNeeds: null,
        shoppingList: null,
        blacklist: null
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDietaryNeeds = this.handleDietaryNeeds.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event){
    let propertyName = event.target.name;
    let user = this.state.user;
    user[propertyName] = event.target.value;
    this.setState({user: user});
  }

  handleDietaryNeeds(event){
    const index = parseInt(event.target.value);
    const selectedDietaryNeed = this.props.dietaryNeeds[index];
    let user = this.state.user;
    user['dietary_needs'] = selectedDietaryNeed;
    this.setState({user: user});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.user);
  }

  render(){
    if(this.props.dietaryNeeds.length === 0){
      return <p>Loading.....</p>
    }
const dietaryNeedOption = this.props.dietaryNeeds.map((dietaryNeed, index) => {
  return <option key={index} value={index}>{dietaryNeed.name}</option>
})

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder=" First Name"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.user.firstName}
          />

          <input
          type="text"
          placeholder=" Last Name"
          name="lastName"
          onChange={this.handleChange}
          value={this.state.user.lastName}
          />

          <input
          type="text"
          placeholder="Allergy"
          name="allergy"
          onChange={this.handleChange}
          value={this.state.user.allergy}
          />

          <select name="dietary_needs" onChange={this.handleDietaryNeeds} defaultValue="select-dietary-need">
          <option disabled value="select-dietary-need">Select a dietary need</option>
          {dietaryNeedOption}
          </select>

          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default UserForm
