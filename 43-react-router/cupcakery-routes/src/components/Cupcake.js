import React from 'react';
import UUID from 'uuid';

const Cupcake = (props) => {
  const ingredientsList = props.ingredients.map(ingredient => {
    return <li key={UUID()}>{ingredient}</li>
  })

  return (
    <div className="border">
      {/* <img src="something" /> */}
      <h1>{props.name}</h1>
      <ul>
        {ingredientsList}
      </ul>
    </div>
  )
}

export default Cupcake;
