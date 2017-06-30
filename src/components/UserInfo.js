import React, { Component } from 'react';
import {connect} from 'react-redux'
import RegisterUser from './RegisterUser'

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
)(UserInfo)
