import React from 'react';

const Cocktail = (props) => {
  // console.log('Cocktail props', props)
  return (
    <div className="cocktail" onClick={(event) => { props.onClick(props.id) }}>
      <h2>{props.name}</h2>
      { props.showDetails ?
        <h3>{props.description}</h3>
      :
        null
      }
    </div>
  )
}

export default Cocktail;
