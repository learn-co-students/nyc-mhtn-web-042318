import React from 'react';
import Filling from '../components/Filling';
import Search from '../components/Search';

class FillingList extends React.Component {
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
    return this.props.fillings.filter(filling => filling.name.includes(this.state.search));
  }

  renderList = () => {
    return this.filteredList().map(filling => {
        return (
          <div key={filling.id}>
            <Filling
              name={filling.name}
            />
            <button
              id={filling.id}
              onClick={(event) => {
                this.props.handleSelect(filling.id);
                this.props.history.push("/toppings");
              }}
            >
              Select {filling.name}
            </button>
          </div>
        )
    })
  }

  render() {
    return (
      <div className="border column">
        <h2>Filling List</h2>

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

export default FillingList;
