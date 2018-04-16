import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. import createStore from redux
import { createStore } from 'redux';

// 3. new store needs a reducer thats being passed in
function reducer(state, action) {
  return 'State';
}

// 4. create an action and dispatching action
const action = {
  type: 'changeState',
  payload: {
    newState: 'New state'
  }
};
store.dispatch(action);

// 2. set new store to store
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
