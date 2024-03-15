// sw.js

const cacheName = 'my-app-cache';

// Install event handler (triggered when the Service Worker is first installed)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        // Add your static assets to the cache here (e.g., HTML, CSS, JavaScript files)
        return cache.addAll([
          '/', // Add your main HTML file
          '/index.css',
          '/app.js' // Replace with your actual file paths
        ]);
      })
  );
});

// Activate event handler (triggered when a new Service Worker version is activated)
self.addEventListener('activate', (event) => {
  // Clean up any outdated caches here
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== currentCacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event handler (intercepts network requests and potentially serves them from cache)
self.addEventListener('fetch', (event) => {
  // Implement logic to handle requests and serve from cache if possible
  // You can use techniques like cache-first, network-first, or cache-and-network strategies
});
