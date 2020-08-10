import React from 'react'

const ShoppingList = (props) => {

  if (!props){
    return null;
  }
  const items = props.shoppingList.map(item => {
      return <p>{item.name}</p>

  })

  return(
      <div>
        <p>ShoppingList placeholder</p>
        {items}
      </div>
    )

  }
export default ShoppingList;
