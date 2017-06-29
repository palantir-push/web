import * as types from '../actions'

const initialState = {}

export default function(state = initialState, action = {}) {

  switch (action.type) {

    case 'FOO':
      return state

    default:
      return state
  }
}