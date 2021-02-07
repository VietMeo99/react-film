import {
  LOGIN_SUCCESS,
  CLEAR_USER,
  UPDATE_USER_USERNAME,
  FETCH_USER_LIKES_SUCCESS,
  TOGGLE_LIKE,
  UPDATE_USER_PROFILE_SUCCESS
} from '../constants/ActionTypes';

const initialState: any = {
  currentUser: null,
  loadedAuth: false,
  likes: {}
};

const user = (state = initialState, action: Iaction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, 
        currentUser: action.payload.user,
        loadedAuth: true
      };
    case CLEAR_USER:
      return {
        ...initialState,
        loadedAuth: true
      };
    case UPDATE_USER_USERNAME:
      return {
        ...state,
        currentUser: { ...state.currentUser, displayName: action.payload.username }
      };
    case FETCH_USER_LIKES_SUCCESS:
      return {
        ...state,
        likes: { ...action.payload.likes }
      };
    case TOGGLE_LIKE:
      return {
        ...state,
        likes: { ...state.likes, [action.payload.id]: action.payload.liked }
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload.props }
      };
    default:
      return state;
  }
}
export default user;
