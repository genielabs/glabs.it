---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 10
coverPreview: /content/posts/images/client-side-html-css-preprocessing.jpg
coverImage: /assets/mirror/thepracticaldev.s3.amazonaws.com/i/8e2qhxdctwm3bnb73z1z.jpg
coverCopy:
title: Client-side HTML/CSS pre-processing
description: Using zuix.js global hooks to process content in a detached state.
author: Gene
pubDate: 2018-08-07
keywords:
- blog
- post
---

{% include 'fragments/zuixjs-deprecated-content-notice.html' %}

Client-side *pre-processing* is intended as the task of *transforming* some content or style file before it is actually
added to the [DOM](https://www.w3schools.com/js/js_htmldom.asp).

There are various scenarios where this "transformation" practice can be useful, just to mention some common uses:

- converting [MarkDown](https://www.markdownguide.org/basic-syntax) text to HTML
- replacing *Curly Braces* (template variables) with matching variable value
- compiling [SCSS, LESS or Stylus](https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus)  
  enhanced styles to standard CSS

In this post I'll describe how to achieve this kind of processing on the *client-side*, even though this can also be done
with a server-side script or with build tools.

I'll be using the `zuix.js` library as a support tool for this example, but the concept and the approach described here
should be almost the same using any other utility library, framework or VanillaJS.

## Implementation steps

1. The first step is downloading the raw (unprocessed) resource.
2. Then we can process and transform the raw data.
3. Finally the result can be added to the DOM.

These steps can be implemented with VanillaJS by making an AJAX request, the old way, or by using the modern `fetch` method.

```js
// 1) Download
fetch('//some.host/some/url', {
  method: 'get'
}).then(function(rawData) {
  // 2) pre-process
  let content = preProcess(rawData);
  // 3) attach to DOM 
  const el = document.createElement('div');
  el.innerHTML = processedContent;
  container.appendChild(el);
});
```

See [David Walsh](https://davidwalsh.name/fetch) blog for further info on the *AJAX/fetch* topic.

But in component-based development we will instead take advantage of *Life-Cycle* event handlers and specifically of
*Global Hooks*.

## Global hooks

In the following example the main `index.html` file includes some content using the `data-ui-include` attribute.

**index.html (snippet)**
```html
<!-- Content View 1 -->
<div data-ui-include="content/lorem_ipsum_1"></div>
<!-- Content View 2 -->
<div data-ui-include="content/lorem_ipsum_2"></div>
<!-- Content View 3 -->
<div data-ui-include="content/lorem_ipsum_3"></div>
```

The `data-ui-include` attribute instructs *zuix* to load the following files:

```javascript
/* View 1 */
./content/lorem_ipsum_1.html
./content/lorem_ipsum_1.css
/* View 2 */
./content/lorem_ipsum_2.html
./content/lorem_ipsum_2.css
/* View 3 */
./content/lorem_ipsum_3.html
./content/lorem_ipsum_3.css
```

These *.html* files contain *MarkDown* text and a few template variables, while the *.css* files are using *LESS* syntax.

After loading each *.html* file, *zuix* will trigger the `html:parse` global hook handler, while for each *.css* file it
will trigger the `css:parse` handler.

Just for reference, this is the list of life-cycle steps that take place whenever a content (`data-ui-include`) or a
component (`data-ui-load`) is being loaded:

```javascript
GLOBAL HOOKS
Content/Component loading life-cycle
  // detached state
  ↓ HTML file loaded
    ⚡ 'html:parse'
  ↓ CSS file loaded
    ⚡ 'css:parse'
  // attached state
  ↓ Model to View
    ⚡ 'view:process'
  ↓ Controller setup
    ⚡ 'component:ready'
```

So, briefly, pre-processing with *zuix* is just a matter of registering two hook handlers:

```javascript
zuix.hook('html:parse', function(data) {

  // TODO: process and replace 'data.content'

}).hook('css:parse', function(data) {

  // TODO: process and replace 'data.content'

});
```

and for the purpose the actual code is using

- [ShowDown](http://showdownjs.com/) - MarkDown to HTML converter
- `zuix.$.replaceBraces` method for basic template variables
- [LESS](http://lesscss.org/) - CSS, with just a little more

as shown in the `index.js` file below:

```js
const fields = {
  'title': 'Quam magna gratus',
  'subtitle': 'Haberent obstat animi non sine vestigia tristis',
  'disclaimer': 'Random text generated with Lorem Markdownum.',
  'copyright': '&copy; Mickey Mouse and Associates'
};
zuix.hook('html:parse', function(data) {

  // Replace {{braces}} fields
  const parsed = zuix.$.replaceBraces(data.content, function(name) {
    // remove braces from '{{name}}'
    name = name.replace(/([{}])/g, '');
    // lookup value in `strings` object
    if (fields[name] != null) {
      return fields[name];
    }
  });
  if (parsed != null) data.content = parsed;

  // ShowDown - Markdown compiler
  data.content = new showdown.Converter().makeHtml(data.content);

}).hook('css:parse', function(data) {
  
  less.render(data.content, function(err, out) {
    data.content = out.css;
  });
  
});
```

You can see the working example and browse its source code below:

{% zx 'glitch' 'zuix-hooks-1' 'app' %}{% endzx %}

In this example any included content will be always subject to pre-processing, but most of times it's preferable to
explicitly set an option to trigger pre-processing.
In this case we can use the `data-ui-option` attribute and pass to it an object containing all desired flags.

**index.html (snippet)**
```html
<!-- Only the first include will be processed -->
<div data-ui-include="content/lorem_ipsum_1"
     data-ui-options="options.process"></div>
<div data-ui-include="content/lorem_ipsum_2"></div>
<div data-ui-include="content/lorem_ipsum_3"></div>
``` 

This is the modified version of **index.js** file

```javascript
window.options = {
  process: {
    markdown: true,
    fields: {
      'title': 'Quam magna gratus',
      'subtitle': 'Haberent obstat animi non sine vestigia tristis',
      'disclaimer': 'Random text generated with Lorem Markdownum.',
      'copyright': '&copy; Mickey Mouse and Associates'
    },
    less: true
  }
};
zuix.hook('html:parse', function(data) {
  
  const fields = this.options().fields;
  if (fields != null) {
    // Replace {{braces}} fields
    const parsed = zuix.$.replaceBraces(data.content, function(name) {
      // remove braces from '{{name}}'
      name = name.replace(/([{}])/g, '');
      // lookup value in `fields` object
      if (fields[name] != null) {
        return fields[name];
      }
    });
    if (parsed != null) data.content = parsed;
  }

  if (this.options().markdown) {
    // ShowDown - Markdown compiler
    data.content = new showdown.Converter().makeHtml(data.content);
  }

}).hook('css:parse', function(data) {
  
  if (this.options().less) {
    less.render(data.content, function(err, out) {
      data.content = out.css;
    });
  }
  
});
```

So, that's all for now. Time to go outside and get some fresh air =)
