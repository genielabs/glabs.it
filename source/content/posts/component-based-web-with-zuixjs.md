---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/component-based-cover.jpg
coverImage: https://drive.google.com/uc?id=1M-F9RlZr9ayjWNysJWB-BrqXwOP-q_o1
coverCopy:
title: Component-based web with <code>zuix.js</code>
description: Meet zUIx.js, a small yet powerful library for component-based web development.
author: Gene
pubDate: 2018-07-19
keywords:
- blog
- post
---

## The beginning

When I started to write [zuix.js](https://zuixjs.org), in December 2016, my intention was to re-arrange and create a library out of some code I had written back in 2012 for HomeGenie web UI.

*In the picture below you can see the old, but still good, HomeGenie web UI.*

![HomeGenie Web UI](https://genielabs.github.io/HomeGenie/images/docs/dashboard_page_01.jpg)

The cool thing about this smart home software is that one can customize and write new widgets by using the integrated web editor (you can read more about this in the [documentation page](https://genielabs.github.io/HomeGenie/#/develop/widgets)).

So, in the process of writing this new UI library, I ended up creating *zUIx.js*, which got way beyond HomeGenie widgets by introducing the concept of loadable content, components, lazy-loading, templates, theming and much more.

## Creating a component

As an example we're going to create a 'clock' component that displays the current date and time.
First we include the `zuix.min.js` library in the `head` section of the document:

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix.min.js"></script>
```

then we create 3 files for the `mytime` component:

- components/mytime.css
- components/mytime.html
- components/mytime.js

To actually load the component in the main `index.html` file we add the following line:

```html
<div data-ui-load="components/mytime"></div>
```

That's it, super-duper easy **=)** See the live example below.

{% zx 'glitch' 'mytime' 'app' %}{% endzx %}

Also simple content and templates can be split and loaded in a similar way, but there's no `.js` file and `data-ui-include` attribute is used in place of `data-ui-load`.

{% zx 'glitch' 'mdlcard' 'app' %}{% endzx %}


## Reusability at its finest

The reusability concept is intrinsic for components. So, nothing new here. But what if we could use and reuse components, content and templates from across websites with no need of creating duplicates?

{% zx 'glitch' 'reuse' 'app' %}{% endzx %}

A closer look at the above example will show that we're loading two components that are physically stored on two different hosts (*mytime.glitch.me* and *mdlcard.glitch.me*).


## Boosting performance

*Lazy-loading* is a built-in feature of this library and it can boost website speed by loading content and components only when they are visible in the screen.
This can make a huge difference when dealing with big data-sets.

{% zx 'glitch' 'lazyload' 'app' %}{% endzx %}


# More Examples

Well, that is already much information for an introduction, so for now I'll leave a few links for those who want to explore further or perhaps contribute.

- [zuix.js](https://zuixjs.org)  
  Library website with documentation and examples.
- [zKit](https://zuixjs.github.io/zkit)  
  A collection of ready to use components for modern web.
- [Web Starter Project](https://github.com/zuixjs/zuix-web-starter)  
  If you are familiar with *Node.js* you might appreciate the *zuix-web-starter* which is a "blank" web project featuring
  LESS, Markdown, Minify, ESlint checks, automatic resource packing, PWA optimizations and much more.
- [HGUI](https://github.com/genielabs/homegenie-web-ui)  
  Dashboard for the Internet of Things (based on *zuix-web-starter*).

In the meantime if you have any question or just want to say 'Hi' feel free to leave a comment down below.
