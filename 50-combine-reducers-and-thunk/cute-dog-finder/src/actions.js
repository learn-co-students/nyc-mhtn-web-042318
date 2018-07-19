import UUID from 'uuid';
import Adapter from './Adapter';

export const ADD_USER = "ADD_USER";
export const UPDATE_ANIMAL = "UPDATE_ANIMAL";

export function addUser(name, email) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email }
  }
}

export function updateAnimal(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchDog() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_DOG' })

    Adapter.getAnimal()
      .then(json => {
        console.log(json);
        dispatch(updateAnimal(json[0]))
        dispatch({ type: 'FETCHED_DOG' })

      })
  }
}

export function fetchCat() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_CAT' })

    Adapter.getAnimal()
      .then(json => {
        console.log(json);
        dispatch(updateAnimal(json[0]))
        dispatch({ type: 'FETCHED_CAT' })

      })
  }
}
