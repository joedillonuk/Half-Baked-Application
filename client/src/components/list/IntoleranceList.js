import React from 'react';

const IntoleranceList = (props) => {
  if (!props){
    return null;
  }

  const knownIntolerances = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];


  const items = knownIntolerances.map((item, index) => {
    // if (props.intolerances.user_id == 0){
      return <div className="intolerance-list-item">
                <p key="index">{item}</p>
            </div>
    // }

  })


  return(
      <div className="intolerance-list">
      <div className="row">
      <div className="column">
        <p>intolerances:</p>
        </div>

        {items}

        </div>
      </div>
    )
}


export default IntoleranceList;
