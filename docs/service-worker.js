if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const r=e=>s(e,o),d={module:{uri:o},exports:c,require:r};i[o]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-8bc485fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/cms/zuix-editor.css",revision:"1f4ee6ffc9b72b3dc80b5b9c8ec9d93a"},{url:"app/cms/zuix-editor.html",revision:"5c96c8ad896aa5cee606e8b6848bdf59"},{url:"app/cms/zuix-editor.js",revision:"66cc1025bb76d9ef77053a261b058636"},{url:"app/cms/zuix-editor/dialogs/add-page.css",revision:"fa9d55e0e6227e3e412259f11e0bbdb2"},{url:"app/cms/zuix-editor/dialogs/add-page.html",revision:"1d6df0625aa275fc328098a1c14fdb1a"},{url:"app/cms/zuix-editor/dialogs/add-page.js",revision:"bbb95e19740ff9e8f5209a7f0e74c5b5"},{url:"app/cms/zuix-editor/dialogs/create-component.css",revision:"980e51a89d8801392dd457459f10d8bf"},{url:"app/cms/zuix-editor/dialogs/create-component.html",revision:"ae21a7aa28ecb51549a4fd762623e7e8"},{url:"app/cms/zuix-editor/dialogs/create-component.js",revision:"f941fcecf7f81b6c886208eac7b0b31f"},{url:"app/cms/zuix-editor/dialogs/delete-page.css",revision:"2d83029a4ce61bf4c799868f4da7be12"},{url:"app/cms/zuix-editor/dialogs/delete-page.html",revision:"8d31a57ff392d7263947919e19d2160f"},{url:"app/cms/zuix-editor/dialogs/delete-page.js",revision:"9f913e69f00c6df9e826158726173e25"},{url:"config.js",revision:"7792e01e353c5170b1838b8e42c08d5a"},{url:"content/about/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/about/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/about/index.html",revision:"2a78624d14f6774e9dc3e63b53f3665b"},{url:"content/content.11tydata.js",revision:"04fb4b5a734c21c8a824d50e6df3b3d0"},{url:"content/museum/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/museum/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/museum/index.html",revision:"42689107e2a442a522988acf79bf85ed"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.html",revision:"de0e0cf9fa7a4587f29d6731e8124e4d"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.bundle.ext.js",revision:"6caef5f2d80802f4e4d8277d1db04579"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.html",revision:"d0e4262643d1f23652a3f35d95e87cbc"},{url:"content/posts/client-side-html-css-preprocessing/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/client-side-html-css-preprocessing/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/client-side-html-css-preprocessing/index.html",revision:"234097c798acaf3106c3eac9126add5d"},{url:"content/posts/component-based-web-with-zuixjs/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/component-based-web-with-zuixjs/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/component-based-web-with-zuixjs/index.html",revision:"bd3fc809afe614f15db5b996e7825e66"},{url:"content/posts/index_list/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/index_list/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/index_list/index.html",revision:"12a73966245c3a47f558ab40e0782714"},{url:"content/posts/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/index.html",revision:"e42132ff5c82db37afc4136ab438e2c1"},{url:"content/posts/mobile-app-layout-from-scratch/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/mobile-app-layout-from-scratch/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/mobile-app-layout-from-scratch/index.html",revision:"90cebd54e9a12327a45f89da38b313ec"},{url:"content/posts/netflix-clone-web-app-template/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/netflix-clone-web-app-template/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/netflix-clone-web-app-template/index.html",revision:"8eca3ed8802c3e6aeb9f4d27fae18828"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.html",revision:"4b1d46f2c54600581ddf44bb0d68513c"},{url:"content/posts/unique-lovely-web-bits/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/unique-lovely-web-bits/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/unique-lovely-web-bits/index.html",revision:"61334378f9d2990e93891188bf20e851"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.html",revision:"0f74545ffe906b918530bda5cc3c6e64"},{url:"content/works/index_list/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/works/index_list/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/works/index_list/index.html",revision:"989a3e170729f9847ca98cfd7556d96e"},{url:"content/works/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"content/works/index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"content/works/index.html",revision:"5850c3561670d94423b799bdb627838c"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism-tomorrow.min.css",revision:"c6b4dce537526ed1ac67d9b7bd3e7158"},{url:"index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"index.bundle.js",revision:"4c796fc05ba29e20422b7815f8a209b4"},{url:"index.html",revision:"f885476738c2ff34b9cc944b068a3dcd"},{url:"js/fuse/fuse.basic.common.js",revision:"b488f72775b7781fc9471681f3b60ff7"},{url:"js/fuse/fuse.basic.esm.js",revision:"cb4c9ce0b4f8f5002af41893fa562bdb"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"da3687f83c1266a469666b860a902c88"},{url:"js/fuse/fuse.basic.js",revision:"2c656b82ae254165eb4079007a6257f7"},{url:"js/fuse/fuse.basic.min.js",revision:"686d65f2ad077439ba50abc79def2671"},{url:"js/fuse/fuse.common.js",revision:"ede75979dbfe2122970ed7d791ffc89f"},{url:"js/fuse/fuse.esm.js",revision:"d064d7efb50e66a61b75f2f0ccc1921b"},{url:"js/fuse/fuse.esm.min.js",revision:"85727c3b04109b5182a32fd0bf40021c"},{url:"js/fuse/fuse.js",revision:"736b0515ddf8a66cce27b25c823b6057"},{url:"js/fuse/fuse.min.js",revision:"3f6cc2902306abd1b5fb5c61655792ff"},{url:"js/zuix/zuix-bundler.js",revision:"c0af30ed9613464eaf12b08127fc1c45"},{url:"js/zuix/zuix-bundler.min.js",revision:"173148942f221c269bb4bd0f145a5ff2"},{url:"js/zuix/zuix-bundler.module.js",revision:"c4039f8cfaad5874e8269502e2c4f4c4"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"b844e9c9b4de6aae6dfc8a35b770a20c"},{url:"js/zuix/zuix.js",revision:"c099280edb9c97415d8cb9ee645b30ad"},{url:"js/zuix/zuix.min.js",revision:"cba671e993502d5c82815aed40a14068"},{url:"js/zuix/zuix.module.js",revision:"e0a576068f748a552d1bddb0d06d3b50"},{url:"js/zuix/zuix.module.min.js",revision:"8877f49d4163fe850db570f5f6bc5aed"},{url:"lib/1.1/components/media-browser.css",revision:"e889174b42c1b4abd01bcd04e4cdaa0f"},{url:"lib/1.1/components/media-browser.html",revision:"d82b328652c89f40f6d81f84771a30ab"},{url:"lib/1.1/components/media-browser.js",revision:"78e4e863a758ac040ccfec3bd5dd23f7"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"ee5d2f689e747b5320fefd361af7fcfd"},{url:"lib/1.1/components/media-browser/image.css",revision:"ae49f05922ab6be7e09a8bebf1f32f00"},{url:"lib/1.1/components/media-browser/image.html",revision:"87a9be2b82f0388a7d3aaa16c2003422"},{url:"lib/1.1/components/media-browser/image.js",revision:"4aeeac0bd702d717fceb59f1abcd924e"},{url:"lib/1.1/components/media-browser/video-yt.css",revision:"594d8771c9b011eaebcd957daf74d17e"},{url:"lib/1.1/components/media-browser/video-yt.html",revision:"a85ff95f97a31b1d890dfc55a2b91538"},{url:"lib/1.1/components/media-browser/video-yt.js",revision:"87ae9156a9dec2427ffbe5439e5c3f4f"},{url:"lib/1.1/components/media-browser/video.css",revision:"c62d91469a6c8d17aad13581469f7d1c"},{url:"lib/1.1/components/media-browser/video.html",revision:"4128300adb3a2e6cd8d68bba9ffb00ee"},{url:"lib/1.1/components/media-browser/video.js",revision:"eb337fc0d0adb6840d077de7888a8f8c"},{url:"lib/1.1/components/menu-overlay.css",revision:"736446a0ce463ad6664c5f8066376189"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"071ed388d297aeab08208206db58ce40"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"efd643eb309cafec496b8f5b60dacf4a"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"dfafe8a0780d7759b16afa63673cbecb"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"lib/1.1/controllers/view-pager.js",revision:"d7e48fa1226efe9fb2e1a53730203d82"},{url:"manifest.json",revision:"ec7b578ee569fedff4fa21acb9e4687a"},{url:"search-index.json",revision:"d6814e496a16c8b07ac4920965059ca3"},{url:"search-list.json",revision:"c5c163aa01443f226e82de65f0a3a6ca"},{url:"search/index.bundle.ext.js",revision:"232eda29659e49d56498067331510947"},{url:"search/index.bundle.js",revision:"fadb5790a9eb186234ddb84d5aabe29e"},{url:"search/index.html",revision:"e6495f9de3fa4cb8a155a0373e16d168"},{url:"assets/mirror/genielabs.github.io/HomeGenie/images/docs/dashboard_page_01.jpg",revision:"0d07a1aa7b8600ff832761b5f6ff927e"},{url:"assets/mirror/media.giphy.com/media/E2USislQIlsfm/giphy.gif",revision:"b2f94e63fda3f778ff10fc8090411758"},{url:"assets/mirror/media.giphy.com/media/T1wXTcV8KhVHq/giphy.gif",revision:"d1c30d57aef1a3f0e9c6ad789720d3c6"},{url:"assets/mirror/media.giphy.com/media/xTiTntReleqBnhBNwQ/giphy.gif",revision:"ec59e99f8ecdd9ff9c7f60c72f7bf717"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/2gk48dshoa4zok3rh1z4.png",revision:"449e891c6f1a409a3fa6cd81410536cc"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/4i2nm4b8y82z8cdkhnyg.jpg",revision:"12502a505ef1af4856809ecbbf688ee9"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/8e2qhxdctwm3bnb73z1z.jpg",revision:"cf334159a86283380855d4655f2ec3af"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/8l276dgce86ez8jdpap1.jpg",revision:"40a7b81acc4adfc3c66cd86c8211dc82"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/cn8xjvhqd32zp04h8gpr.png",revision:"c9ed54002e0d650e42d92fa8bf49547f"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/e6g0ex68dmf08msb41rf.png",revision:"ee6fae2ebe64ff110ccc428044f03caa"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/g02hdgw86q2nfivsfhzu.png",revision:"2ab5b2c748ccca5eef87e91f336b0873"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/pocqyuok4f06ljdyi14j.jpg",revision:"49f15269543ce76968381db125cb16db"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/vfk4j4pk8jfn75vyj1e4.jpg",revision:"a56ad79b22ff53a7c592569ae8d7f586"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/vlnoa89vnnf62fcdjccx.png",revision:"1769c3d76769a770065f772e292ee4af"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/wkumb20jphd5k5a8mt22.gif",revision:"7e21c6ab4658c8c547f1a36d4b83d7f0"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/ysapo252grk4t7g2xa4p.png",revision:"ebbe526928cab8b323b748df40361dee"},{url:"assets/mirror/zuixjs.github.io/zuix-html-pwa/images/lighthouse-report.png",revision:"8207650c1ee086cd9ac3ba316e5b5622"},{url:"content/about/images/gene.jpg",revision:"266fecd3c757092cfa38460d6eb7033a"},{url:"content/posts/images/add-gesture-detection-cover.jpg",revision:"ffd1c19f76636d80f1e2665b89b31acf"},{url:"content/posts/images/adding-a-viewpager.jpg",revision:"95d5b130343490fb8ebc6dc775c31af4"},{url:"content/posts/images/client-side-html-css-preprocessing.jpg",revision:"7c01827a788073b73ab3845c1877acc6"},{url:"content/posts/images/component-based-cover.jpg",revision:"3c26db7025388b77b4f6abffc4604e0e"},{url:"content/posts/images/in-browser-bundling.jpg",revision:"020540a6c7cbd101027946e6ae644b22"},{url:"content/posts/images/lovely-web-bits.jpg",revision:"a80be06f88500b3574db1c62b68fb026"},{url:"content/posts/images/mobile-app-from-scratch.jpg",revision:"215197e13b1fd61b57290b80a217ec02"},{url:"content/posts/images/progressive-web-app.jpg",revision:"f2c0b8ba2f045574044b4a9f29404290"},{url:"content/posts/images/webflix-clone-cover-big.jpg",revision:"f25050f9a44f2109bcdf145d8567c0b7"},{url:"content/posts/images/webflix-clone-cover.jpg",revision:"88910b9c797bfe3cc2e326c528168d16"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/github-octocat.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/glabs-logo.png",revision:"2e297e5468d7c0efb1679a023780b45d"},{url:"images/glabs-logo.svg",revision:"41bee4c287873f84036baa7abef4ca9f"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"fd298c2b3f1a94401571f288d7f8a2d8"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"52816b3c789066d69438f39d162dc56f"},{url:"images/icons/desktop/favicon-16x16.png",revision:"a89837373cfd7844ff59f5c53f274c1f"},{url:"images/icons/desktop/favicon-32x32.png",revision:"e307007b6c5de09958971f48cba24885"},{url:"images/icons/desktop/mstile-150x150.png",revision:"e8a3df32a0f335984300fe66d82b2618"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"3043dd6c3a66285800b959147e651bd7"},{url:"images/icons/icon-128x128.png",revision:"b9d883e490c231c4b1a62934620d4c84"},{url:"images/icons/icon-144x144.png",revision:"d8957abccfcfc3cad4efaf6a4180b319"},{url:"images/icons/icon-152x152.png",revision:"2f35d54d93493ff05cce8a3337bafb7d"},{url:"images/icons/icon-192x192.png",revision:"fd298c2b3f1a94401571f288d7f8a2d8"},{url:"images/icons/icon-384x384.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/icon-512x512.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/icon-72x72.png",revision:"7e67ccbd3c60925331ce256b14762a9c"},{url:"images/icons/icon-96x96.png",revision:"23421faace1915b7cd36f4125b61571e"},{url:"images/lighthouse.png",revision:"b5cad18f7bb11643253bc672249a8dfd"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
