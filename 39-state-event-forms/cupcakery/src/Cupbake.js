import React, { Component } from 'react';
import Cupcake from './Cupcake';

class Cupbake extends Component {
  render() {
    return (
      <div className="border column">
        <h2>Our Cupbake</h2>
        <Cupcake
          name={this.props.cupbake.cupcake.name}
          ingredients={this.props.cupbake.cupcake.ingredients}
        />
        Toppings
        Filling
      </div>
    )
  }
}

export default Cupbake;
