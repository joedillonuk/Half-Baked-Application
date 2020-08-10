import React from 'react'

const SavedRecipes = (props) => {

  if (!props){
    return null;
  }
  const items = props.recipes.map(item => {
    if (!item.blacklist){
      return <p>{item.name}</p>
    }

  })

  return(
      <div>
        <p>SavedRecipes placeholder</p>
        {items}
      </div>
    )

  }
export default SavedRecipes;
