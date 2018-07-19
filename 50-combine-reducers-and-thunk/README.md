Redux combineReducers & Thunk
=============================

## Outline

- [ ] actions and action creators
- [ ] multiple reducers
- [ ] async redux
- [ ] redux thunk
- [ ] middleware

## SWBAT

- Explain why we might want to split up our reducers
- Describe why actions can't return objects for async operations
- Explain how Thunk facilitates async action dispatching
- Define middleware
- Explain why it's useful to have a FETCHING_ and a FETCHED_ action type

## Lecture Notes

Redux actions as recommended in the [documentation](https://redux.js.org/basics/actions): `actions.js`
- CONSTANTS are defined as variables to help avoid spelling mistakes.
- Action Creators can help make our `dispatch(action)` look much cleaner.

```javascript
import { ADD_TODO, REMOVE_TODO } from '../actionTypes';

// Example action creator (returns an object):
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}
```

### Thunk

```javascript
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

// ...actions.js
export function fetchSongs() {
  return function(dispatch, getState) {
    dispatch({ type: "FETCHING_SONGS", payload: json });
    fetch(`${API}/songs`)
      .then(res => res.json())
      .then(json => dispatch({ type: "FETCHED_SONGS", payload: json }));
  };
}
```

## Resources

- [Redux Terminology Cheatsheet](https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6)
- [Redux Middleware](https://redux.js.org/advanced/middleware)
- [Async with Redux => Thunk](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559)
- [Why Thunk Middleware in Redux](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34584313)
