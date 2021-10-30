
// ZIM Zapps PWA Service Worker to cache app files
// Please check to see all files have been listed with local links
// (Do not worry about icon files) 

var cacheName = 'zim_pwa_schrijfhuisje';
var filesToCache = [
  './',
  'schrijfhuisje.html',
  'libraries/createjs.js>
',
  'libraries/zim_min.js>
',
  'libraries/pizzazz_01.js>',
  'libraries/pizzazz_02.js>',
  'libraries/game_2.5.js>',
  'libraries/pizzazz_03.js>'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
