import React from 'react'

const Blacklist = (props) => {
  if (!props){
    return null;
  }
  const items = props.blacklist.map(item => {
    if (item.blacklist){
      return <p>{item.name}</p>
    }

  })

  return(
      <div>
        <p>Blacklist recipes placeholder</p>
        {items}
      </div>
    )
  }
export default Blacklist;
