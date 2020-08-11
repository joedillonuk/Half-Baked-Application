import React from 'react';

const ListOfRecipes = (props) => {

const handleRecipeClick = (event) => {
  console.log("The item clicked was" + event.id);
  props.onReceiveRecipeClick(event);
}

  const items = props.recipes.map((item, index) => {
    // if (props.intolerances.user_id == 0){
      return <div key={index} onClick={() => handleRecipeClick(item)} value={item}  className="list-of-recipes-item">
                <p >{item.title} {item.id}</p>

            </div>
    // }

  })

  return(


    <div className="list-of-recipes">
    <h2>Recipes</h2>

    {items}


    </div>
  )
}

export default ListOfRecipes;
