const cacheName = "colorear-v1.11";
const contentToCache = [
  "/colorear/",
  "/colorear/index.html",
  "/colorear/icons/icon-32.png",
  "/colorear/icons/icon-64.png",
  "/colorear/icons/icon-96.png",
  "/colorear/icons/icon-128.png",
  "/colorear/icons/icon-168.png",
  "/colorear/icons/icon-192.png",
  "/colorear/icons/icon-256.png",
  "/colorear/icons/icon-384.png",
  "/colorear/icons/icon-512.png",
  "/colorear/buttons/color-dropper.svg",
  "/colorear/buttons/crayon.svg",
  "/colorear/buttons/eraser.svg",
  "/colorear/buttons/fit.svg",
  "/colorear/buttons/left.svg",
  "/colorear/buttons/palette-color.svg",
  "/colorear/buttons/palette.svg",
  "/colorear/buttons/printer.svg",
  "/colorear/buttons/zoom-.svg",
  "/colorear/buttons/zoom+.svg"
];

// Installing Service Worker
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(
      (cache) =>
        function () {
          console.log("[Service Worker] Caching all: app shell and content");
          cache.addAll(contentToCache);
        }
    )
  );
});

// Fetching content using Service Worker
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (cacheRes) return cacheRes;
      return fetch(e.request).then((fetchRes) =>
        caches.open(cacheName).then((cache) => {
          console.log(
            `[Service Worker] Caching new resource: ${e.request.url}`
          );
          cache.put(e.request, fetchRes.clone());
          return fetchRes;
        })
      );
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("[Service Worker] activate");
  e.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(
          names
            .filter(function (name) {
              return name !== cacheName;
            })
            .map(function (name) {
              return caches.delete(name);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});
