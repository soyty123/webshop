// EduShop Cambodia - Service Worker (Offline Support & PWA Cache)
const CACHE_NAME = 'edushop-pwa-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './user.html',
  './admin.html',
  './style.css',
  './app.js',
  './admin.js',
  './qrcode.min.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './aba_khqr.jpg',
  './acleda_khqr.jpg'
];

// 1. Install Event: Cache Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('EduShop SW pre-cache partial warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean up outdated caches & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Smart Cache Strategy (Network-first for HTML, Cache-first for static)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Bypass non-GET requests and external API requests (e.g. Telegram Bot API)
  if (req.method !== 'GET' || url.hostname.includes('api.telegram.org')) {
    return;
  }

  // Network-First for HTML navigation
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => {
          return caches.match(req).then((cached) => cached || caches.match('./index.html'));
        })
    );
    return;
  }

  // Cache-First for static assets (images, css, js, icons)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Fetch in background to revalidate cache
        fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkRes));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200 && url.origin === self.location.origin) {
          const clone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return networkRes;
      });
    }).catch(() => {
      // Offline fallback
      return caches.match('./index.html');
    })
  );
});
