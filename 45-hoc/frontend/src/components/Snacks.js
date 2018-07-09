import React, { Component } from 'react';
import SnackList from './SnackList';
import Adapter from './Adapter';
import withLoading from '../hocs/withLoading';

class Snacks extends Component {
  state = {
    snacks: this.props.initialData,
  }

  // componentDidMount() {
  //   this.getSnacks();
  // }
  //
  // getSnacks = () => {
  //   Adapter.getSnacks()
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         snacks: json,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="snacks">
        <h2>Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default withLoading(Snacks, Adapter.getSnacks);
