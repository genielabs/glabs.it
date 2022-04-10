---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverMini: /content/posts/images/lovely-web-bits.jpg
title: Unique, lovely web bits
description: Just about what I was up to yesterday
cover_image: https://thepracticaldev.s3.amazonaws.com/i/pocqyuok4f06ljdyi14j.jpg
cover_copy:
author: Gene
pubDate: 2018-07-26
keywords:
- blog
- post
---

Yesterday I wanted to complete the documentation of the animated `hamburger_icon` button used in my previous post.

As often happens, documenting things will help to improve them and this will require a few last-minute changes, that in
this case were about adding extra options for choosing different burger animations and colors.
The result is available [here](https://zuixjs.github.io/zkit/1.0/docs/components/hamburger_icon).

But wait a minute... I've used this *hamburger_icon* button in all of the 3 example projects on *Glitch* and also over
a couple of other projects on GitHub pages.

> Does that mean I've to copy the new code all over the different projects that are using the *hamburger_icon* and publish all of them once again?

![Oh Sh*t!](https://media.giphy.com/media/E2USislQIlsfm/giphy.gif)

Luckily that's **not the case** since none of those projects were holding a copy of employed bits but rather a direct
link to the original source of each.


## Unique bits

This is also what we can see in the `HTML` code used to implement the header bar in the last example of my previous post:

```html
<header data-ui-include="//zuix-app-1.glitch.me/layout/header"></header>
```
<small>A "bit" from **index.html** hosted on **zuix-app-3**.glitch.me</small>

The `data-ui-include="//zuix-app-1.glitch.me/layout/header"` means that the `layout/header` is fetched directly from the
server hosting the first example and that consists of these two files:

- https://**zuix-app-1**.glitch.me/layout/header.html
- https://**zuix-app-1**.glitch.me/layout/header.css

But then, when we look at the `header.html` we see

```html
<div class="logo">
    <a href="/">app-logo</a>
</div>
<div data-ui-load="@lib/components/hamburger_icon"
     data-ui-options="options.menuButton"
     class="menu-button"></div>
```

where `data-ui-load="@lib/components/hamburger_icon"` means that, in turn, the header will load the `components/hamburger_icon`
from `@lib` (which is a shortcut to the [zKit](https://zuixjs.github.io/zkit/1.0/) components collection server).

So, `zuix-app-3` includes the `layout/header` from the `zuix-app-1` host, that also loads the *hamburger_icon* component
from `zuixjs.github.io/zkit`.

This means that if the `layout/header` is modified on the host `zuix-app-1` it will be automatically updated both on `zuix-app-2`
and `zuix-app-3`, but also means that whenever the `components/hamburger_icon` is updated on *zuixjs.github.io/zkit*, it
will be seamlessly and instantly updated on all examples hosted on *Glitch*!

![What?!@#?](https://media.giphy.com/media/glmRyiSI3v5E4/giphy.gif)

So, using an unique reference to components has obvious advantages both for productivity and creativity, either when
they're hosted on the same server or over a bunch of different ones.


## Lovely, but...

In order to make this work without issues we must guarantee 100% backward compatibility whenever a distributed component
is updated. If this is not possible, then a new path must be assigned to the updated component.

Also, we must consider that downloading resources from multiple hosts of uncertain reliability can sometimes compromise
performance especially in presence of network issues. That's an old lesson already taught by the use of *CDNs*.

So when performance is a real concern about your application, a different strategy can be adopted and this consists of
downloading all the employed resources and packing them into a single local file.

But before you start to think I'm going to talk about build systems, package managers, web packers and such, I want to
reassure you that it is not.

Well, that would also be an option, but if we don't want yet to deal with those build tools, by just using *zUIx.js* we
can generate the application bundle directly in the browser console.

![Impossible](https://media.giphy.com/media/xTiTntReleqBnhBNwQ/giphy.gif)

That's what I call **in-browser bundling** (or client-side bundling), but I'll be writing about this later.
