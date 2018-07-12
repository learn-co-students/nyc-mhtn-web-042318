import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Dancing from './Dancing';
import { toggleDancing, setCounter } from './actionCreators';

class App extends Component {
  state = {
    value: 0,
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    console.log('APPPPPPP', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>Hello {this.props.counter}</p>
        <p>Is this alive? {this.props.alive.toString()}</p>

        <button onClick={() => {
          const action = {
            type: "CLICK_EVENT", // variety of things
            payload: {
              id: 1,
              // value: event.target.value,
            } // bunch of stuff being delivered
          }
          this.props.dispatch(action);
        }}>George</button>

      <button onClick={this.props.toggleDancing}>Dance Toggle!</button>
      <Dancing />

      <input
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
      />
      <button
        onClick={() => {
          this.props.setCounter(this.state.value)}
        }
      >
        Set Counter
      </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alive: state.alive,
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDancing: toggleDancing(dispatch),
    setCounter: setCounter(dispatch),
    dispatch
  }
}
// connect() => HOF => HOC
export default connect(mapStateToProps, mapDispatchToProps)(App);
