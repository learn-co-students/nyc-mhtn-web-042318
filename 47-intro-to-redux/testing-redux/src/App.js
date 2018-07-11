import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
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
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// connect() => HOF => HOC
export default connect(mapStateToProps)(App);
