import React from 'react';
import Topping from '../components/Topping';
import Search from '../components/Search';

class ToppingList extends React.Component {
  state = {
    search: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.filterMethod(this.state.search)
  }

  filteredList = () => {
    return this.props.toppings.filter(topping => topping.name.includes(this.state.search));
  }

  renderList = () => {
    return this.filteredList().map(topping => {
        return (
          <div key={topping.id}>
            <Topping
              name={topping.name}
            />
            <button
              id={topping.id}
              onClick={(event) => { this.props.handleSelect(topping.id) }}
            >
              Select {topping.name}
            </button>
          </div>
        )
    })
  }

  render() {
    return (
      <div className="border column">
        <h2>Topping List</h2>

        <Search
          name="search"
          value={this.state.search}
          placeholder="find filling"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {this.renderList()}
      </div>
    )
  }
}

export default ToppingList;
