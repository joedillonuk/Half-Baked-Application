import React from 'react';

const IntoleranceList = (props) => {
  if (!props){
    return null;
  }

  const knownIntolerances = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];


  const items = knownIntolerances.map(item => {
    // if (props.intolerances.user_id == 0){
      return <p>{item}</p>
    // }

  })


  return(
      <div>
        <p>intolerances placeholder</p>
        {items}
      </div>
    )
}


export default IntoleranceList;
