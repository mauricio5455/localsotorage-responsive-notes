const cacheName = 'v1';

const resourcesToPrecache = [
    '/',
    '/index.html',
    '/script.js',
    '/styles/popups.css',
    '/styles/style.css',
    '/images/icon.png',
    '/images/icon2.png',
    '/images/logo512.png',
    '/images/logoOg.png',
    '/classes/Notas.js',
    '/classes/PopUps.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => (cache.addAll(resourcesToPrecache))),
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cacheResponse => (cacheResponse || fetch(event.request))),
    );
});