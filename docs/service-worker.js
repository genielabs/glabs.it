if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const r=e=>s(e,d),n={module:{uri:d},exports:o,require:r};i[d]=Promise.all(a.map((e=>n[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-90aa7b36"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/card.css",revision:"265de360088c4829ba339c3bb8f13376"},{url:"app/card.html",revision:"7ef2f1936dc71a292da26942e0ac657a"},{url:"app/card.js",revision:"e41bd9886a9aeb5a3489e1b903bbc8ac"},{url:"app/cms/zuix-editor.css",revision:"20bfdd79067e9ebdc3d619aafb170291"},{url:"app/cms/zuix-editor.html",revision:"29e9e66c0551e5713c02e4f86d1494b7"},{url:"app/cms/zuix-editor.js",revision:"40e7cdf4d16c625617ec84be52417f8a"},{url:"app/cms/zuix-editor/dialogs/add-page.css",revision:"fa9d55e0e6227e3e412259f11e0bbdb2"},{url:"app/cms/zuix-editor/dialogs/add-page.html",revision:"635447ae5013d8d592f0d3150aa6b907"},{url:"app/cms/zuix-editor/dialogs/add-page.js",revision:"cd78758e09ad8babf8f55ce56f49ecb6"},{url:"app/cms/zuix-editor/dialogs/create-component.css",revision:"980e51a89d8801392dd457459f10d8bf"},{url:"app/cms/zuix-editor/dialogs/create-component.html",revision:"beb030d44e9cd47de7da79e9b8e6c5a8"},{url:"app/cms/zuix-editor/dialogs/create-component.js",revision:"efb4228addddc9b4ba7e65b79611e4ff"},{url:"app/cms/zuix-editor/dialogs/delete-page.css",revision:"2d83029a4ce61bf4c799868f4da7be12"},{url:"app/cms/zuix-editor/dialogs/delete-page.html",revision:"b86caa847060bde014b7c740e7d919ce"},{url:"app/cms/zuix-editor/dialogs/delete-page.js",revision:"36d0d71ef5e39ccb7df0fdcc67006599"},{url:"config.js",revision:"cc1fa29f85d1826d1bd178455bebbc7b"},{url:"content/about/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/about/index.html",revision:"f8ccf3b3adc1f6c16b8c097ae766cd72"},{url:"content/content.11tydata.js",revision:"04fb4b5a734c21c8a824d50e6df3b3d0"},{url:"content/museum/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/museum/index.html",revision:"fcd7cd5cbed60f2f85dfc9557e4fd239"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.html",revision:"a4fb38dc878800a216fafceb2f3409d8"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.bundle.ext.js",revision:"844cd99e5dd30ba1066e6e25b7b844ce"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.html",revision:"56664413b93f9e689f8e9d922da2d864"},{url:"content/posts/client-side-html-css-preprocessing/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/client-side-html-css-preprocessing/index.html",revision:"1a44ec3b5653118f54b3d766c28739ca"},{url:"content/posts/component-based-web-with-zuixjs/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/component-based-web-with-zuixjs/index.html",revision:"476e87de9fb01ec91d814baadd6cf47a"},{url:"content/posts/index_list/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/index_list/index.html",revision:"7730ee362e475312f300380cead6edcb"},{url:"content/posts/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/index.html",revision:"ef61e3654a17bb013090bd8de1f5e738"},{url:"content/posts/mobile-app-layout-from-scratch/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/mobile-app-layout-from-scratch/index.html",revision:"587ee48e9c19c98f8e50edd2a366eea3"},{url:"content/posts/netflix-clone-web-app-template/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/netflix-clone-web-app-template/index.html",revision:"980fcbb906be15d9718723c1809a4a04"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.html",revision:"00d4afb7fbc3b18c916b677b813f0122"},{url:"content/posts/unique-lovely-web-bits/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/unique-lovely-web-bits/index.html",revision:"5c582aa0bc64427aba163ce7e2978ad3"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.html",revision:"cfa8a83158a51462ded642760bd9e93d"},{url:"content/works/index_list/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/works/index_list/index.html",revision:"0cfa5f15c1093068055daefeaf97a679"},{url:"content/works/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/works/index.html",revision:"d054d8a6cc4114db6740571f54b08520"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism-tomorrow.min.css",revision:"c6b4dce537526ed1ac67d9b7bd3e7158"},{url:"index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"index.html",revision:"31c2d6728524df2a07f5d29026d2f81e"},{url:"js/fuse/fuse.basic.common.js",revision:"ab3ef0028c8992d0098b5b836874291a"},{url:"js/fuse/fuse.basic.esm.js",revision:"0cd240af452625e49deed3ee2445aba6"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"f79f602fa4572cd580786923ce942b6c"},{url:"js/fuse/fuse.basic.js",revision:"6c4923a67225dd64e42600c578d8ff0f"},{url:"js/fuse/fuse.basic.min.js",revision:"62465d50492b6d1bfbbd0e5f9a09b222"},{url:"js/fuse/fuse.common.js",revision:"ddbe097989e19bf1872f533cbc363f1b"},{url:"js/fuse/fuse.esm.js",revision:"82bbf2ed8ece715c58afe6c75977795f"},{url:"js/fuse/fuse.esm.min.js",revision:"589223b029350d512db61a8f323ce0fe"},{url:"js/fuse/fuse.js",revision:"7e19f88c4b2a7c038943bf3b4a17986f"},{url:"js/fuse/fuse.min.js",revision:"de7d60e4a6881074275feca14b84a49d"},{url:"js/zuix/zuix-bundler.js",revision:"34faeb1b1cf274e7b980dbd496d728c9"},{url:"js/zuix/zuix-bundler.min.js",revision:"c836a053d0b78abe802ed832ddcb8ac5"},{url:"js/zuix/zuix-bundler.module.js",revision:"4b1a833a3391bcdd8fba384b72fd7f70"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"e475873997f70b9738f62b190c16fddb"},{url:"js/zuix/zuix.js",revision:"5e19a04d4f05f511a3d2c1956ea99e8f"},{url:"js/zuix/zuix.min.js",revision:"29599e4e0f7c465c206d7d0fe0526d3b"},{url:"js/zuix/zuix.module.js",revision:"882870098e9fc01d85dbf030639aa7fb"},{url:"js/zuix/zuix.module.min.js",revision:"b4ff18b8eb77cdae1ba11c9e25b74c95"},{url:"lib/1.1/components/context-menu.css",revision:"7ba1b409b46410bee01e4fc18dadb7a3"},{url:"lib/1.1/components/context-menu.html",revision:"74daf4054d7613ede5f88007a94bdc43"},{url:"lib/1.1/components/context-menu.js",revision:"c013b05a56f175a6cdcc1627d884f06d"},{url:"lib/1.1/components/media-browser.css",revision:"e889174b42c1b4abd01bcd04e4cdaa0f"},{url:"lib/1.1/components/media-browser.html",revision:"d82b328652c89f40f6d81f84771a30ab"},{url:"lib/1.1/components/media-browser.js",revision:"78e4e863a758ac040ccfec3bd5dd23f7"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"ee5d2f689e747b5320fefd361af7fcfd"},{url:"lib/1.1/components/media-browser/image.css",revision:"ae49f05922ab6be7e09a8bebf1f32f00"},{url:"lib/1.1/components/media-browser/image.html",revision:"87a9be2b82f0388a7d3aaa16c2003422"},{url:"lib/1.1/components/media-browser/image.js",revision:"4aeeac0bd702d717fceb59f1abcd924e"},{url:"lib/1.1/components/media-browser/video-yt.css",revision:"594d8771c9b011eaebcd957daf74d17e"},{url:"lib/1.1/components/media-browser/video-yt.html",revision:"a85ff95f97a31b1d890dfc55a2b91538"},{url:"lib/1.1/components/media-browser/video-yt.js",revision:"87ae9156a9dec2427ffbe5439e5c3f4f"},{url:"lib/1.1/components/media-browser/video.css",revision:"c62d91469a6c8d17aad13581469f7d1c"},{url:"lib/1.1/components/media-browser/video.html",revision:"4128300adb3a2e6cd8d68bba9ffb00ee"},{url:"lib/1.1/components/media-browser/video.js",revision:"eb337fc0d0adb6840d077de7888a8f8c"},{url:"lib/1.1/components/menu-overlay.css",revision:"736446a0ce463ad6664c5f8066376189"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"15dc6cd532c7c4af1ee4f525c2f3aff2"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"efd643eb309cafec496b8f5b60dacf4a"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"4c37892f2cdd9dcc2a36eeed115835b2"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"lib/1.1/controllers/view-pager.js",revision:"d7e48fa1226efe9fb2e1a53730203d82"},{url:"manifest.json",revision:"ec7b578ee569fedff4fa21acb9e4687a"},{url:"search-index.json",revision:"08a61ed77b7484ee419d7d3fe50dbbbf"},{url:"search-list.json",revision:"9b7d7fbcc9d5c1a376765d427d12f09b"},{url:"search/index.bundle.js",revision:"65efa37904c9875ce74ae04b844fa8a8"},{url:"search/index.html",revision:"2a751d240ac3baf7f4ee900d1e63aea5"},{url:"test/index.bundle.js",revision:"cc8cec1612ab62f3b56ff4d18518dba9"},{url:"test/index.html",revision:"429617cde5eb007f08c762871b5bac40"},{url:"assets/mirror/genielabs.github.io/HomeGenie/images/docs/dashboard_page_01.jpg",revision:"0d07a1aa7b8600ff832761b5f6ff927e"},{url:"assets/mirror/media.giphy.com/media/E2USislQIlsfm/giphy.gif",revision:"b2f94e63fda3f778ff10fc8090411758"},{url:"assets/mirror/media.giphy.com/media/T1wXTcV8KhVHq/giphy.gif",revision:"d1c30d57aef1a3f0e9c6ad789720d3c6"},{url:"assets/mirror/media.giphy.com/media/xTiTntReleqBnhBNwQ/giphy.gif",revision:"ec59e99f8ecdd9ff9c7f60c72f7bf717"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/2gk48dshoa4zok3rh1z4.png",revision:"449e891c6f1a409a3fa6cd81410536cc"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/4i2nm4b8y82z8cdkhnyg.jpg",revision:"12502a505ef1af4856809ecbbf688ee9"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/8e2qhxdctwm3bnb73z1z.jpg",revision:"cf334159a86283380855d4655f2ec3af"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/8l276dgce86ez8jdpap1.jpg",revision:"40a7b81acc4adfc3c66cd86c8211dc82"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/cn8xjvhqd32zp04h8gpr.png",revision:"c9ed54002e0d650e42d92fa8bf49547f"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/e6g0ex68dmf08msb41rf.png",revision:"ee6fae2ebe64ff110ccc428044f03caa"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/g02hdgw86q2nfivsfhzu.png",revision:"2ab5b2c748ccca5eef87e91f336b0873"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/pocqyuok4f06ljdyi14j.jpg",revision:"49f15269543ce76968381db125cb16db"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/vfk4j4pk8jfn75vyj1e4.jpg",revision:"a56ad79b22ff53a7c592569ae8d7f586"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/vlnoa89vnnf62fcdjccx.png",revision:"1769c3d76769a770065f772e292ee4af"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/wkumb20jphd5k5a8mt22.gif",revision:"7e21c6ab4658c8c547f1a36d4b83d7f0"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/ysapo252grk4t7g2xa4p.png",revision:"ebbe526928cab8b323b748df40361dee"},{url:"assets/mirror/zuixjs.github.io/zuix-html-pwa/images/lighthouse-report.png",revision:"8207650c1ee086cd9ac3ba316e5b5622"},{url:"content/about/images/gene.jpg",revision:"266fecd3c757092cfa38460d6eb7033a"},{url:"content/posts/images/add-gesture-detection-cover.jpg",revision:"ffd1c19f76636d80f1e2665b89b31acf"},{url:"content/posts/images/adding-a-viewpager.jpg",revision:"95d5b130343490fb8ebc6dc775c31af4"},{url:"content/posts/images/client-side-html-css-preprocessing.jpg",revision:"7c01827a788073b73ab3845c1877acc6"},{url:"content/posts/images/component-based-cover.jpg",revision:"3c26db7025388b77b4f6abffc4604e0e"},{url:"content/posts/images/in-browser-bundling.jpg",revision:"020540a6c7cbd101027946e6ae644b22"},{url:"content/posts/images/lovely-web-bits.jpg",revision:"a80be06f88500b3574db1c62b68fb026"},{url:"content/posts/images/mobile-app-from-scratch.jpg",revision:"215197e13b1fd61b57290b80a217ec02"},{url:"content/posts/images/progressive-web-app.jpg",revision:"f2c0b8ba2f045574044b4a9f29404290"},{url:"content/posts/images/webflix-clone-cover-big.jpg",revision:"f25050f9a44f2109bcdf145d8567c0b7"},{url:"content/posts/images/webflix-clone-cover.jpg",revision:"88910b9c797bfe3cc2e326c528168d16"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/github-octocat.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/glabs-logo.png",revision:"2e297e5468d7c0efb1679a023780b45d"},{url:"images/glabs-logo.svg",revision:"41bee4c287873f84036baa7abef4ca9f"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"fd298c2b3f1a94401571f288d7f8a2d8"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"52816b3c789066d69438f39d162dc56f"},{url:"images/icons/desktop/favicon-16x16.png",revision:"a89837373cfd7844ff59f5c53f274c1f"},{url:"images/icons/desktop/favicon-32x32.png",revision:"e307007b6c5de09958971f48cba24885"},{url:"images/icons/desktop/mstile-150x150.png",revision:"e8a3df32a0f335984300fe66d82b2618"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"3043dd6c3a66285800b959147e651bd7"},{url:"images/icons/icon-128x128.png",revision:"b9d883e490c231c4b1a62934620d4c84"},{url:"images/icons/icon-144x144.png",revision:"d8957abccfcfc3cad4efaf6a4180b319"},{url:"images/icons/icon-152x152.png",revision:"2f35d54d93493ff05cce8a3337bafb7d"},{url:"images/icons/icon-192x192.png",revision:"fd298c2b3f1a94401571f288d7f8a2d8"},{url:"images/icons/icon-384x384.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/icon-512x512.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/icon-72x72.png",revision:"7e67ccbd3c60925331ce256b14762a9c"},{url:"images/icons/icon-96x96.png",revision:"23421faace1915b7cd36f4125b61571e"},{url:"images/lighthouse.png",revision:"b5cad18f7bb11643253bc672249a8dfd"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/patreon.png",revision:"c6f40540e970fcf3a08bbe4131927af6"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
