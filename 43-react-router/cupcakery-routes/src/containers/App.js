import React, { Component } from 'react';
import '../assets/css/App.css';
import CupcakeList from './CupcakeList';
import FillingList from './FillingList';
import ToppingList from './ToppingList';
import Cupbake from '../components/Cupbake';
import UUID from 'uuid';
import { Link, Route, Switch, Redirect } from 'react-router-dom'

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
          <Link to="/cupcakes">Cupcakes</Link>
          <Link to="/fillings">Fillings</Link>
          <Link to="/toppings">Toppings</Link>
        </div>

        <div className="content">

          {/*
          <Route path="/" component={() => {
            return (<p>Make some cupcakes! Explain it?</p>)
          }} />
          */}

          <Switch>

            <Route exact path="/cupcakes" component={(props) => {
              return (
                <CupcakeList
                   cupcakes={this.state.cupcakes}
                   handleSelect={this.selectCupcake}
                   { ...props }
                />
              )
            }}/>

          <Route exact path="/fillings" component={(props) => {
              return (
                <FillingList
                  fillings={this.state.fillings}
                  handleSelect={this.selectFilling}
                  { ...props }
                />
              )
            }}/>

          <Route exact path="/toppings/abunchofthings" component={() => {
              return (
                <React.Fragment>
                  <h2>Another toppings</h2>
                  <ToppingList
                    toppings={this.state.toppings}
                    handleSelect={this.selectTopping}
                  />
                </React.Fragment>
              )
            }}/>

          <Route path="/toppings" component={(props) => {
              return (
                <ToppingList
                  toppings={this.state.toppings}
                  handleSelect={this.selectTopping}
                  { ...props }
                />
              )
            }}/>

          <Route path="/cupbake" component={(props) => {
                return (
                  <Cupbake cupbake={this.state.cupbake} />
                )
              }}/>

          </Switch>

          <Redirect to="/" />

          <Cupbake cupbake={this.state.cupbake} />
        </div>
      </div>
    );
  }
}

export default App;
