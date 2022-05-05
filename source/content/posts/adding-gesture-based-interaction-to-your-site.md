---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/add-gesture-detection-cover.jpg
coverImage: https://thepracticaldev.s3.amazonaws.com/i/vfk4j4pk8jfn75vyj1e4.jpg
coverCopy: photo by John Schnobrich on Unsplash
title: Adding gesture-based interaction to your website
description: Gesture helper that can be used on any element to detect gestures over it.
author: Gene
pubDate: 2018-08-31
keywords:
- blog
- post
---

One of the common problems with desktop and mobile development is that, except for the 'click' event, mouse
events will not work on mobile and since they are touch-based devices, a different set of events must be used.

**Common mouse events**
- mousedown
- mousemove
- mouseup

**Common touch events**
- touchstart
- touchmove
- touchend

So, to implement custom interaction in a website that works both on desktop and mobile, it will require taking care of
both mouse and touch events.

And this can get even worse if we consider that the mouse and touch screen are not the only methods available for
interacting within the digital world.

Mouse, touch-screen, your hand, your eyes or your whole body could all be considered a possible interaction medium.

This is where the abstraction to a **gesture-based model** can come in handy and create a common way to interact with
user interfaces regardless of the device being used.

## The Gesture Helper

To add gesture interaction to a web page we will be using the [**gesture_helper**](https://zuixjs.github.io/zkit/docs/controllers/gesture_helper) component. This can be used on any HTML element to detect gestures over it.

**Recognized gestures**

- touch
- tap
- pan
- swipe
- release

Since this component is implemented using [**zuix.js**](https://zuixjs.org), first we need to include the library:

```html
<script src="https://cdn.jsdelivr.net/npm/zuix-dist@1.0.0/js/zuix.min.js"></script>
```

Next we can load the *gesture_helper* component over the element either by using just HTML (`data-ui-load` attribute)
or with JavaScript. Since JavaScript is required to handle the events anyway, let's load the component using the `zuix.load(..)` method:

**HTML element**
```html
<div data-ui-field="surface"></div>
```

**JavaScript**
```javascript
let surface = zuix.field('surface');
zuix.load('@lib/controllers/gesture_helper', {
  view: surface, // <- detect gestures over the given element
  on: {
    'gesture:touch': function(e, tp) {
      // handle gesture ...
    },
    'gesture:tap': function(e, tp) {
      // handle gesture ...
    },
    'gesture:pan': function(e, tp) {
      // handle gesture ...
    },
    'gesture:swipe': function(e, tp) {
      // handle gesture ...
    },
    'gesture:release': function(e, tp) {
      // handle gesture ...
    }
  }
});
```

With this little snippet of code, we are ready to handle gesture events over the element.
Each event will pass to the handler function (callback) a `tp` (touch pointer) object that contains a handful of data
that can be used to animate the target element:

```js
tp = {
  // time frame
  startTime,
  endTime,
  // initial touch position
  startX,
  startY,
  // relative movement
  shiftX,
  shiftY,
  // actual direction, speed, position
  direction, // 'left' | 'right' | 'up' | 'down'
  velocity, // pixels per milliseconds
  x: x,
  y: y,
  // guessed scrolling direction
  scrollIntent(),  // false | 'horizontal' | 'vertical'
  // original event + cancel method
  event,
  cancel()
};
```

You can see a full example in the codepen below:


<p class="codepen" data-height="421" data-theme-id="dark" data-default-tab="result" data-slug-hash="GXrRWv" data-user="genielabs" style="height: 421px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/genielabs/pen/GXrRWv">
  Gesture Helper</a> by g-labs (<a href="https://codepen.io/genielabs">@genielabs</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


In this example there are two instances of the `gesture_helper` being loaded.

The first one is loaded on the main surface, and it is used to detect *pan* gestures. Pan gesture is when you touch and
drag the pointer over the surface.

The second one is loaded on the ball object, and it is used to detect *touch* and *tap* gesture.
When the ball object is touched a `.touched` class is added to it. So the function that handles the *pan* gesture on the
surface will start shifting the ball if the `.touched` class is present on it. *Tapping* the ball will make it bounce.
Tap gesture is when you touch and then release right after.

### Conclusions

Yes I called this `gesture_helper` a "component", but to be accurate it is a **controller**.

The difference between a component and a controller, is that the first one also ships with its piece of user interface (the *HTML view*), while the latter it's a JavaScript code only component that can be loaded over any HTML element.

For this reason a controller can be considered as *framework-agnostic* (despite someone may not agree with this definition).
For example, you can use a *zuix.js* controller on a *React* or *Vue* component or a Bootstrap based website.

Another feature of *zuix.js* controllers is that you can load as many controllers as you want on the same element.
So not only can you add the `gesture_helper`, but you can also add a controller implementing some physics based reaction
or any other interaction logic (e.g. even simple things like validation of an input field).
You can bring elements to life without interferences on the UI side.
