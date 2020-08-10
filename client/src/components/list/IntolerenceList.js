import React from 'react';

const IntolerenceList = ({intolerences}) => {
  const hackyFix = String(intolerences).split(",");
  const items = hackyFix.map(item => {
    return <p>{item}</p>
  })

  return(
      <div>
        <p>intolerences placeholder</p>
        {items}
      </div>
    )
}


export default IntolerenceList;
