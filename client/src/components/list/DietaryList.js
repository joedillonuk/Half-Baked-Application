import React from 'react'

const DietaryList = (props) => {

  if (!props){
    return null;
  }

const knownDiets = ["Gluten Free", "Ketogenic", "Vegetarian", "Lactovegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"]

const items = knownDiets.map((item, index) => {
  // if (props.intolerances.user_id == 0){
    return <li className="intolerance-list-item" key={index}>
              <p>{item}</p>
          </li>
  // }

})


return(
    <div className="intolerance-list">
    <div className="row">

      <h4>Dietary needs:</h4>
      {items}
      </div>
      </div>

  )
}
export default DietaryList;
