---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/progressive-web-app.jpg
coverImage: https://thepracticaldev.s3.amazonaws.com/i/cn8xjvhqd32zp04h8gpr.png
coverCopy:
title: Ready to use Progressive Web App template
description: Faaast, simple, modern PWA template.
author: Gene
pubDate: 2018-08-13
keywords:
- blog
- post
---

It was supposed to be just part of a series of examples and tutorials, but it turned out to be something good to share as a new open-source product.
So, if you did read my previous posts you can see the pattern that brought me to the creation of this *Progressive Web App* template:

https://github.com/zuixjs/zuix-html-pwa

Looks like a real mobile app with the plus of a responsive layout that works well both on a small screen (phone) or a desktop/tablet screen.

Those familiar with *Android* and *Material* design will definitely notice some similarities with Google products:

- [DrawerLayout](https://material.io/design/components/navigation-drawer.html) for the side menu panel
- [Collapsing](https://material.io/develop/android/components/collapsing-toolbar-layout/) header/footer bars synchronized with page scrolling
- [Tabs with ViewPager](https://material.io/design/components/tabs.html) used for navigating through sections of the home page
- Context Menu used for displaying news item options


<iframe width="100%" height="315" src="https://www.youtube.com/embed/UmgtHGiOo0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


These components only implement the interaction logic and the visual feedback (animations), so the developer can fill in the structure with content using any UI framework or just with plain HTML and CSS.

Usually my approach is the latter as I think that simple HTML and CSS nowadays already offer all is needed to create beautiful design and express in freedom your own creativity and taste.

Also this template doesn't require any build tool. **Just HTML, CSS, JavaScript and your favorite editor**, but nevertheless it is a Progressive Web App with a rather good score:

![LightHouse report](https://zuixjs.github.io/zuix-html-pwa/images/lighthouse-report.png)

You can see it live here: [HTML-PWA](https://zuixjs.github.io/zuix-html-pwa/).

#### About the Context Menu component

While setting up this template I also had a chance to write a new component and add it to the [zKit](https://zuixjs.github.io/zkit/) collection, which is the *Context Menu*.

![Context Menu](https://thepracticaldev.s3.amazonaws.com/i/vlnoa89vnnf62fcdjccx.png)

Like all other companions in the *zKit* collection, the context menu is a *framework-agnostic* component that can be integrated easily in any project.

I had no chance to add the documentation yet, but I'll briefly show here how to use it.

**1**. Add the following line, preferably inside the head section of the HTML document:

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix.min.js"></script>
```

**2**. Load the `context_menu` component and put inside the `<div data-ui-field="menu">` the `HTML` code of your menu items.

```html
<div data-ui-load="@lib/components/context_menu"
     data-ui-context="options-menu">
    <div data-ui-field="menu">
    
    <!-- place here the menu items -->

    </div>
</div>
```

**3**. Get a reference to the `contextMenu` object in JavaScript code

```javascript
var contextMenu;
zuix.context('options-menu', function(){ contextMenu = this; });
```

or if you prefer arrow functions

```javascript
var contextMenu;
zuix.context('options-menu', ctx => contextMenu = ctx );
```

**4**. Show/hide the menu programmatically as needed

```javascript
// show
contextMenu.show();
// hide
contextMenu.hide()
```

You can already try this with the [HTML-PWA](https://zuixjs.github.io/zuix-html-pwa/) website.

- open the website
- press F12 (open the browser console)
- type `zuix.context('news-options-menu').show()` ... or `drawerLayout.open()` ... or `viewPager.page(2)`

Easy-peasy when everything is a component =)

Ok, so it's now time to take a break and possibly go for a swim later. Talk to you soon.

![Sea Time](https://media.giphy.com/media/T1wXTcV8KhVHq/giphy.gif)
