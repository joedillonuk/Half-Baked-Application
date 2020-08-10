import React from 'react';

const IntoleranceList = (props) => {
  if (!props){
    return null;
  }
  const items = props.intolerances.map(item => {
    // if (props.intolerances.user_id == 0){
      return <p>{item.name}</p>
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
