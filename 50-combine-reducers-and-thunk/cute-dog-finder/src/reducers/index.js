import { combineReducers } from 'redux';
import animalReducer from './animalReducer';
import userReducer from './userReducer';

export default combineReducers({
  animal: animalReducer,
  user: userReducer
})
