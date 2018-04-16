import { UPDATE_USER } from '../actions/user-actions';

// user reducer with initial state ''
export default function userReducer(state = '', { type, payload }) {
  // switch statements are standard practice
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    // default must be provided
    default:
      return state;
  }
}