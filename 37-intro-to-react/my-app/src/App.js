import React, { Component } from 'react';
import Header from './Header';
import TimeList from './TimeList';

// 
// class AnotherComponent extends Component {
//   render() {
//     this.props.color
//     return <JSX />
//   }
// }
//
// const YetAnotherCompoonebnt = (gobblygook) => {
//   gobblygook.color
//   return <JSX />
// }
//
//
// function YetYetAnotherCompoonebnt(props) {
//   return <JSX />
// }


// Class Component
class App extends Component {
  state = {
    times: []
  }

  addTime = () => {
    const times = [...this.state.times, Date.now()]
    this.setState({
      times
    })

    console.log(React.createElement("input", { type: "text", value: "", placeholder: "seven" }));
  }

  iffyFunction() {
    if (6 + 1 === 7)
      return "seven"

    return "eight"
  }

  // How do I add a header and a paragraph to this?
  // Order of Elements in HTML
    // The way it looks. I'm so sorry.
  // It's not fun. There's nop logic to it.
    // The carrots <?>
  // It's verbose.
  /*
    CamelCase
    pascalCase
    snake_case
    kebab-case
  */
  render() {
    return (
      <div>
        <p>Text
                  this.addTime()
          new Date()
        </p>
        <h1>{`Date: ${new Date()}`}</h1>
        <h2>{this.iffyFunction()}</h2>
        <Header color="red" value="whatever" />
        <Header color="blue" value="seven" />
        <Header color="green" />
        <Header color="magenta" />
        <Header color="mauve" />
        <Header color="fuschia" />
        <input type="text" value="" placeholder="seven" />
        { React.createElement("input", { type: "text", value: "", placeholder: "seven" }) }
        <button onClick={this.addTime}>Record Time</button>
        <TimeList times={this.state.times.slice(this.state.times.length / 2)}/>
        <TimeList times={this.state.times}/>
        <TimeList times={this.state.times}/>
        <TimeList times={this.state.times}/>
      </div>
    );
  }
}

export default App;
