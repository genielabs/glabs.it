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
    "url": "app/content/zuix_it.html",
    "revision": "469048bb8413331c0bd293b4116a5f16"
  },
  {
    "url": "config.js",
    "revision": "ffa2ef2ff4ddec0dfdf5d83aa01d9d79"
  },
  {
    "url": "css/animate-3.5.2.min.css",
    "revision": "178b651958ceff556cbc5f355e08bbf1"
  },
  {
    "url": "css/flex-layout-attribute.min.css",
    "revision": "c55488315343d9afb4d13ebf9cc8f97b"
  },
  {
    "url": "index.css",
    "revision": "5258b5c152b77d1ea9b9cc7d87f9f4f5"
  },
  {
    "url": "index.html",
    "revision": "43f586d763a6b5d0d24bea2b39b23fde"
  },
  {
    "url": "index.js",
    "revision": "fc14b01c23084316cdceb92502d60c78"
  },
  {
    "url": "js/mdl/material.css",
    "revision": "57313781c72269db589ebea903725dcc"
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
  },
  {
    "url": "images/donate_256.png",
    "revision": "9537c28946b506894b1464308b766628"
  },
  {
    "url": "images/donate.png",
    "revision": "c454f7cddf4f5a46f8d3b9fc8dca000b"
  },
  {
    "url": "images/github_logo.png",
    "revision": "9019b95b6e56e4b9932e32ebf81c45e5"
  },
  {
    "url": "images/hg_plus/05_t.jpg",
    "revision": "fadd9c3a7f53a997bdd3c20c625fb124"
  },
  {
    "url": "images/hg_plus/05.jpg",
    "revision": "1c01acd8407ef45c000343bb58c8d837"
  },
  {
    "url": "images/hg_plus/06_t.jpg",
    "revision": "8b6c1a239679d5347384cbd82d433d9f"
  },
  {
    "url": "images/hg_plus/06.jpg",
    "revision": "3c351f29dc36aa11c75c8eae9a76f97e"
  },
  {
    "url": "images/hg_plus/06.png",
    "revision": "61818e1dfcb4d48a806322a0dd277ba2"
  },
  {
    "url": "images/hg_plus/07_t.jpg",
    "revision": "730c8e0940fd9adc677090427de1358d"
  },
  {
    "url": "images/hg_plus/07.jpg",
    "revision": "d1a5d051dbba864ba2038a3e375694e8"
  },
  {
    "url": "images/hg_plus/07.png",
    "revision": "034a2a38983b752e8db5d7eed0a09727"
  },
  {
    "url": "images/hg_plus/08_t.jpg",
    "revision": "0a1760f00dc64400644e48e77aefd6a1"
  },
  {
    "url": "images/hg_plus/08.jpg",
    "revision": "72f1891d002ec4d8620bdf532d849b97"
  },
  {
    "url": "images/hg_plus/08.png",
    "revision": "685aba85e35926ced489b61904593179"
  },
  {
    "url": "images/hg_plus/09_t.jpg",
    "revision": "b3ce35915b6944220b2a0def23051ede"
  },
  {
    "url": "images/hg_plus/09.jpg",
    "revision": "427a541fca94f678dfa6887198ac8856"
  },
  {
    "url": "images/hg_plus/09.png",
    "revision": "11a2d77d70137faa6e07573f7fa09497"
  },
  {
    "url": "images/hg_plus/Screenshot_1517586226.png",
    "revision": "b9f3c972eb315ab7eea5e8a3a13b9dd2"
  },
  {
    "url": "images/hg_plus/Screenshot_1517586247.png",
    "revision": "3f28e560adcc8fb9a9b6d6efac96683c"
  },
  {
    "url": "images/hg_plus/Screenshot_1517586250.png",
    "revision": "d469a53a3f4a9487619c905f7a8299ff"
  },
  {
    "url": "images/hg_plus/Screenshot_1517587769.png",
    "revision": "7becdd65e487e0bdac5f1014e1ea5a32"
  },
  {
    "url": "images/hg_plus/Screenshot_1517587975.png",
    "revision": "80053f6977c6d0b18e3681a1a3757619"
  },
  {
    "url": "images/hg_plus/Screenshot_1517587979.png",
    "revision": "ce94ada7ee61c9dd5000588d7db0caa0"
  },
  {
    "url": "images/hg_plus/Screenshot_1517588104.png",
    "revision": "d8f17fc2a85765db8948e22615cf46a5"
  },
  {
    "url": "images/hg_plus/Screenshot_1517588212.png",
    "revision": "9f12f0de03a777cef2fb8278f48e58f8"
  },
  {
    "url": "images/hg_plus/Screenshot_1517588247.png",
    "revision": "20acc5f5e7e07f0a200beb05d1894b61"
  },
  {
    "url": "images/hg_plus/Screenshot_1517588251.png",
    "revision": "882df22341bf08ffaf7e2f8dcfd261f8"
  },
  {
    "url": "images/hg_plus/Screenshot_1517588254.png",
    "revision": "e14b5353664bacb17267b38f9c51ca81"
  },
  {
    "url": "images/homegenie.jpg",
    "revision": "82a3ebb370e64938e583ee12fe65138e"
  },
  {
    "url": "images/homegenie.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam-01_t.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam-01.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam-01.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam-02_t.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam-02.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam-02.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/logcam.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/youtube.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/zuix.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/zuix.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/\.(?:html|json|js|css)$/, workbox.strategies.cacheFirst({ cacheName: "default", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"purgeOnQuotaError":false})] }), 'GET');
