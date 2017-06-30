import * as types from '../actions'

const initialState = {}

export default function(state = initialState, action = {}) {

  switch (action.type) {

    case types.SET_USERNAME:
      return {userName: action.userName}

    default:
      return state
  }
}