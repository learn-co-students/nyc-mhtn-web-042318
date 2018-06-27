import React from 'react';
import UUID from 'uuid';

// Functional Component ==> usually Presentational Component
const Cupcake = (props) => {
  // console.log(UUID());
  const ingredientsList = props.ingredients.map(ingredient => {
    return <li key={UUID()}>{ingredient}</li>
  })

  return (
    <div className="border">
      <img src="something" />
      <h1>{props.name}</h1>
      <ul>
        {ingredientsList}

        {/* props.ingredients.map(ingredient => <li>{ingredient}</li>) */}
      </ul>
    </div>
  )
}

export default Cupcake;
//
// class Cupcake extends React.Component {
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }
