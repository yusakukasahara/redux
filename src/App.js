import React, { Component } from 'react';
import './App.css';

// for action binding
import { bindActionCreators } from 'redux';

// import connect from react-redux to app to redux store
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {

    return (
      <div className="App">
        <input onChange={this.onUpdateUser} />
        <br/>
        {this.props.user} 
      </div>
    );
  }
}

// mapStateToProps receives the state of the store
// Using passed props by passing props as second argument
const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    customProp: `${state.user} ${props.someProp}`
  }
};

// mapActionsToProps
// can also be a function with dispatch and props as arguments
// const mapActionsToProps = {
//   onUpdateUser: updateUser
// };

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  },
    dispatch
  )
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log('propsFromState', propsFromState, 'propsFromDispatch', propsFromDispatch, 'ownProps', ownProps) 
  return {};
}

// connecting app to redux store, connect takes in three arguments
  // mapStateToProps - recieves the state of the store, allowing which props to provide for the component
  // mapActionsToProps - dispatch actions from components, keeping from having to dispatch from components themselves, instead just call functions to dispatch actions to the store
  // mergeProps
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
