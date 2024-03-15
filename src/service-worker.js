import { workbox } from 'workbox';

workbox.core.setCacheName('my-chat-app');

workbox.routing.registerRoute(
  /\.(?:js|css|json|svg|png|jpg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeInDays: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /^https:\/\/qa.corider.in\/assignment\/chat/, // Adjust for your API endpoint
  new workbox.strategies.NetworkFirst({
    cacheName: 'chat-data',
  })
);

workbox.precaching.precacheAndRoute([]); // Adjust precaching if needed

workbox.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== workbox.core.getCacheName()) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Register the service worker (optional, see step 4)
// workbox.window.register(); 
