importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "5618389869c6918add0d0126940fa468"
  },
  {
    "url": "inline.bundle.js",
    "revision": "0ecba7889246f7371933b24a542cf505"
  },
  {
    "url": "main.bundle.js",
    "revision": "6db3f56d2adccd034c5f8b7990573ccd"
  },
  {
    "url": "polyfills.bundle.js",
    "revision": "28698ccd8f908382c3804d7978af93c5"
  },
  {
    "url": "styles.bundle.js",
    "revision": "6d8b28782d51b2aa6d101c7ad69548ae"
  },
  {
    "url": "to-do-create.module.chunk.js",
    "revision": "ce3aff357c7b59c94e9ea57867548e48"
  },
  {
    "url": "vendor.bundle.js",
    "revision": "d8bf84ee855541001be59ee1d3eecb04"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/todo-pwatest.firebaseio.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
