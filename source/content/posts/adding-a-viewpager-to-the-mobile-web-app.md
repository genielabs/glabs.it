---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/adding-a-viewpager.jpg
coverImage: /assets/mirror/thepracticaldev.s3.amazonaws.com/i/8l276dgce86ez8jdpap1.jpg
coverCopy:
title: Adding a ViewPager to your web app
description: Meant to be a Twitter mobile clone, ended up in something else.
author: Gene
pubDate: 2018-07-29
keywords:
- blog
- post
---

{% include 'fragments/zuixjs-deprecated-content-notice.html' %}

## What is a ViewPager?

As described in *Android Developers* documentation, a *ViewPager* is a

> Layout manager that allows the user to flip left and right through pages of data.

## Usage

Include `zuix.js` in the `head` section of the page:

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix.min.js"></script>
```

Add the ViewPager as described below:

```html
<div data-ui-load="@lib/controllers/view_pager"
     data-o-paging="true">
  <div><!-- Add page 1 content here --></div>
  <div><!-- Add page 2 content here --></div>
  <div><!-- Add page 3 content here --></div>
  <!-- etc.. -->
</div>
```


## Example application

The example app design was initially inspired to *Twitter* mobile but it can be used and adapted as a starting base for different kind of projects.

![Web App 4-1](/assets/mirror/thepracticaldev.s3.amazonaws.com/i/f3mib65guw55oj39n83k.gif)

Design summary:

- responsive
- main `view_pager` to switch between content sections
- side drawer with options menu that can be open by tapping the user avatar
- collapsing header/footer when scrolling up, expanding when scrolling down
- page indicator with section names (it's just another `view_pager`)

Fully playable source on *Glitch*:

{% zx 'glitch' 'zuix-app-4' 'app' %}{% endzx %}

I recommend trying this example also  full screen with the <small>**direct link**</small> [zuix-app-4.glitch.me](https://zuix-app-4.glitch.me).


## Structure

The app consists of a main `index` and the following elements:

```
// a small component implementing a 'card'
// with a picture and random data

components/random_item.css
components/random_item.html
components/random_item.js

// a static list used in each ViewPager page and
// that holds a bunch of lazy-loaded 'random_item'

content/fake_list.css
content/fake_list.html

// the menu used in the side `drawer_layout'

content/user_menu.css
content/user_menu.html

// the header bar with a title, clickable
// user profile avatar and sections names

layout/header.css
layout/header.html

// a footer bar with links to main app screens

layout/footer.css
layout/footer.html

// the main app files

index.css
index.html
index.js
```

So, the `index.html` page includes:

- `layout/header`
- `layout/footer`
- the `drawer_layout` which content is loaded from `content/user_menu`
- a `view_pager` to implement the page indicator (tab layout) with the section names (*Feed*, *Week*, *Month*, etc..)
- main `view_pager` which holds the pages of each section that contain the `fake_list` populated with `random_item`s

I hope this make sense =) and that the code is easy to understand even for a beginner. If not, feel free to leave a comment, I'll do my best to improve this.

Further reading:

- [ViewPager](https://zuixjs.github.io/zkit/pages/controllers/view-pager/)
- [zuix.js](https://zuixjs.org)
