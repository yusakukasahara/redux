import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

// import createStore and combineReducers from redux
import { combineReducers, createStore } from 'redux';

// import Provider to give app access to the store
import { Provider } from 'react-redux';

// combining products and user reducers to a single reducer object
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

// instantiate a new store with all reducers, default product iphone and user Yusaku, and devTools extension check/call
const store = createStore(
  allReducers, 
  {
  products: [{ name: 'iPhone' }],
  user: 'Yusaku'
  },
  // checks for redux devtools extension and calls if so
  window.devToolsExtension && window.devToolsExtension()
);

// logs current state of store
console.log(store.getState());

// action that updates user
const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'Doremon'
  }
}

// dispatch user change
// store.dispatch(updateUserAction);

// wrap App component with Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
