import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Cocktail from './Cocktail';
import CocktailDetails from './CocktailDetails';
import Filter from './Filter';

class App extends Component {
  // First gotcha, need props to do this:
  // This won't work:
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     cocktails: this.props.cocktails, <-- this will fail badly
  //   }
  // }
  // This will work:
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     cocktails: this.props.cocktails,
  //   }
  // }
  state = {
    cocktails: [],
    filteredCocktails: [],
    searchTerm: "",
    selectedCocktail: null, // <-- we're gonna see an error with this
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(result => {
        // console.log('result', result);
        return result.json()
      })
      .then(json => {
        console.log('json', json);
        this.setState({ cocktails: json, filteredCocktails: json }, () => {
          // console.log('componentDidMount setState', this.state)
        })
      })
  }

  selectCocktail = (id) => {
    // console.log('selectCocktail', id);
    // event.target.id == id
    const selectedCocktail = this.state.cocktails.find(cocktail => cocktail.id === id);
    this.setState({ selectedCocktail }, () => { console.log('selectCocktail', this.state); });
  }

  handleSearchChange = (event) => {
    // console.log(event.target.value);

    // This is a bug. It will always be one keystroke behind:
    /*
    this.setState({
      [event.target.name]: event.target.value, //.toUpperCase(),
      filteredCocktails: this.state.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      // This doesn't work because
      // cocktails: this.state.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })
    */

    // Instead, do this:
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.setState({
        filteredCocktails: this.state.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      })
    })

    // Or do this:
    // this.setState({
    //   [event.target.name]: event.target.value,
    //   filteredCocktails: this.state.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(event.target.value.toLowerCase()))
    // })
  }

  filteredCocktails = () => {
    return this.state.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  renderEverthing = () => {
    let someVariable = this.state;

    return (
      <div className="App">
        {this.state}

        {
          this.state.selectedCocktail ?
            <CocktailDetails cocktail={this.state.selectedCocktail} showDetails />
          :
            null
        }

        <Filter searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange} />

        <List cocktails={this.filteredCocktails()} select={this.selectCocktail} />

        <List cocktails={this.state.filteredCocktails} select={this.selectCocktail} />



        {/*


        <Details></Details>
        <CreateForm></CreateForm>
        */}
      </div>
    )
  }

  render() {
    return this.renderEverthing()
  }
}

export default App;
