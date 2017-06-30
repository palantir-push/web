import * as types from '../actions'

const initialState = {}

export default function(state = initialState, action = {}) {

  switch (action.type) {

    case types.SET_USERNAME:
      window.localStorage.userName = action.userName
      return {userName: action.userName}

    case types.CLEAR_USERNAME:
      window.localStorage.removeItem('userName')
      return {userName: null}

    default:
      return state
  }
}