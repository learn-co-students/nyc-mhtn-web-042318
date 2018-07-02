import React, { Component } from 'react';
import '../assets/css/App.css';
import CupcakeList from './CupcakeList';
import FillingList from './FillingList';
import ToppingList from './ToppingList';
import Cupbake from '../components/Cupbake';
import UUID from 'uuid';

const cupcakes = [
  {id: UUID(), name: 'Vanilla', ingredients: ['vanilla extract', 'eggs', 'flour', 'baking soda']},
  {id: UUID(), name: 'Chocolate', ingredients: ['chocolate']},
  {id: UUID(), name: 'Toothpaste', ingredients: ['colgate', 'listerine', 'breath mints', 'fresh crushed altoids']},
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

const cupbake = {
  cupcake: null,
  toppings: [],
  filling: null,
}

class App extends Component {
  state = {
    cupbake: {},
    cupcakes: [],
    toppings: [],
    fillings: [],
  }

  componentDidMount() {
    this.setState({
      cupbake,
      cupcakes,
      toppings,
      fillings,
    })
  }

  selectCupcake = (id) => {
    const cupcake = this.state.cupcakes.find(cupcake => cupcake.id === id);
    const cupbake = { ...this.state.cupbake, cupcake };
    this.setState({ cupbake });
  }

  selectFilling = (id) => {
    const filling = this.state.fillings.find(filling => filling.id === id);
    const cupbake = { ...this.state.cupbake, filling };
    this.setState({ cupbake });
  }

  selectTopping = (id) => {
    let topping = this.state.toppings.find(topping => topping.id === id);
    if (this.state.cupbake.toppings.find(t => t.id === topping.id)) {
      topping = { ...topping, id: UUID(), name: `Extra ${topping.name}`}
    }
    const toppings = [...this.state.cupbake.toppings, topping];
    const cupbake = { ...this.state.cupbake, toppings };
    this.setState({ cupbake });
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          { /* Code will go here */ }
        </div>

        <div className="content">
          <CupcakeList
            cupcakes={this.state.cupcakes}
            handleSelect={this.selectCupcake}
          />

          <FillingList
            fillings={this.state.fillings}
            handleSelect={this.selectFilling}
          />

          <ToppingList
            toppings={this.state.toppings}
            handleSelect={this.selectTopping}
          />

          <Cupbake cupbake={this.state.cupbake} />
        </div>
      </div>
    );
  }
}

export default App;
