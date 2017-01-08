import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';

const mapAction = (state = {
  isFetching: false,
  message: '',
}, action) => {
  switch (action.type) {
    case 'A':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'B':
      return Object.assign({}, state, {
        isFetching: false,
        message: action.data.message,
      });
    default:
      return state;
  }
};


const INITIAL_STATE = Immutable({
  username: null,
  error: null,
  fetching: false
});

const authenticate = (state = INITIAL_STATE,  action) => {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, fetching: true };
    case 'SUCCESS':
      return { ...state, fetching: false, username: action.username };
    case 'AUTH_FAIL':
      return { ...state, fetching: false, error: action.error };
    case 'LOGOUT':
      return state;
    default:
      return state;
  }
};


// const authenticate = (state = { isFetching: false,
//   message: '' }, action) => {
//   switch (action.type) {
//     case 'SIGNUP':
//       return state;
//     case 'SIGNIN':
//       return state;
//     case 'LOGOUT':
//       return state;
//     default:
//       return state;
//   }
// };


const rootReducer = combineReducers({
  mapAction,
  authenticate,
});

export default rootReducer;
