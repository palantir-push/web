console.log('I\'m a service worker');

this.addEventListener('install', function(event) {
  console.log('Serviceworker installed')
});

this.addEventListener('push', function(event) {
  console.log('Push received')
  var payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(this.registration.showNotification('Palantir notification', {
      body: payload,
    })
  );
});
