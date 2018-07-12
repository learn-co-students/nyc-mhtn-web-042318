import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  alive: true,
  dancing: true,
  counter: 0,
}

// .reduce ==> reducer
// action, a thing that happens
// when the store receives an action from dispatch, it will
// call reducer and give it: previous state (current state), action
const reducer = (state = initialState, action, id) => {
  console.log('state', state);
  console.log('action', action);
  console.log('id:arg', id);
  console.log('id:meow', action.id);
  // console.log('id:payload', action.payload.id);

  // if (action.type === "CLICK_EVENT") {
  //   return { ...state, alive: false, cat: "meow" }
  //   // state.alive = false;
  // } else if (action.type === "STOP_DANCING"){
  //   return { ...state, dancing: false }
  // }


  switch(action.type) {
    case "CLICK_EVENT":
      const { id } = action.payload
      console.log('id:payload', id);
      return { ...state, alive: !state.alive, cat: "meow", counter: state.counter + 1 }
    case "STOP_DANCING":
      return { ...state, dancing: false }
    case "START_DANCING":
      return { ...state, dancing: true }
    case "TOGGLE_DANCING":
      return { ...state, dancing: !state.dancing }
    case "SET_COUNTER":
      return { ...state, counter: action.payload.value }
    default:
      return state;
  }

  // return state;
}

console.log('before createStore');
// store receives an action, then reduces
const store = createStore(reducer);

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("SPECIAL")
    console.log('%c before', 'color: blue', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c after', 'color: red', store.getState());
    console.groupEnd()
    return returnValue;
  }
}
store.dispatch = addLoggingToDispatch(store);

console.log(store);
console.log('after createStore', store.getState());


// to send out => it's sending it (action) out to the store
const action = {
  type: "CLICK_EVENT", // variety of things
  payload: {
    id: 1,
    // value: event.target.value,
  } // bunch of stuff being delivered
}
store.dispatch(action);
console.log('after CLICK_EVENT', store.getState());

const meow_action = {
  type: "MEOW",
  id: 1,
}
store.dispatch(meow_action);
console.log('after MEOW', store.getState());

const stop_dancing_action = {
  type: "STOP_DANCING"
}
const id = 1;
store.dispatch(stop_dancing_action, id);
console.log('after STOP_DANCING', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
