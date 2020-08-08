import React from 'react';

const NavBar = (props) => {
  return(
    <header>
    <h2> THIS IS THE NAV BAR </h2>
    <img scr="/images/KnifeAndFork.png" alt="logo"/>
    <ul>
      <li className="navLink">
        <a href="api/users">Users</a>
      </li>
      <li className="navLink">
        <a href="api/users/new">Create User</a>
      </li>
      <li className="navLink">
        <a href="api/recipes">Recipes</a>
      </li>
      <li className="navLink">
        <a href="api/recipes/new">Create Recipe</a>
      </li>
    </ul>
    </header>
  )
}

export default NavBar;
