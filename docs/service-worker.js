/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app/content/about.css",
    "revision": "e04f3019582b8db03ef1e47a97ef3fe9"
  },
  {
    "url": "app/content/about.html",
    "revision": "2e33de1a6f4ff3909245c794e05cc539"
  },
  {
    "url": "app/content/cover.css",
    "revision": "ca49d6fe14487dea527894f6f9e8d5df"
  },
  {
    "url": "app/content/cover.html",
    "revision": "85b8f3c4179d1895ef98054644365ae2"
  },
  {
    "url": "app/content/footer.css",
    "revision": "13c5cf9963093a45cdee85ff00f0da05"
  },
  {
    "url": "app/content/footer.html",
    "revision": "930cc2d203f133d354c581846a5b22dc"
  },
  {
    "url": "app/content/menu_button.css",
    "revision": "e94a60415b1c29dec482d4214e7753a1"
  },
  {
    "url": "app/content/menu_button.html",
    "revision": "ea80f8856a711b0f5178b85347ad5de4"
  },
  {
    "url": "app/content/more_repos.html",
    "revision": "6a37b52141649990d76f8e8f377b58f1"
  },
  {
    "url": "app/content/products.css",
    "revision": "451f3e06c67c18bd7a62628f4ae71847"
  },
  {
    "url": "app/content/products.html",
    "revision": "b53ff9c3ccf91b82c23973e014685758"
  },
  {
    "url": "app/content/zuix_it.css",
    "revision": "16af1150dda73c943810d02e3ef3b90c"
  },
  {
    "url": "app/content/zuix_it.html",
    "revision": "bf39d6352bcee6ac888f56c46da65a14"
  },
  {
    "url": "app/controllers/headings_roller.js",
    "revision": "a64c111cbab9477e952f61227baec116"
  },
  {
    "url": "config.js",
    "revision": "ffa2ef2ff4ddec0dfdf5d83aa01d9d79"
  },
  {
    "url": "css/animate-3.5.2.min.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/flex-layout-attribute.min.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "index.css",
    "revision": "5258b5c152b77d1ea9b9cc7d87f9f4f5"
  },
  {
    "url": "index.html",
    "revision": "3ac4d45721c781c76f75fb14e30c4bfc"
  },
  {
    "url": "index.js",
    "revision": "a0ea43a31c4bf5ec3bdc85e739fdb1a2"
  },
  {
    "url": "js/mdl/material.css",
    "revision": "57313781c72269db589ebea903725dcc"
  },
  {
    "url": "js/mdl/material.js",
    "revision": "d4d04abe369dc10ce86e42c00ee62ccd"
  },
  {
    "url": "js/mdl/material.min.css",
    "revision": "8ce4631006b601c6253396365879a7a9"
  },
  {
    "url": "js/mdl/material.min.js",
    "revision": "df211fcb13a5c100eeb182f14fd37b44"
  },
  {
    "url": "js/zuix-bundler.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix-bundler.min.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix.min.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
