import React from 'react';

export function withColor(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent color="blue" />
      )
    }
  }
}

export default withColor;
