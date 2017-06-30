import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import App from './App'
import * as types from './actions'
import registerServiceWorker from './registerServiceWorker'
import {setUsername} from './actions/creators/user'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware((thunkMiddleware))
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// We dont need the caching service worker
// registerServiceWorker()


if (window.localStorage.userName) {
  store.dispatch(setUsername(window.localStorage.userName))
}

const serviceUrl = 'https://palantir-push-api.herokuapp.com'

var endpoint;
var key;
var authSecret;


if (navigator.serviceWorker) {
  navigator.serviceWorker.register(process.env.PUBLIC_URL+'/sw.js')

    .then(function(registration) {
      console.log('Serviceworker registration succeeded');
      return registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription;
          }
          return registration.pushManager.subscribe({ userVisibleOnly: true });
        });

    }).then(function(subscription) {
      store.dispatch({type:types.SET_SUBSCRIPTION, subscription})


  }).catch(function(error) {
      console.log('Serviceworker registration failed');
    });

  // Start sending notifications now

  // fetch(serviceUrl+'/users/trygve/push', {
  //   method: 'post',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     endpoint: endpoint,
  //     key: key,
  //     authSecret: authSecret,
  //     // payload: payload,
  //     // delay: delay,
  //     // ttl: ttl,
  //   }),
  // });

}


