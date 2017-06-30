import * as types from '../actions'

const initialState = {}

const extractSubscriptionDetails = subscription => {
  const rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
  const key = rawKey
    ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey)))
    : '';
  const rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
  const authSecret = rawAuthSecret
      ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret)))
      : '';
  const endpoint = subscription.endpoint;
  console.log('##### endpoint=', endpoint, key, authSecret);

  return {
    endpoint,
    key,
    authSecret
  }
}

export default function(state = initialState, action = {}) {

  switch (action.type) {

    case types.SET_SUBSCRIPTION:
      return extractSubscriptionDetails(action.subscription)

    default:
      return state
  }
}