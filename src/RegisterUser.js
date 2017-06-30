import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {registerUser} from './actions/creators/register'

class RegisterUser extends Component {
  render() {
    const {registerUser, handleSubmit, pristine, submitting} = this.props
    return (
      <form className="RegisterUser" onSubmit={handleSubmit(registerUser)}>
        <label>Angi ditt brukernavn:</label>
        <Field
          name="userName"
          component="input"
          type="text"
          placeholder="Brukernavn"
        />
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(
    mapStateToProps,
    {registerUser}
)(reduxForm({
  form: 'registration'
})(RegisterUser))
