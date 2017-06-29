import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
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
      var rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
      key = rawKey
        ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey)))
        : '';
      var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
        authSecret = rawAuthSecret
          ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret)))
          : '';
      endpoint = subscription.endpoint;

      fetch(serviceUrl+'/users/trygve', {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          endpoint: subscription.endpoint,
          key: key,
          authSecret: authSecret,
        }),
      });


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


