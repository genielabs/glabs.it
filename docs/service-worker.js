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
    "revision": "2742e4ca076e593703e8ff5f50124ca6"
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
    "revision": "28a3df4684fd5792b87ca7b13ae083de"
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
  },
  {
    "url": "images/donate_256.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/donate.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/github_logo.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/hg_plus/01_t.jpg",
    "revision": "140d2e50857dd7b8bfc66f205ee3d49b"
  },
  {
    "url": "images/hg_plus/01.jpg",
    "revision": "993d3173331ec0604aa8f9984040fce8"
  },
  {
    "url": "images/hg_plus/01.png",
    "revision": "691a063cf6a9299d4e36f4e7486eda54"
  },
  {
    "url": "images/hg_plus/02_t.jpg",
    "revision": "106920a91037a6b61f7f3476f534186f"
  },
  {
    "url": "images/hg_plus/02.jpg",
    "revision": "4e63fa1a5d7330309fe5bca005880b92"
  },
  {
    "url": "images/hg_plus/02.png",
    "revision": "b87231620fabd42cfcffd677e660933b"
  },
  {
    "url": "images/hg_plus/03_t.jpg",
    "revision": "20fb29c4ee9e7d9d88b49e8e96355348"
  },
  {
    "url": "images/hg_plus/03.jpg",
    "revision": "8d24abf5ea52fb19b358305230039515"
  },
  {
    "url": "images/hg_plus/03.png",
    "revision": "36e2283e24343abc855d296512d4192d"
  },
  {
    "url": "images/hg_plus/03b_t.jpg",
    "revision": "4bcd828882daee1adc565319ece7aef4"
  },
  {
    "url": "images/hg_plus/03b.jpg",
    "revision": "0f3d7356fb0c38a6dcbaff80ddcb3d62"
  },
  {
    "url": "images/hg_plus/03b.png",
    "revision": "03055eda35387813bd7485168ec2f2a5"
  },
  {
    "url": "images/hg_plus/04_t.jpg",
    "revision": "86eb59290f27a81b030f63e01b1437cb"
  },
  {
    "url": "images/hg_plus/04.jpg",
    "revision": "a7abbd011eaedb3700910d671d7e5565"
  },
  {
    "url": "images/hg_plus/04.png",
    "revision": "f63dce0f659c2245a80c247ff2163487"
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
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
