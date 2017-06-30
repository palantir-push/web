import React, { Component } from 'react';
import RegisterUser from './RegisterUser'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Palantir-push</h2>
        </div>
        <p className="App-intro">
          Just wait some hours and exciting things will start happening here...
        </p>
        <RegisterUser/>
      </div>
    );
  }
}

export default App;
