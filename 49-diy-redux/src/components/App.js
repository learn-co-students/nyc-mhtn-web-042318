import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import { connect } from "react-redux"


class App extends Component {

  banishHog = hog => {
    this.setState({ banished: [...this.state.banished, hog] });
  };

  filterBanished = () => {
    if (this.props.banished.length > 0) {
      return hogs.filter(hog => {
        return this.props.banished.indexOf(hog) === -1;
      });
    } else {
      return hogs;
    }
  };

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <br />
        <div className="sixteen wide column centered">
          <HogList handleBanishedClick={this.banishHog} hogs={this.filterBanished()} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    banished: state.banished
  }
}


export default connect(mapStateToProps)(App)
