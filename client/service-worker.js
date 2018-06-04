var CACHE_NAME = 'dnd-tome';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log("[ServiceWorker] installing");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch', e.request.url);
  event.respondWith(
    caches.match(event.request)
      .then( response => {
        // Cache hit - return response
        if (response) {
          console.log("matching fetch request", response);
          return response;
        }
        return fetch(fetchRequest).then( response => {
            console.log("response from fetch: ", response);
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                console.log("cache before adding more to cache: ", cache);
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      }
    )
  );
}); 

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});