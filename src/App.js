import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import connect from react-redux to app to redux store
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser('Doremon');
  }

  render() {
    return (
      <div className="App">

        <div onClick={this.onUpdateUser}>Update User</div>
        {this.props.user}
      </div>
    );
  }
}

// mapStateToProps receives the state of the store
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

// mapActionsToProps
const mapActionsToProps = {
  onUpdateUser: updateUser
};

// connecting app to redux store, connect takes in three arguments
  // mapStateToProps - recieves the state of the store, allowing which props to provide for the component
  // mapActionsToProps - dispatch actions from components, keeping from having to dispatch from components themselves, instead just call functions to dispatch actions to the store
export default connect(mapStateToProps, mapActionsToProps)(App);
