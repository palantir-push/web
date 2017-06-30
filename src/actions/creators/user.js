import * as types from '..'
import {fetchJson, postJson} from '../../utils/fetchUtils'

const serviceUrl = 'https://palantir-push-api.herokuapp.com'

export const setUsername = userName => ({type:types.SET_USERNAME, userName})
export const clearUsername = () => ({type:types.CLEAR_USERNAME})

export const registerUser = user => (dispatch, getState) => {
  console.log('##### Registering user:', user.userName);

  const subscription = getState().subscription
  postJson(serviceUrl+'/users/'+user.userName, subscription, {mode: 'cors'})
    .then(
      json => {
        console.log('##### got result:', json);
        return dispatch(setUsername(user.userName))
      }
    ).catch(
      err => console.log('##### failed registering user:', err)
    );
}

export const unregisterUser = () => (dispatch, getState) => {
  const user = getState().user
  console.log('##### Unregistering user:', user.userName);

  window.localStorage.userName = null

  const subscription = getState().subscription
  fetchJson(serviceUrl+'/users/'+user.userName, {
    method: 'delete',
    mode: 'cors'
  }).then(
    json => dispatch(clearUsername())
  ).catch(
    err => console.log('##### failed unregistering user:', err)
  );
}