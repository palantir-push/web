import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import subscription from './subscription'
import user from './user'

export default combineReducers({
  subscription,
  user,
  form
})