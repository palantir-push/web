import React, { Component } from 'react';
import UserInfo from './components/UserInfo'
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const {userName} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Velkommen til Palantir-push</h2>
        </div>
        <UserInfo/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userName: state.user.userName
})

export default connect(
  mapStateToProps,
)(App)
