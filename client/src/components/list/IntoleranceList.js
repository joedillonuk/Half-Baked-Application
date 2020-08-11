import React from 'react';

const IntoleranceList = (props) => {
  if (!props){
    return null;
  }

  const knownIntolerances = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];


  const items = knownIntolerances.map((item, index) => {
    // if (props.intolerances.user_id == 0){
      return <li className="intolerance-list-item" key={index}>
                <p>{item}</p>
            </li>
    // }

  })


  return(
      <div className="intolerance-list">
      <div className="row">

        <p>intolerances:</p>
      


        {items}
        </div>
        </div>

    )
}


export default IntoleranceList;
