import React, { Component } from 'react';
import './App.css';
import Cupcake from './Cupcake';
import CupcakeList from './CupcakeList';
import Cupbake from './Cupbake';
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
      },
      cupcakes,
      filteredCupcakes: cupcakes,
      toppings,
      fillings,
      // index: 0,
      // title: "hello",
      search: "",
    }

    // this.someFunction = this.someFunction.bind(this);
  }

  handleChange = event => {
    console.log('event', event.target.value)
    // this.setState({
    //   search: event.target.value
    // })
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterMethod(this.state.search)
    // event.persist()
    // setTimeout(() => {console.log(event)}, 100)

  }

  /*
    this.state.cupcakes.filter(cupcake => cupcake.name.includes(search))
  */

  // Copy Cat Method
  // filteredCupcakes = (search) => {
  //   this.setState({
  //     filteredCupcakes: this.state.cupcakes.filter(cupcake => cupcake.name.includes(search))
  //   })
  // }

  filteredCupcakes = () => {
    return this.state.cupcakes.filter(cupcake => cupcake.name.includes(this.state.search))
  }

  // someFunction() {
  //   console.log(this);
  //   this.setState({
  //     count: 100
  //   });
  //   console.log('I work!!!');
  // }



  someFunction = (id) => {
    // console.log('event', event.target.id);
    console.log('id', id);
    // console.log('currentTarget', event.currentTarget)
    // // debugger
    // console.log(this);
    // console.log('before state', this.state);\
    this.setState({
      cupbake: {
        cupcake: cupcakes.find(cupcake => cupcake.id === id),
        toppings: [],
        filling: null,
      }
    });
    // console.log('I work!!!');
  }

  // state = {
  //   cupbake: {
  //     cupcake: cupcakes[0],
  //     toppings: [],
  //     filling: null,
  //   }
  // }

  render() {
    console.log('I rendered', this.state);
    // const cupcakeList = cupcakes.map(cupcake => <Cupcake key={UUID()} name={cupcake.name} ingredients={cupcake.ingredients} />)
    return (
      <div className="App">
        <CupcakeList
          cupcakes={this.filteredCupcakes()}
          georgeSelectsCupcake={this.someFunction.bind(this)}
          filterMethod={this.filteredCupcakes}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          search={this.state.search}
        />
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
