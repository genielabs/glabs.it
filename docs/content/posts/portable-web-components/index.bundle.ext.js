zuix.store("config",{title:"glabs.it",subtitle:"the open source factory",language:"en",baseUrl:"/",resourcePath:"/app/",libraryPath:{"@lib":"http://zuixjs.github.io/zkit/lib/1.2/","@hgui":"https://genielabs.github.io/homegenie-web-ui/app/","@cdnjs":"https://cdnjs.cloudflare.com/ajax/libs/"},siteMapUrl:"https://glabs.it/",googleSiteId:null}),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js")}),function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://cpwebassets.codepen.io/assets/packs/",i(i.s=733)}({733:function(e,t,r){"use strict";r.r(t);function n(e){"loading"===document.readyState?setTimeout(function(){n(e)},9):e()}function i(e){var t=(t=e).host?a(t.host):"https://codepen.io",r=e.preview&&"true"===e.preview?"embed/preview":"embed";if("prefill"in e)return[t,r,"prefill"].join("/");var n=function(e){var t="",r;for(r in e)"prefill"!==r&&(""!==t&&(t+="&"),t+=r+"="+encodeURIComponent(e[r]));return t}(e),i=e.user||"anon",o=e["slug-hash"];return void 0!==e.token&&(o+="/"+e.token),[t,i,r,o+"?"+n].join("/").replace(/\/\//g,"//")}function o(e,t){var r,n=document.createElement(e);for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.setAttribute(r,t[r]);return n}var u={_HTML_TYPES:["html","xml","haml","markdown","slim","pug","application/x-slim"],_CSS_TYPES:["css","less","scss","sass","stylus","postcss","text/css","text/x-sass","text/x-scss","text/x-less","text/x-styl"],_JS_TYPES:["js","javascript","coffeescript","livescript","typescript","babel","text/javascript","text/x-coffeescript","text/x-livescript","text/typescript"],_CUSTOM_EDITOR_TYPES:{vue:"js",flutter:"js"},cmModeToType:function(e){e=this._getSafeInputMode(e);return this._getType(e)},_getSafeInputMode:function(e){return("string"==typeof e?e:e.name).toLowerCase()},syntaxToType:function(e){return this._getType(e)},_getType:function(e){return-1!==this._HTML_TYPES.indexOf(e)?"html":-1!==this._CSS_TYPES.indexOf(e)?"css":-1!==this._JS_TYPES.indexOf(e)?"js":this._CUSTOM_EDITOR_TYPES[e]||"unknown"}},c=["title","description","tags","html_classes","head","stylesheets","scripts"],l=function(e,t){if("string"==typeof e.user)return e.user;for(var r=0,n=t.children.length;r<n;r++){var i=(t.children[r].href||"").match(/codepen\.(io|dev)\/(\w+)\/pen\//i);if(i)return i[2]}return"anon"},p=function(e){return"prefill"in e||e["slug-hash"]},d=function(e){return e.href&&(e["slug-hash"]=e.href),e.type&&(e["default-tab"]=e.type),e.safe&&("true"===e.safe?e.animations="run":e.animations="stop-after-5"),e},a=function(e){return e.match(/^\/\//)||!e.match(/https?:/)?document.location.protocol+"//"+e:e},f=function(e,t){var r,n=o("form",{class:"cp_embed_form",style:"display: none;",method:"post",action:i(e),target:e.name});for(r in e.data=function(e){if(e.hasAttribute("data-prefill")){var t,r={},n=e.getAttribute("data-prefill");for(t in n=JSON.parse(decodeURI(n)||"{}"))-1<c.indexOf(t)&&(r[t]=n[t]);for(var i=e.querySelectorAll("[data-lang]"),o=0;o<i.length;o++){var a=i[o],s=a.getAttribute("data-lang"),l=(a.getAttribute("data-options-autoprefixer")&&(r.css_prefix="autoprefixer"),u.syntaxToType(s)),s=(r[l]=a.innerText,s!==l&&(r[l+"_pre_processor"]=s),a.getAttribute("data-lang-version"));s&&(r[l+"_version"]=s)}return JSON.stringify(r)}}(t),e)"prefill"!==r&&n.appendChild(o("input",{type:"hidden",name:r,value:e[r]}));return n},h=function(e){var t=i(e),r=e["pen-title"]||"CodePen Embed",t={allowfullscreen:"true",allowpaymentrequest:"true",allowTransparency:"true",class:"cp_embed_iframe "+(e.class||""),frameborder:"0",height:e.height||300,width:"100%",name:e.name||"CodePen Embed",scrolling:"no",src:t,style:"width: 100%; overflow:hidden; display:block;",title:r};return"prefill"in e==0&&(t.loading="lazy"),e["slug-hash"]&&(t.id="cp_embed_"+e["slug-hash"].replace("/","_")),o("iframe",t)},m=function(e,t){var r;return e.parentNode?((r=document.createElement("div")).className="cp_embed_wrapper",r.appendChild(t),e.parentNode.replaceChild(r,e),r):(e.appendChild(t),e)},g=1;function s(e){e="string"==typeof e?e:".codepen";for(var t,r,n=document.querySelectorAll(e),i=0,o=n.length;i<o;i++){var a=n[i],s=function(e){for(var t={},r=e.attributes,n=0,i=r.length;n<i;n++){var o=r[n].name;0===o.indexOf("data-")&&(t[o.replace("data-","")]=r[n].value)}return t=d(t),p(t)?(t.user=l(t,e),t):null}(a);s&&(s.name="cp_embed_"+g++,s=s,a=a,r=t=void 0,(r=document.createDocumentFragment()).appendChild(h(s)),"prefill"in s&&(t=f(s,a),r.appendChild(t)),m(a,r),t&&t.submit())}"function"==typeof __CodePenIFrameAddedToPage&&__CodePenIFrameAddedToPage()}(window.__cp_domReady=n)(window.__CPEmbed=s)}});