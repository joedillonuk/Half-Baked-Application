import React from 'react';
import HalfBakedLogo3 from './images/Half-BakedLogo3.png';



const NavBar = (props) => {

  function handleNavClick(event){
    props.handleViewChange(event.target.value);
  }

function handleProfileClick(){
  props.handleProfileClick()
}

function onSearchSubmit(event){
  let url = "https://api.spoonacular.com/recipes/complexSearch?query=" + document.getElementById("quickSearch").value
  props.search(url)
}

return(
  <header className="nav-bar">
    <img width="260.8" height="44.6" src={HalfBakedLogo3} alt="Logo"></img>
      <br/>
      <div className="row">
      <div id="nav-left">
        <input type="text" id="quickSearch" placeholder="Recipe Name"/>
        <button onClick={onSearchSubmit}>Quick Search</button>
        <button value="search" onClick={handleNavClick}>Detailed Search</button>
      </div>

      <div id="nav-center">
        <button value="savedRecipes" onClick={handleNavClick}>My Recipes</button>
        <button value="shopping" onClick={handleNavClick}>My Shopping List</button>
        <button value="dietary" onClick={handleNavClick}>My Dietary Needs and Intolerances</button>
      </div>

      <div id="nav-right">
        <button value="profile" onClick={handleProfileClick}>Profile</button>
        <button value="search" onClick={handleNavClick}>Help</button>
        {/*<button value="search" onClick={handleNavClick}>Help</button>*/}
      </div>
      </div>

    </header>
  )


}

export default NavBar;
