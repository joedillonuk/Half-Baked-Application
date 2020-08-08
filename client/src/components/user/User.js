import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

  if (!user){
    return "Loading..."
  }

  const url = `/users/${user.id}`;

  return (
    <Fragment>
    <Link to={url}>
    {user.firstName} {user.lastName}
    </Link>
    <Link>
    {user.allergies.name}
    </Link>
    </Fragment>
  )
}

export default User;
