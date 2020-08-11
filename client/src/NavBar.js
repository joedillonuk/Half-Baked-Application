import React from 'react';
import HalfBakedLogo3 from './images/Half-BakedLogo3.png';

const NavBar = (props) => {

  function handleNavClick(event){
    props.handleViewChange(event.target.value);
  }

  return(
    <header>

    <h2> THIS IS THE NAV BAR </h2>

    <button value="savedRecipes" onClick={handleNavClick}>My Recpies</button>
    <button value="shopping" onClick={handleNavClick}>My Shopping List Recpies</button>
    <button value="dietary" onClick={handleNavClick}>My Dietary Needs and Intolerances</button>
    </header>
  )


}

export default NavBar;
