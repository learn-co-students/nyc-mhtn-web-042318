import React from 'react';
import Cupcake from './Cupcake';
import UUID from 'uuid';

// const CupcakeList = (props) => {
class CupcakeList extends React.Component {
  // state = {
  //   search: ""
  // }

  // handleChange = event => {
  //   console.log('event', event.target.value)
  //   // this.setState({
  //   //   search: event.target.value
  //   // })
  //   console.log(event.target.name)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.filterMethod(this.state.search)
  //   // event.persist()
  //   // setTimeout(() => {console.log(event)}, 100)
  //
  // }

  render() {
    // const cupcakeList = cupcakes.map(cupcake => <Cupcake key={UUID()} name={cupcake.name} ingredients={cupcake.ingredients} />)
    // {[<> <> <> <>]}
    const someFunction = () => {
      console.log('hello world')
    }

    console.log('I rendered CupcakeList');

    return (
      <div className="border column">
        <h2>Cupcake List</h2>

        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.search}
            placeholder="search for george's cupcakes"
            onChange={this.props.handleChange}
            name="search"
          />
          <input type="submit" value="Submit" />
        </form>

        {this.props.cupcakes.map(cupcake => {
            const newFunction = () => { this.props.georgeSelectsCupcake(cupcake.id) };

            return (
              <React.Fragment>
                <Cupcake
                  key={cupcake.id}
                  name={cupcake.name}
                  ingredients={cupcake.ingredients}
                />
              <button
                id={cupcake.id}
                onClick={(event) => { this.props.georgeSelectsCupcake(cupcake.id) }}
              >George</button>
              </React.Fragment>
            )
        })}
      </div>
    )
  }
}

export default CupcakeList;
