import { ADD_USER } from '../actions';

const initialState = {
  users: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      let users = [...state.users, action.payload];
      return {...state, users};
    default:
      return state;
  }
}
