import React from 'react';

const NavBar = (props) => {
  return(
    <header>
    <h2> THIS IS THE NAV BAR </h2>
    <img scr="/images/KnifeAndFork.png" alt="logo"/>
    <ul>
    <li className="navLink">
      <a href="/">Home</a>
    </li>
      <li className="navLink">
        <a href="/users">Users</a>
      </li>
      
    </ul>
    </header>
  )
}

export default NavBar;
