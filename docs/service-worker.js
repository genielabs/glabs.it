if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>s(e,a),r={module:{uri:a},exports:c,require:o};i[a]=Promise.all(d.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-90aa7b36"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/card.css",revision:"265de360088c4829ba339c3bb8f13376"},{url:"app/card.html",revision:"7ef2f1936dc71a292da26942e0ac657a"},{url:"app/card.js",revision:"e41bd9886a9aeb5a3489e1b903bbc8ac"},{url:"app/cms/zuix-editor.css",revision:"20bfdd79067e9ebdc3d619aafb170291"},{url:"app/cms/zuix-editor.html",revision:"29e9e66c0551e5713c02e4f86d1494b7"},{url:"app/cms/zuix-editor.js",revision:"40e7cdf4d16c625617ec84be52417f8a"},{url:"app/cms/zuix-editor/dialogs/add-page.css",revision:"fa9d55e0e6227e3e412259f11e0bbdb2"},{url:"app/cms/zuix-editor/dialogs/add-page.html",revision:"635447ae5013d8d592f0d3150aa6b907"},{url:"app/cms/zuix-editor/dialogs/add-page.js",revision:"cd78758e09ad8babf8f55ce56f49ecb6"},{url:"app/cms/zuix-editor/dialogs/create-component.css",revision:"980e51a89d8801392dd457459f10d8bf"},{url:"app/cms/zuix-editor/dialogs/create-component.html",revision:"beb030d44e9cd47de7da79e9b8e6c5a8"},{url:"app/cms/zuix-editor/dialogs/create-component.js",revision:"efb4228addddc9b4ba7e65b79611e4ff"},{url:"app/cms/zuix-editor/dialogs/delete-page.css",revision:"2d83029a4ce61bf4c799868f4da7be12"},{url:"app/cms/zuix-editor/dialogs/delete-page.html",revision:"b86caa847060bde014b7c740e7d919ce"},{url:"app/cms/zuix-editor/dialogs/delete-page.js",revision:"36d0d71ef5e39ccb7df0fdcc67006599"},{url:"config.js",revision:"cc1fa29f85d1826d1bd178455bebbc7b"},{url:"content/about/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/about/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/about/index.html",revision:"022d4aeb01a9e764ff401dce7530735d"},{url:"content/content.11tydata.js",revision:"04fb4b5a734c21c8a824d50e6df3b3d0"},{url:"content/museum/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/museum/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/museum/index.html",revision:"1f79ac748a10cf959ba84b474129c70e"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/adding-a-viewpager-to-the-mobile-web-app/index.html",revision:"9b618f752ea7d10b41defae0268516da"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.bundle.ext.js",revision:"1a9b7754a445bfac8b8dd5e4ef823be6"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/adding-gesture-based-interaction-to-your-site/index.html",revision:"c1648ed401cb1839e518b23be63cbfc2"},{url:"content/posts/client-side-html-css-preprocessing/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/client-side-html-css-preprocessing/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/client-side-html-css-preprocessing/index.html",revision:"dcf6c2beb1d02ff0a8905f9aa41eb20f"},{url:"content/posts/component-based-web-with-zuixjs/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/component-based-web-with-zuixjs/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/component-based-web-with-zuixjs/index.html",revision:"b3aa3874b74068e1ca6681d1aa1e093a"},{url:"content/posts/index_list/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/index_list/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/index_list/index.html",revision:"844217089dab5afe2d54985428d1c697"},{url:"content/posts/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/index.html",revision:"d3dcc4a0b377bd320f58357b22f9fcc1"},{url:"content/posts/mobile-app-layout-from-scratch/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/mobile-app-layout-from-scratch/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/mobile-app-layout-from-scratch/index.html",revision:"ebefe7b74787435d7560fe741773abdb"},{url:"content/posts/netflix-clone-web-app-template/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/netflix-clone-web-app-template/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/netflix-clone-web-app-template/index.html",revision:"db7055d7e35848520afa982cb38e0dcd"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/ready-to-use-progressive-web-app-template/index.html",revision:"9ec4d520c589ee7bcaf49aa9d6227092"},{url:"content/posts/unique-lovely-web-bits/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/unique-lovely-web-bits/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/unique-lovely-web-bits/index.html",revision:"b7a1b4be4a61326cb33f7b4ef40d4640"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/posts/web-app-bundling-in-the-browser-with-zuixjs/index.html",revision:"08e01f60c63ddd60c4c780d37ddaacdc"},{url:"content/works/index_list/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/works/index_list/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/works/index_list/index.html",revision:"0e71530bacf90496145b095bc0c2361f"},{url:"content/works/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"content/works/index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"content/works/index.html",revision:"4155ed415e54b500094a6b349f304c04"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism-tomorrow.min.css",revision:"c6b4dce537526ed1ac67d9b7bd3e7158"},{url:"index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"index.bundle.js",revision:"d2c05df443e69426b37f7a17b166ab5d"},{url:"index.html",revision:"6838e6938c67f57b6ec02d8006647f50"},{url:"js/fuse/fuse.basic.common.js",revision:"ab3ef0028c8992d0098b5b836874291a"},{url:"js/fuse/fuse.basic.esm.js",revision:"0cd240af452625e49deed3ee2445aba6"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"f79f602fa4572cd580786923ce942b6c"},{url:"js/fuse/fuse.basic.js",revision:"6c4923a67225dd64e42600c578d8ff0f"},{url:"js/fuse/fuse.basic.min.js",revision:"62465d50492b6d1bfbbd0e5f9a09b222"},{url:"js/fuse/fuse.common.js",revision:"ddbe097989e19bf1872f533cbc363f1b"},{url:"js/fuse/fuse.esm.js",revision:"82bbf2ed8ece715c58afe6c75977795f"},{url:"js/fuse/fuse.esm.min.js",revision:"589223b029350d512db61a8f323ce0fe"},{url:"js/fuse/fuse.js",revision:"7e19f88c4b2a7c038943bf3b4a17986f"},{url:"js/fuse/fuse.min.js",revision:"de7d60e4a6881074275feca14b84a49d"},{url:"js/zuix/zuix-bundler.js",revision:"0a1266d63448c732689109db0e9b71c9"},{url:"js/zuix/zuix-bundler.min.js",revision:"a8ca55154da28a4825724e05693c2f89"},{url:"js/zuix/zuix-bundler.module.js",revision:"ed85ec7fa72e6eca3549897130dfd061"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"c04ba1df1c23eb63882cdc4e1d1ce30b"},{url:"js/zuix/zuix.js",revision:"7ea99f5e1e7038dfc13132d990ab401f"},{url:"js/zuix/zuix.min.js",revision:"97df826bbad82c4ddccad12c3fe1d976"},{url:"js/zuix/zuix.module.js",revision:"d429961a537cd83b0e5c8921f9f33d2c"},{url:"js/zuix/zuix.module.min.js",revision:"d74bb15cdea811486968291933c54cc3"},{url:"lib/1.1/components/context-menu.css",revision:"7ba1b409b46410bee01e4fc18dadb7a3"},{url:"lib/1.1/components/context-menu.html",revision:"74daf4054d7613ede5f88007a94bdc43"},{url:"lib/1.1/components/context-menu.js",revision:"c013b05a56f175a6cdcc1627d884f06d"},{url:"lib/1.1/components/media-browser.css",revision:"e889174b42c1b4abd01bcd04e4cdaa0f"},{url:"lib/1.1/components/media-browser.html",revision:"aa238aa38f3d18bd7213e1f122b3bd28"},{url:"lib/1.1/components/media-browser.js",revision:"78e4e863a758ac040ccfec3bd5dd23f7"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"ee5d2f689e747b5320fefd361af7fcfd"},{url:"lib/1.1/components/media-browser/image.css",revision:"ae49f05922ab6be7e09a8bebf1f32f00"},{url:"lib/1.1/components/media-browser/image.html",revision:"87a9be2b82f0388a7d3aaa16c2003422"},{url:"lib/1.1/components/media-browser/image.js",revision:"4aeeac0bd702d717fceb59f1abcd924e"},{url:"lib/1.1/components/media-browser/video-yt.css",revision:"594d8771c9b011eaebcd957daf74d17e"},{url:"lib/1.1/components/media-browser/video-yt.html",revision:"c2f8efe96493d4a5822fd5489545a0ad"},{url:"lib/1.1/components/media-browser/video-yt.js",revision:"87ae9156a9dec2427ffbe5439e5c3f4f"},{url:"lib/1.1/components/media-browser/video.css",revision:"c62d91469a6c8d17aad13581469f7d1c"},{url:"lib/1.1/components/media-browser/video.html",revision:"2c5b507d723026db3f262d55f1ba8d9e"},{url:"lib/1.1/components/media-browser/video.js",revision:"eb337fc0d0adb6840d077de7888a8f8c"},{url:"lib/1.1/components/menu-overlay.css",revision:"736446a0ce463ad6664c5f8066376189"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"15dc6cd532c7c4af1ee4f525c2f3aff2"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"efd643eb309cafec496b8f5b60dacf4a"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"4c37892f2cdd9dcc2a36eeed115835b2"},{url:"lib/1.1/controllers/list-view.js",revision:"5fce46375f222d538c8706f751e2071e"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"lib/1.1/controllers/view-pager.js",revision:"d7e48fa1226efe9fb2e1a53730203d82"},{url:"manifest.json",revision:"ec7b578ee569fedff4fa21acb9e4687a"},{url:"search-index.json",revision:"08a61ed77b7484ee419d7d3fe50dbbbf"},{url:"search-list.json",revision:"9b7d7fbcc9d5c1a376765d427d12f09b"},{url:"search/index.bundle.ext.js",revision:"9e76f47756c2d9760459f59d14dd0253"},{url:"search/index.bundle.js",revision:"fffeee74620234a451249cd84f5dff17"},{url:"search/index.html",revision:"038f4f1f545e757b73a176bca1ad0b64"},{url:"assets/mirror/genielabs.github.io/HomeGenie/images/docs/dashboard_page_01.jpg",revision:"0d07a1aa7b8600ff832761b5f6ff927e"},{url:"assets/mirror/media.giphy.com/media/E2USislQIlsfm/giphy.gif",revision:"b2f94e63fda3f778ff10fc8090411758"},{url:"assets/mirror/media.giphy.com/media/T1wXTcV8KhVHq/giphy.gif",revision:"d1c30d57aef1a3f0e9c6ad789720d3c6"},{url:"assets/mirror/media.giphy.com/media/xTiTntReleqBnhBNwQ/giphy.gif",revision:"ec59e99f8ecdd9ff9c7f60c72f7bf717"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/2gk48dshoa4zok3rh1z4.png",revision:"449e891c6f1a409a3fa6cd81410536cc"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/4i2nm4b8y82z8cdkhnyg.jpg",revision:"12502a505ef1af4856809ecbbf688ee9"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/8e2qhxdctwm3bnb73z1z.jpg",revision:"cf334159a86283380855d4655f2ec3af"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/8l276dgce86ez8jdpap1.jpg",revision:"40a7b81acc4adfc3c66cd86c8211dc82"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/cn8xjvhqd32zp04h8gpr.png",revision:"c9ed54002e0d650e42d92fa8bf49547f"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/e6g0ex68dmf08msb41rf.png",revision:"ee6fae2ebe64ff110ccc428044f03caa"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/g02hdgw86q2nfivsfhzu.png",revision:"2ab5b2c748ccca5eef87e91f336b0873"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/pocqyuok4f06ljdyi14j.jpg",revision:"49f15269543ce76968381db125cb16db"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/vfk4j4pk8jfn75vyj1e4.jpg",revision:"a56ad79b22ff53a7c592569ae8d7f586"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/vlnoa89vnnf62fcdjccx.png",revision:"1769c3d76769a770065f772e292ee4af"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/wkumb20jphd5k5a8mt22.gif",revision:"7e21c6ab4658c8c547f1a36d4b83d7f0"},{url:"assets/mirror/thepracticaldev.s3.amazonaws.com/i/ysapo252grk4t7g2xa4p.png",revision:"ebbe526928cab8b323b748df40361dee"},{url:"assets/mirror/zuixjs.github.io/zuix-html-pwa/images/lighthouse-report.png",revision:"8207650c1ee086cd9ac3ba316e5b5622"},{url:"content/about/images/gene.jpg",revision:"6658ba5a8353aeef8046a5616bdecbe2"},{url:"content/posts/images/add-gesture-detection-cover.jpg",revision:"ffd1c19f76636d80f1e2665b89b31acf"},{url:"content/posts/images/adding-a-viewpager.jpg",revision:"95d5b130343490fb8ebc6dc775c31af4"},{url:"content/posts/images/client-side-html-css-preprocessing.jpg",revision:"7c01827a788073b73ab3845c1877acc6"},{url:"content/posts/images/component-based-cover.jpg",revision:"3c26db7025388b77b4f6abffc4604e0e"},{url:"content/posts/images/in-browser-bundling.jpg",revision:"020540a6c7cbd101027946e6ae644b22"},{url:"content/posts/images/lovely-web-bits.jpg",revision:"a80be06f88500b3574db1c62b68fb026"},{url:"content/posts/images/mobile-app-from-scratch.jpg",revision:"215197e13b1fd61b57290b80a217ec02"},{url:"content/posts/images/progressive-web-app.jpg",revision:"f2c0b8ba2f045574044b4a9f29404290"},{url:"content/posts/images/webflix-clone-cover-big.jpg",revision:"f25050f9a44f2109bcdf145d8567c0b7"},{url:"content/posts/images/webflix-clone-cover.jpg",revision:"88910b9c797bfe3cc2e326c528168d16"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/github-octocat.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/glabs-logo.png",revision:"2e297e5468d7c0efb1679a023780b45d"},{url:"images/glabs-logo.svg",revision:"41bee4c287873f84036baa7abef4ca9f"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"fd298c2b3f1a94401571f288d7f8a2d8"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"52816b3c789066d69438f39d162dc56f"},{url:"images/icons/desktop/favicon-16x16.png",revision:"a89837373cfd7844ff59f5c53f274c1f"},{url:"images/icons/desktop/favicon-32x32.png",revision:"e307007b6c5de09958971f48cba24885"},{url:"images/icons/desktop/mstile-150x150.png",revision:"e8a3df32a0f335984300fe66d82b2618"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"3043dd6c3a66285800b959147e651bd7"},{url:"images/icons/icon-128x128.png",revision:"b9d883e490c231c4b1a62934620d4c84"},{url:"images/icons/icon-144x144.png",revision:"d8957abccfcfc3cad4efaf6a4180b319"},{url:"images/icons/icon-152x152.png",revision:"2f35d54d93493ff05cce8a3337bafb7d"},{url:"images/icons/icon-192x192.png",revision:"fd298c2b3f1a94401571f288d7f8a2d8"},{url:"images/icons/icon-384x384.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/icon-512x512.png",revision:"95271000ee3da1e121df8c4ea0ab5d96"},{url:"images/icons/icon-72x72.png",revision:"7e67ccbd3c60925331ce256b14762a9c"},{url:"images/icons/icon-96x96.png",revision:"23421faace1915b7cd36f4125b61571e"},{url:"images/lighthouse.png",revision:"b5cad18f7bb11643253bc672249a8dfd"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/patreon.png",revision:"c6f40540e970fcf3a08bbe4131927af6"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
