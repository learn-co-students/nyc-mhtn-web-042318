import React from 'react';
import { connect } from 'react-redux';

class Dancing extends React.Component {
  render() {
    if (this.props.dancing) {
      return (
        <div>
          <img src="https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif" />
          <button onClick={() => {
            const action = {
              type: "STOP_DANCING"
            }
            this.props.dispatch(action);
          }}>STOP!</button>
        </div>
      )
    } else {
      return (
        <div>
          <img src="https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" />
          <button onClick={() => {
            const action = {
              type: "START_DANCING"
            }
            this.props.dispatch(action);
          }}>DANCE!!!</button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dancing: state.dancing,
  }
}

const ReduxHigherOrderComponent = connect(mapStateToProps);

export default ReduxHigherOrderComponent(Dancing);
