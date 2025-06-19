const CACHE_NAME = 'gestao-banca-v1';
const ASSETS = [
  '/gestao/index.html',
  '/gestao/manifest.json',
  '/gestao/icons/icon-192x192.png',
  '/gestao/icons/icon-512x512.png',
  'https://cdn.tailwindcss.com',  // CDNs externos
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap'
];
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(response => response || fetch(e.request))
    );
});