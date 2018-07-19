import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from './Adapter';
import { fetchDog } from './actions';

class AnimalPicture extends Component {
  handleClick = (event) => {
    this.props.fetchDog()
    this.props.fetchCat()
    // Adapter.getAnimal()
    //   .then(json => {
    //     console.log(json);
    //     this.props.updateAnimal(json[0]);
    //   })
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.props.animalSrc} />
        <button onClick={this.handleClick}>George</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalSrc: state.animal.animalSrc
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDog: () => fetchDog(dispatch) ===> fetchDog does dispatch
//   }
// }

// export default connect(mapStateToProps, { fetchDog, fetchCat })(AnimalPicture);

function mapDispatchToProps(dispatch) {
  return {
    fetchDog: () => dispatch(fetchDog()) // ===> dispatch a fetchDog action
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPicture);
