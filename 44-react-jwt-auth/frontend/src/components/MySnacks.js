import React, { Component } from 'react';
import SnackList from './SnackList';

class MySnacks extends Component {
  state = {
    snacks: [],
  }

  componentDidMount() {
    this.getSnacks();
  }

  getSnacks = () => {
    fetch(
      `http://localhost:3000/users/1/snacks`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token')
        }
      }
    )
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(json => {
      this.setState({
        snacks: json,
      });
    })
    .catch(err => {
      console.log('catch');
      this.setState({
        snacks: [],
      });
    })
  }

  render() {
    return (
      <div className="my-snacks">
        <h2>My Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default MySnacks;
