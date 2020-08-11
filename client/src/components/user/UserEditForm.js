import React, {Component} from 'react';
import JohnSmith from '../../images/JohnSmith.jpg';
import Request from '../../helpers/request.js'
class UserEditForm extends Component {

  constructor(props){
    super(props);

    this.state={
      editView: false,
      updatedAge: null,
      updatedWeight: null,
      updatedGender: null
    }
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    this.setEditView = this.setEditView.bind(this);
    this.updatedAge = this.updatedAge.bind(this);
    this.updatedWeight = this.updatedWeight.bind(this);
    this.updatedGender = this.updatedGender.bind(this);
  }

  setEditView(){
    this.setState({editView: !this.state.editView})
  }

  updatedAge(event){
    this.setState({updatedAge: event.target.value})
  }

  updatedWeight(event){
    this.setState({updatedWeight: event.target.value})
  }

  updatedGender(event){
    this.setState({updatedGender: event.target.value})
  }

  handleProfileUpdate(event){
    event.preventDefault();
    const request = new Request();
    let user = this.props.user;
    user.age = this.state.updatedAge;
    user.weight = this.state.updatedWeight;
    user.gender = this.state.updatedGender;
    request.put("http://localhost:8080/api/users/0", user)
    .then(this.setState({editView: false}))
  }

  render(){

    if (!this.state.editView){

      return (

        <div>

        <img width="232" height="204" src={JohnSmith} alt="Profile Picture"></img>
        <div>

        <p className="name">
        {this.props.user.firstName} {this.props.user.lastName}
        </p>

        <p className="age">
        Age :{this.props.user.age}
        </p>

        <p className="gender">
        Gender: {this.props.user.gender}
        </p>

        <p className="weight">
        Weight: {this.props.user.weight}kg
        </p>

        <button onClick={this.setEditView}>Update Profile</button>

        {/*<p className="intolerances">
        {props.user.intolerances}
        </p>

        <p className="dietary_needs">
        {props.user.dietaryNeeds}
        </p>

        <p className="shopping_list">
        {props.user.shoppingList}
        </p>

        <p className="blacklist">
        {props.user.blacklist}
        </p>*/}

        </div>
        </div>
      )
    }
    return(

      <div>
      <p className="name">
      {this.props.user.firstName} {this.props.user.lastName}
      </p>

      <input type="number" placeholder={this.props.user.age} onChange={this.updatedAge}></input>

      <input type="text" placeholder={this.props.user.gender} onChange={this.updatedGender}></input>

      <input type="number" placeholder={this.props.user.weight} onChange={this.updatedWeight}></input>

      {/*<p className="intolerances">
      {props.user.intolerances}
      </p>

      <p className="dietary_needs">
      {props.user.dietaryNeeds}
      </p>

      <p className="shopping_list">
      {props.user.shoppingList}
      </p>

      <p className="blacklist">
      {props.user.blacklist}
      </p>*/}
      <button type="submit" onSubmit={this.handleProfileUpdate}>Update</button>
      </div>

    )
  }
}

export default UserEditForm;
