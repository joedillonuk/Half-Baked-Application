import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import User from '../components/user/User.js'
import Request from '../helpers/request';

class UserContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
    this.findUserById = this.findUserById.bind(this);
  }


  componentDidMount(){
    const request = new Request();

    request.get('api/users')
    .then((data) => {
      this.setState({users: data})
    })
  }

  findUserById(id){
    return this.state.users.find((user) => {
      return user.id === parseInt(id);
    });
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Route exact path="/users/:id" render={(props) => {
        const id = props.match.params.id;
        const user = this.findUserById(id);
        return <User user={user}/>
      }}/>
      </Fragment>
      </Router>
    )
  }
}

export default UserContainer;
