import { setCounterAction } from './actions';

export function toggleDancing(dispatch) {
  return () => {
    const action = {
      type: "TOGGLE_DANCING"
    }
    dispatch(action);
  }
}

export function setCounter(dispatch) {

  return (value) => {
    dispatch(setCounterAction( value ));
  }
}
