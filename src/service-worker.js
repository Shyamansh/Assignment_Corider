import { precacheAndRoute } from "workbox-precaching"; // Import precacheAndRoute from workbox-precaching
import { registerRoute } from "workbox-routing"; // Import registerRoute from workbox-routing
import { CacheFirst, NetworkFirst } from "workbox-strategies"; // Import caching strategies from workbox-strategies
import { ExpirationPlugin } from "workbox-expiration"; // Import ExpirationPlugin from workbox-expiration
import { cleanupOutdatedCaches } from "workbox-precaching"; // Import cleanupOutdatedCaches from workbox-precaching

// Configure cache name prefix for Workbox cache
/* eslint-disable no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);
/* eslint-enable no-restricted-globals */

// Register caching strategies for different types of requests
registerRoute(
    /\.(?:js|css|json|svg|png|jpg|gif)$/,
    new CacheFirst({
        cacheName: "assets",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    })
);

registerRoute(
    /^https:\/\/qa.corider.in\/assignment\/chat/,
    new NetworkFirst({
        cacheName: "chat-data",
    })
);

// Cleanup outdated caches
/* eslint-disable no-restricted-globals */
self.addEventListener("activate", (event) => {
    event.waitUntil(cleanupOutdatedCaches());
});
/* eslint-enable no-restricted-globals */
