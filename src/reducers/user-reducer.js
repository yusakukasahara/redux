// user reducer with initial state ''
export default function userReducer(state = '', { type, payload }) {
  // switch statements are standard practice
  switch (type) {
    case 'updateUser':
      return payload;
    // default must be provided
    default:
      return state;
  }
}