import React from 'react';

const ActiveFiltersList = (props) => {

  const items = props.setFilters.map(filter => {
    return <p>{filter}</p>
  });

return(
    <div>
      {items}
    </div>
  )
}

export default ActiveFiltersList;
