import React from 'react';

const CocktailDetails = (props) => {
  // console.log('Cocktail props', props)
  return (
    <div className="cocktail" onClick={(event) => { props.onClick(props.cocktail) }}>
      <h2>{props.cocktail.name}</h2>
      { props.showDetails ?
        <h3>{props.cocktail.description}</h3>
      :
        null
      }
    </div>
  )
}

export default CocktailDetails;
