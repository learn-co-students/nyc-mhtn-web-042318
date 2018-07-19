import { UPDATE_ANIMAL } from '../actions';

const initialState = {
  animalSrc: "http://cdn.shibe.online/shibes/e455e96eb60a152ec7a5a20004195047e9a6254e.jpg",
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_ANIMAL:
      return {...state, animalSrc: action.payload};
    default:
      return state;
  }
}
