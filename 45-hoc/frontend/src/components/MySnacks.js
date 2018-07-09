import React, { Component } from 'react';
import SnackList from './SnackList';
import Adapter from './Adapter';
import withLoading from '../hocs/withLoading';

class MySnacks extends Component {
  state = {
    snacks: this.props.initialData,
  }
  //
  // componentDidMount() {
  //   this.getSnacks();
  // }
  //
  // getSnacks = () => {
  //   // We should be grabbing the userId and keeping is somewhere in state.
  //   Adapter.getMySnacks(1)
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         snacks: json,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="my-snacks">
        <h2>My Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default withLoading(MySnacks, () => { return Adapter.getMySnacks(1) });
