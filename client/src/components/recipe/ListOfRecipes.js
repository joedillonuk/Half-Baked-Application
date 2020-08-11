import React from 'react';

const ListOfRecipes = (props) => {

const handleRecipeClick = (event) => {
  console.log(event);
  props.onReceiveRecipeClick(event);
}

  const items = props.recipes.map((item, index) => {
    // if (props.intolerances.user_id == 0){
      return <div  className="list-of-recipes-item">
                <p key={index} onClick={() => handleRecipeClick(item.id)} value={item.id}>{item.title}</p>
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
