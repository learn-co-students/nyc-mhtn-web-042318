import React from 'react';
import Cupcake from '../components/Cupcake';
import Search from '../components/Search';

class CupcakeList extends React.Component {
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

  filteredCupcakes = () => {
    return this.props.cupcakes.filter(cupcake => cupcake.name.includes(this.state.search));
  }

  renderCupcakes = () => {
    return this.filteredCupcakes().map(cupcake => {
        return (
          <div key={cupcake.id}>
            <Cupcake
              name={cupcake.name}
              ingredients={cupcake.ingredients}
            />
            <button
              id={cupcake.id}
              onClick={(event) => {
                this.props.handleSelect(cupcake.id);
                this.props.history.push("/fillings");
              }}
            >
              Select {cupcake.name}
            </button>
          </div>
        )
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="border column">
        <h2>Cupcake List</h2>

        <Search
          name="search"
          value={this.state.search}
          placeholder="find cupcake"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {this.renderCupcakes()}
      </div>
    )
  }
}

export default CupcakeList;
