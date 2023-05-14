---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/in-browser-bundling.jpg
coverImage: /assets/mirror/thepracticaldev.s3.amazonaws.com/i/4i2nm4b8y82z8cdkhnyg.jpg
coverCopy: Photo © Racorn | Dreamstime
title: Web app bundling in the browser with zuix.js
description: You don't always need build tools to optimize page loading
author: Gene
pubDate: 2018-08-01
keywords:
- blog
- post
---

{% include 'fragments/zuixjs-deprecated-content-notice.html' %}

## What is web page/app bundling?

Bundling is the process of collecting all resources used in a page and then compiling them into a single, optimized file.

This will drastically reduce the number of network requests the browser will have to do to complete the page loading and
that will so load the page faster.

There are actually two way of doing this:

- **In-Browser** bundler:  
  this method does not require any build tool nor plugins, it just works in the browser as-is.
- **Web-Starter** bundler:  
  is the [zuix-web-starter](https://github.com/zuixjs/zuix-web-starter) bare template, with a bunch of extra features and enhancements (requires *Node.js*).


## In-Browser bundling

Usually when a website is ready for production you can decide to bundle it in order to gain better performances. All of
its components and resources will be crunched into a single file and loaded from memory rather than from network/localhost.

### Step by step guide

Include the **zuix-bundler** extension script in your page right after the main *zuix* script inclusion:

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix-bundler.min.js"></script>
```

After adding this script you can reload the page and generate the application bundle by typing in the **browser console**
the command

```javascript
zuix.saveBundle()
```

This will create and save the **app.bundle.js** file to the *Downloads* folder.

Copy the generated file to your website root and include it right after the main *zuix* script inclusion.

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix.min.js"></script>
<script src="app.bundle.js"></script>
```

Remove the `zuix-bundler` script inclusion from the page after the bundle is created.


### Remarks

When using *lazy-loading* only components loaded so far will be included in the bundle (incremental bundling).

To force inclusion of all components/resources used in the page, issue the following commands in the console:

```javascript
// disable lazy-loading
zuix.lazyLoad(false)
// force loading of all components
zuix.componentize()
// create the bundle
zuix.saveBundle()
```

Also external JavaScript libraries and CSS files can be included in the page bundle. In order to achieve this, remove
the `<script src="..."></script>` or `<link rel="stylesheet">` and use the method `zuix.using(...)` instead to load the
script/css.

```javascript
// Loading a .css style
const flaCss = 'https://cdnjs.cloudflare.com/ajax/libs/flex-layout-attribute/1.0.3/css/flex-layout-attribute.min.css';
zuix.using('style', flaCss, function(res, styleObject) {
    console.log("Added Flex Layout Attributes CSS.", res, styleObject);
});
// Loading a .js script
const momentJs = 'https://momentjs.com/downloads/moment.js';
zuix.using('script', momentJs, function(res, scriptObject){
    console.log("Added Moment.js.", res, scriptObject);
});
// Loading a zuix component
zuix.using('component', '@lib/extensions/animate_css', function(res, componentContext){
   console.log("Added AnimateCSS extension for zuix.", res, componentContext);
});
```

If the `zuix.using` method is called on a resource that was already loaded, it will just ignore the request.

This method is also used to create **self-contained components** that can be loaded without having to worry about external
dependencies to include.

## Example

As an example I remixed the *zuix-app-4* of my previous post into [zuix-app-5](https://zuix-app-5.glitch.me).

In case you missed my previous post:

{# link https://dev.to/genejams/adding-a-viewpager-to-the-mobile-web-app-n67 #}

This is the new [source code](https://glitch.com/edit/#!/zuix-app-5) and this is what I did:

- replaced the 'fake list' with a real list (`components/news_list`) that can load data from an RSS feed
- replaced the `components/random_item` with a `components/news_list/item` and `components/news_list/item_mini`
- removed all *scripts* and *css* inclusions from the `head` section of `index.html` and added them with `zuix.using(..)`  
  to the `index.js`

I wanted the RSS feed to be the one from *Google News*, but unfortunately Google no longer provide this service (so sad),
so I ended up using the *CNN* feed as it was the only feed with nice images and up-to-date titles.

Most feeds of this kind do not allow downloading from a different domain so I used the `cors-anywhere.herokuapp.com` proxy
to hack [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) behavior. This proxy gets very slow sometimes,
but that's OK for an example.

So, to sum up, the [zuix-app-5](https://zuix-app-5.glitch.me) is the version without the `app.bundle.js` (not bundled)
and I used it to create the bundled version that is available on [zuix-app-6](https://zuix-app-6.glitch.me).

Here is a comparison between the two versions.

#### zuix-app-5: total files **18**

![zuix-app-5 files](/assets/mirror/thepracticaldev.s3.amazonaws.com/i/g02hdgw86q2nfivsfhzu.png)

#### zuix-app-5: network performance

![zuix-app-5 perf](/assets/mirror/thepracticaldev.s3.amazonaws.com/i/2gk48dshoa4zok3rh1z4.png)


#### zuix-app-6: total files **4**

![zuix-app-6 files](/assets/mirror/thepracticaldev.s3.amazonaws.com/i/e6g0ex68dmf08msb41rf.png)

#### zuix-app-6: network performance

![zuix-app-6 perf](/assets/mirror/thepracticaldev.s3.amazonaws.com/i/ysapo252grk4t7g2xa4p.png)

This is the [source code](https://glitch.com/edit/#!/zuix-app-6) for `zuix-app-6`.


## Web Starter bundling

![zuix Web Starter](/assets/mirror/thepracticaldev.s3.amazonaws.com/i/wkumb20jphd5k5a8mt22.gif)

The image above shows the bundling process of `zuix-web-starter` used for the zuix website itself.

But... since it's already kind of a long post, I'll just briefly put the main features here:

- zuix web components and app bundler
- Static Site with: Front-Matter, Data Files, Helpers, Collections, Templates
- LESS to CSS compiling
- ESLint .js code linting
- Minifier
- Progressive Web App generator

![gotta go](/assets/mirror/media.giphy.com/media/3o7btYYfqOuQAz7SYE/giphy.gif)
