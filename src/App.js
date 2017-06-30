import React, { Component } from 'react';
import RegisterUser from './RegisterUser'
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
        <p className="App-intro">
          Her vil du få notifikasjoner når dine jobber i potion/palantir er ferdige
        </p>
        {!userName
          ? <RegisterUser/>
          : <div>
              Du er pålogget som bruker: {userName}
          </div>}
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
