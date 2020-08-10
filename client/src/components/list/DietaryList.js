import React from 'react'

const DietaryList = (props) => {

  if (!props){
    return null;
  }
  const items = props.dietaryNeeds.map(item => {

      return <p>{item.name}</p>
    

  })

  return(
      <div>
        <p>Dietary Needs placeholder</p>
        {items}
      </div>
    )

  }
export default DietaryList;
