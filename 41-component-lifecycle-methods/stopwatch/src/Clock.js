import React from 'react';

class Clock extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    let prevTime = (this.props.milliseconds / 1000).toFixed(this.props.accuracy);
    let nextTime = (nextProps.milliseconds / 1000).toFixed(nextProps.accuracy);
    console.log(prevTime, nextTime)
    return prevTime !== nextTime;
    // return true;
  }

  render() {
    console.log('render');
    let { milliseconds, accuracy } = this.props;

    return (
      <h1>{(milliseconds / 1000).toFixed(accuracy)}</h1>
    )
  }
}

// const Clock = ({ milliseconds, accuracy = 2 }) => {
//   return (
//     <h1>{(milliseconds / 1000).toFixed(accuracy)}</h1>
//   )
// }

export default Clock;
