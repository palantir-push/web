import React, { Component } from 'react';
import {connect} from 'react-redux'
import RegisterUser from './RegisterUser'
import {unregisterUser} from '../actions/creators/user'

class UserInfo extends Component {
  render() {
    const {userName} = this.props
    return (
      <div className="UserInfo">
        <p className="App-intro">
          Her vil du få notifikasjoner når dine jobber i potion/palantir er ferdige
        </p>
        {!userName
          ? <RegisterUser/>
          : <div>
              <div>
                Du er registrert som bruker: {userName}
              </div>
              <div>
                <button onClick={unregisterUser}>Av-registrer</button>
              </div>
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
  {unregisterUser}
)(UserInfo)
