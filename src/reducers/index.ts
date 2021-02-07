import { combineReducers } from 'redux';
// import GamesReducer from './GamesReducer';
import UserReducers from "./UserReducers"

// content store in createStore
export default combineReducers({
  // games: GamesReducer,
  user: UserReducers,
});
