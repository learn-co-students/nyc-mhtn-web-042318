import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
// import FunctionalComponent from './FunctionalComponent';

// WHY DID THEY NAME EVERYTHING RENDER!!!!!!!!
// render()
// render --> render to the DOM
// render --> the DOM reflowing

class App extends Component {
  state = { name: "hello" }

  // componentWillMount() {
  //   this.setState({ name: "grand parent"})
  // }
  handleClick = () => {
    this.setState({})
  }

  render() {
    return (
      <ClassComponent name="grandparent">
        <ClassComponent name="z grandparent">
          <ClassComponent name="parent">
            <ClassComponent name="child">
              <ClassComponent name="zzzzzzzz" />
              <ClassComponent name="grand child 2" />
            </ClassComponent>
          </ClassComponent>
        </ClassComponent>
        <ClassComponent name="grandparent 2" />
        <button onClick={this.handleClick} >Click me!</button>
      </ClassComponent>
    );
  }
}

export default App;
