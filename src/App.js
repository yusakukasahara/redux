import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import connect from react-redux to app to redux store
import { connect } from 'react-redux';

class App extends Component {
  render() {

    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// mapStateToProps receives the state of the store
const mapStateToProps = state => {
  return state;
}
//

// connecting app to redux store
export default connect(mapStateToProps)(App);
