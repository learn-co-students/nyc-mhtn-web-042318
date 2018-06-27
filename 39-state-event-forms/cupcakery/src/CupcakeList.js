import React from 'react';
import Cupcake from './Cupcake';
import UUID from 'uuid';

const CupcakeList = (props) => {
  // const cupcakeList = cupcakes.map(cupcake => <Cupcake key={UUID()} name={cupcake.name} ingredients={cupcake.ingredients} />)
  return (
    <div className="border column">
      <h2>Cupcake List</h2>
      {props.cupcakes.map(cupcake => <Cupcake key={UUID()} name={cupcake.name} ingredients={cupcake.ingredients} />)}
    </div>
  )
}

export default CupcakeList;
