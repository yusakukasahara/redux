import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import createStore and combineReducers from redux
import { combineReducers, createStore } from 'redux';

// products reducer with initial state of []
function productsReducer(state = [], action) {
  return state;
}

// user reducer with initial state ''
function userReducer(state = '', action) {
  return state;
}

// combining products and user reducers to a single reducer object
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

// instantiate a new store with default product iphone and user Yusaku
const store = createStore(allReducers, {
  products: [{ name: 'iPhone' }],
  user: 'Yusaku'
});

// logs current state of store
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
