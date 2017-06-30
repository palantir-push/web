const serviceUrl = 'https://palantir-push-api.herokuapp.com'

export const registerUser = userName => (dispatch, getState) => {
  // TODO put cookie

  const subscription = getState().subscription

  console.log('##### Registering user');

  fetch(serviceUrl+'/users/'+userName, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(subscription)
  });
}