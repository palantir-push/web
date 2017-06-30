const serviceUrl = 'https://palantir-push-api.herokuapp.com'

export const registerUser = user => (dispatch, getState) => {
  console.log('##### Registering user:', user.userName);

  window.localStorage.userName = user.userName

  const subscription = getState().subscription
  fetch(serviceUrl+'/users/'+user.userName, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(subscription)
  });
}

export const unregisterUser = user => (dispatch, getState) => {
  console.log('##### Unregistering user:', user.userName);

  window.localStorage.userName = null

  const subscription = getState().subscription
  fetch(serviceUrl+'/users/'+user.userName+'/unregister', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(subscription)
  });
}