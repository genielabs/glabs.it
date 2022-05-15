---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/mobile-app-from-scratch.jpg
coverImage: https://drive.google.com/uc?id=1bh3XAyrWiP4kipKg_uAmgDzlzeiD9AZH
coverCopy:
title: Mobile web app layout from scratch
description: Create a mobile app layout in 5 minutes (@!?!) =)
author: Gene
pubDate: 2018-07-22
keywords:
- blog
- post
---

{% include 'fragments/zuixjs-deprecated-content-notice.html' %}

First we add the header bar, with the logo and a menu button.

```html
<div class="logo">
    <a href="/">app-logo</a>
</div>
<div data-ui-load="@lib/components/hamburger_icon"
     data-ui-options="options.menuButton"
     class="menu-button"></div>
```

See the actual code in the `layout` folder of the example below

{% zx 'glitch' 'zuix-app-1' 'app' %}{% endzx %}

To take some action when the menu button is clicked we "pass" to the `data-ui-options` attribute the `options.menuButton`
object which is defined in the `index.js` like this:

```js
  menuButton: {
    on: {
      'menu:open': function() {
        // TODO: handle event
      },
      'menu:close': function() {
        // TODO: handle event
      }
    }
  }
```

Next we add a so called `DrawerLayout` which is basically a panel that contains the app menu and it will show in when
the menu button is clicked or with a swipe gesture from left edge to the right.

```html
<div data-ui-load="@lib/controllers/drawer_layout"
  data-ui-options="options.drawerLayout">

  <!-- Add Navigation Drawer menu and content here -->

</div>
```

Also for the drawer layout component we pass the `options.drawerLayout` object, so we can open/close the menu button as
well, when the drawer is open/closed.

```js
  drawerLayout: {
    on: {
      'drawer:open': function(e) {
        if (menuButton) menuButton.open();
      },
      'drawer:close': function(e) {
        if (menuButton) menuButton.close();
      }
    }
  }
```

And the following is the live example (swipe from left edge or click the menu button)

{% zx 'glitch' 'zuix-app-2' 'app' %}{% endzx %}

Now if we put a very long content in the page we might want the header to fade out/in as the user scrolls up/down.
For the purpose we load the `header_auto_hide` component on the `body` element.

```html
<body data-ui-load="@lib/controllers/header_auto_hide"
      data-o-target="header-bar">
```

And this was the last piece of this mobile app layout

{% zx 'glitch' 'zuix-app-3' 'app' %}{% endzx %}
