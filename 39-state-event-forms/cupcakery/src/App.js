import React, { Component } from 'react';
import './App.css';
import Cupcake from './Cupcake';
import CupcakeList from './CupcakeList';
import Cupbake from './Cupbake';
import UUID from 'uuid';

const cupcakes = [
  {name: 'Vanilla', ingredients: ['vanilla extract', 'eggs', 'flour', 'baking soda']},
  {name: 'Chocolate', ingredients: ['chocolate']},
  {name: 'Toothpaste', ingredients: ['colgate', 'listerine', 'breath mints', 'fresh crushed altoids']},
]

const toppings = [
  {id: UUID(), name: 'Sprinkles'},
  {id: UUID(), name: 'Rainbow Sprinkles'},
  {id: UUID(), name: 'Chocolate Sprinkles'},
  {id: UUID(), name: 'Crushed Oreos'},
  {id: UUID(), name: 'M&Ms'},
  {id: UUID(), name: 'Frosting'},
  {id: UUID(), name: '💩'},
]

const fillings = [
  {id: UUID(), name: 'Peanut Butter'},
  {id: UUID(), name: 'Cream'},
  {id: UUID(), name: '💩'},
]

// const cupbake = {
//   cupcake: cupcakes[0],
//   toppings: [],
//   filling: null,
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      cupbake: {
        cupcake: cupcakes[0],
        toppings: [],
        filling: null,
      }
    }
  }

  // state = {
  //   cupbake: {
  //     cupcake: cupcakes[0],
  //     toppings: [],
  //     filling: null,
  //   }
  // }

  render() {
    // const cupcakeList = cupcakes.map(cupcake => <Cupcake key={UUID()} name={cupcake.name} ingredients={cupcake.ingredients} />)
    return (
      <div className="App">
        <CupcakeList cupcakes={cupcakes} />
        {/* cupcakeList */}
        {/* <Cupcake name={cupcakes[0].name} ingredients={cupcakes[0].ingredients} /> */}
        {/* <ToppingList /> */}
        {/* <FillingList /> */}
        <Cupbake cupbake={this.state.cupbake} />
      </div>
    );
  }
}

export default App;
