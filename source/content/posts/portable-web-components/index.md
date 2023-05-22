---
layout: basic.liquid
options: highlight ext-links
tags: posts
group: posts
order: 21
coverPreview: /content/posts/images/creativity_free_from_chains-preview.jpg
coverImage: /content/posts/images/creativity_free_from_chains.jpg
coverCopy:
title: Authoring reusable and portable Web Components
description: Common pitfalls and tips about creating reusable and portable Web Components.
author: Gene
pubDate: 2023-05-19
keywords:
- blog
- post
---

When a [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) can be considered reusable and portable?

The term **reusable** implies that such component can be reused in multiple websites or applications without
creating any copy of it; hence we are just fetching the component resources at their origin and adding them
directly to the page or to a bundle.

The term **portable** implies that such a component is not tied to any particular framework or technology other
than the web platform itself, as far as possible.

As an example, I'll start with a fully working component and describe how it has been implemented.

The component is a **Playground** for creating *Web Components*, and it features:
- embedded `.html` / `.css` / `.js` files editor
- parsing and runtime error reporting
- a live preview of the edited component
- option to download the edited component as a zip archive containing the view, style, and controller files that can be
then dynamically imported into any page

You can see it in action here &gt;&gt; [⚽ Playground](https://zuixjs.github.io/zkit/content/components/zx-playground/)

But before that, let's see a brief list of the challenges behind such an implementation. 

## A component is reusable and portable when:

- it can be added to any page by just importing a *module* (dynamically as well)
- does not require the developer to install additional files or dependencies other than the imported module
- it won't mess up with existing page styles and can optionally inherit them selectively
- it offers a standard way for interoperating with other components and scripts
- should let the developer provide an alternative HTML-static presentation where JavaScript is disabled
- does not add any complexity, like additional scripts for implementing a certain functionality, unless the user accesses
  that particular functionality (fine-grained resource allocation)
- component files and related resources must not require any server-side code to function; otherwise, it won't be that portable <sup>(*)</sup>

and also, preferably:

- does not load any resources (e.g. styles, images) and does not start any script or inner components until the user visualize
  the component itself
- should not force the developer to learn and adopt additional abstractions or dialects that are not
  strictly required and that could be implemented anyway with the standard Web APIs in a more performant way


{% unpre %}
```html
<div style="padding-left:12px;padding-right:12px">
    <small>
        <strong>(*)</strong>
        If the component requires a backend (e.g., a login form) it can just implement a generic API that can be then
        provided by any server technology / backend / transport, though it should not be using any server-side functionality at all
        if the required functionality can be implemented otherwise on the client-side (e.g., the download <em>zip archive</em>
        feature of the <em>Playground</em> component described later).<br>
        This approach, besides reducing network traffic, also naturally preserves users privacy by keeping
        the information exchange between the user's client and online servers to a minimum.
    </small>
</div>
```
{% endunpre %}


## How can all of this be achieved?

Well, I'd like to say that the state of the art of web technologies is that the web is already designed for this,
but that's not the case, and there are still some features lacking on the web platform.  

Standards proceed very slowly, it's a delicate matter that takes time, but in the meantime, the web development scene
got overwhelmed with bundlers, package managers, and frameworks with fancy and sometimes scary abstractions, not to mention
continuous breaking changes that do not certainly make a developer happy.

Anyway, back to the missing web features, just to mention some, though it's already possible to dynamically import
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) modules and
[CSS](https://web.dev/css-module-scripts/) files (not for all browsers), it's not yet possible to
**load a document fragment or template from a `.html` file**.  

So the  `CSS` and `HTML` code must be generated from the Web Component class too, or as a [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) in the
same HTML document hosting the component.

In my opinion, this is kind of a limitation if we think of a reusable component, since all reusable parts get mixed
with other elements. 

We can get around these limitations using some utility libraries; there are a few, and here I am using a library I wrote that,
among other things, can dynamically load the component view and style from separate files (`.html`, `.css`),
though it's not the library that's the focus of this article but rather the common pitfalls a developer might encounter in writing a
portable component.


## Implementation

So, let's now discover how this can be implemented, using as an example the web components' *Playground*
described at the beginning of this article.

The first implementation step is to determine what resources the component requires in order to implement
its functionality. With "resources", I mean any additional scripts, libraries, modules, or styles.

Some of these resources will be required to be available *before the component starts* its main business logic;
otherwise, there might be runtime errors due to premature access to objects that are not instantiated yet.
I'll call these **core resources**.

Specifically, the *Playground* component requires the following before it can start:

  - [Monaco Editor](https://microsoft.github.io/monaco-editor/)  
    The code editor used for inline editing of HTML / CSS / JS
  - [zx-context.module.js](https://zuixjs.org/js/zuix/zx-context.module.js)  
    A custom element that can dynamically load and unload components and
    that is used to preview in real-time the edited component
  - [Material Design Lite](https://getmdl.io/) (inherited)  
    Material Design button and menu modules, just to have some nice UI elements   


### Loading core resources

The web platform already offers a way for dynamically loading ES modules via the
[dynamic import(..)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import),
so we can use that for loading the MDL button, MDL menu, and the *zx-context* modules.

But there's no web API for loading regular scripts or libraries other than using the `<script src=".."></script>` tag,
which can also be implemented programmatically. There are plenty of articles about that, but here
I'll be adopting the [`zuix.using(..)`](https://zuixjs.org/pages/documentation/api/zuix/Zuix/#using) utility method that was implemented to get around this issue.

This method, besides regular scripts, can also dynamically load styles and singleton components, and it has a built-in caching
mechanism.

In the *Playground*, this is used for *Monaco Editor* (I was not able to load it with a dynamic import) and with
two other libraries that are not available as ES modules.

### Synchronization and interoperability

Since components and resources are loaded asynchronously, some additional checks must be implemented to ensure that a
component is ready before we can get a reference to its element and also use any public method or property that the
underlying class implements.


So, in the case of a vanilla JS implementation, the component class can be implemented in a `.js` module along
with the HTML and CSS code:


**File: test-component.js** (pseudo-code)
```js
class TestComponent extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'closed'});
    // component implementation ..
    // ...
    // add component style and view
    shadow.appendChild(style);
    shadow.appendChild(view);
    //...
  }

  testMethod() {
    // ...
  }
  
  //...
}

function loadCoreResources() {
  return new Promise((resolve) => {

    // dynamic imports ...
    // ... then ... then ...
    resolve();

  });
}

loadCoreResources().then(() => {
  // all core resources have been loaded, finally
  // define custom element associated to this component
  customElements
    .define('test-component', TestComponent);
});
```

Of course, when loading core resources, all paths must be absolute in order to ensure that the component is also *reusable*
and thus loadable from any server other than the one hosting the component itself.

So, the component's module above takes care of loading all *core resources* before [defining the custom element](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
associated with its class, and on the other end, the consumer can use the `customElements.whenDefined` method to ensure the component
is ready before accessing any of its functionality:

```html
<!-- the module is loaded asynchronously -->
<script async src="test-component.js" type="module"></script>

<!-- the custom element of the component -->
<test-component id="my-component"></test-component>

<script>
    // ensure component is ready before using it
    async function start() {
        const wc = document.querySelector('#my-component')
//        wc.testMethod(); // <-- this would throw an exception
        // ...the component module and its core resources
        // get asynchronously imported at some point...
        await customElements.whenDefined('test-component');
        // Component is ready and can be safely used now
        wc.testMethod();
    }
    start();
</script>
```

**A brief note on actual implementation**

In the actual implementation of the *Playground*, which makes use of *zuix.js*, the component extends
[`ControllerInstance`](https://zuixjs.org/pages/documentation/controller/#Implementation), a base class that implements
common lifecycle patterns of a component.

In particular, inside the [`onInit`](https://zuixjs.org/pages/documentation/controller/#onInit) lifecycle callback, it overrides
the [`ready`](https://zuixjs.org/pages/documentation/active_refresh/#default_ready_handler) handler and uses a state variable
to signal when all core resources have been loaded.

**File: zx-playground.js** (excerpt)
```js
class ZxPlayground extends ControllerInstance {
 
  // ...
 
  onInit() {
    
    // this state variable is decremented
    // after each core resource has been loaded
    this.waitingResources = 2;

    // override the default "ready" handler in order to wait for
    // resources to be loaded before starting the component
    this.declare('ready', () => this.waitingResources === 0);

    //...
  }

  // ...
}
```

Nothing else has to be done, and the consumer can then use the `zuix.context(..)` method
from JS code or the `z-using` attribute in the HTML code in order to guarantee safe and automatic
synchronization of interoperating components.

For instance, consider the case where we have a Material Design button that, when clicked, opens up a
[Context Menu](https://zuixjs.github.io/zkit/content/components/context-menu/) component. Both components are loaded asynchronously.

```html
<main z-using="my-menu">

  <mdl-button (click)="myMenu.show()">
    Open menu
  </mdl-button>

</main>

<context-menu z-context="my-menu">
  
  <template #menu>
    <button>Option 1</button>
    <button>Option 2</button>
    <button>Option 3</button>
  </template>
  
</context-menu>
```

The `z-using` attribute will create a new scripting context out of a simple HTML tag in the page (the `main` tag in this case,
but it could have been a simple `div` also).

So the button `(click)` event handler code (as for any script eventually defined inside that context) will not be executed
until the `my-menu` component is ready.

Furthermore, any component specified inside the `z-using` tag is automatically available as a variable in that
scripting context, with the name converted to [Camel case](https://en.wikipedia.org/wiki/Camel_case) (so `my-menu` becomes `myMenu`):


<p class="codepen" data-height="421" data-theme-id="dark" data-default-tab="result" data-slug-hash="RwQepbV" data-user="genielabs" style="height: 421px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/genielabs/pen/RwQepbV">
  Gesture Helper</a> by g-labs (<a href="https://codepen.io/genielabs">@genielabs</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


As shown in the example above, there's no need to implement any "`then`" logic to determine when all components are ready.

With this approach, nearly anything on the page could be loaded asynchronously without worrying
about synchronization between components. **It's all automagic**.

And this is really something I would also like to see implemented in the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
some day. Scripts that run only in a given context (I called these, maybe improperly, ["scoped scripts"](https://zuixjs.org/pages/documentation/active_refresh/#scoped_scripts)),
and a mechanism to synchronize and use components without writing any code other than 
simple handlers.

<!--
{% unpre %}
```html
<std-playground id="test"></std-playground>

<script async src="./examples/test.module.js" type="module"></script>
<script>
    async function start() {
        const wc = document.querySelector('#test')
//        wc.testMethod(); // <-- this would throw an exception
        // the component module gets dynamically
        // imported at some point...
        await customElements.whenDefined('std-playground');
        // component is ready and can be safely used now
        wc.testMethod();
    }
    start();
</script>
```
{% endunpre %}
-->


### Deferred resource loading

Besides the *core resources*, a component might require other resources to be loaded at some point when the user accesses
certain functionality.

Following this design pattern, we are ensuring that unnecessary data and resources do not weigh on the initial component
payload. A service worker can eventually be employed to prefetch and cache all other component files in the background.

The *Playground* component also requires the following additional resources:

- When a runtime error occurs in the edited component
  - [ErrorStackParser](https://www.stacktracejs.com/#!/docs/error-stack-parser)

- When the user clicks on the "download" option
  - [JSZip](https://stuk.github.io/jszip/)
  - Blob saver (shipped with *zuix.js bundler*)


We can use *dynamic import* and the *zuix.using(..)* methods like before, but in this case only when that particular
functionality is being used for the first time.

So, when an error occurs, the following method will be called:

**File: zx-playground.js** (excerpt)
```js
setError(err) {
  zuix.using('script', `https://cdn.jsdelivr.net/npm/error-stack-parser@2.1.4/dist/error-stack-parser.min.js`, () => {
    const frames = self.ErrorStackParser.parse(err);
    const errorFrame = frames[0]; // <-- TODO: find by 'fileName'
    errorFrame.lineNumber -= 2; // adjust source line
    // set error
    const error = {
      startLineNumber: errorFrame.lineNumber,
      startColumn: errorFrame.columnNumber,
      endLineNumber: errorFrame.lineNumber,
      endColumn: errorFrame.columnNumber,
      message: err.message,
      severity: monaco.MarkerSeverity.Error
    };
    const model = this._editorJs.getModel();
    monaco.editor.setModelMarkers(model, 'service', [error]);
    // check for other errors (view scripting scope)
    this.checkErrors();
  });
}
```

and when the user clicks on the *download* option, the following code is used to zip the component files and then save
the resulting archive to the client. This all will happen on the client side; **no server-side code** is used.

**File: zx-playground.js** (excerpt)
```js
zuix.using('script', '@cdnjs/jszip/3.10.1/jszip.min.js', () => {
  const zip = new JSZip();
  zip.file(`${componentName}.html`, this.componentData.html);
  zip.file(`${componentName}.css`, this.componentData.css);
  zip.file(`${componentName}.js`, this.componentData.js);
  // ...
  zip.generateAsync({type: 'blob'})
    .then((content) => {
      zuix.using('script', 'https://zuixjs.github.io/zuix/js/zuix-bundler.min.js', () => {
        zuix.saveBlob(content, `${componentName}.zip`);
      });
    });
});
```

Even if it's not implemented in this example, a state variable could be employed to provide visual feedback
and let the user know that a resource is being downloaded.
Anyway, if a service worker already cached those files, this might not be necessary at all.


## Final considerations

So, today, the Web Platform almost offers all it takes to implement a reusable and portable web component,
maybe sometimes with the help of some library that brings some particular functionality the component requires,
rather than a whole framework of which it will be using only 1% of the features.  
In most cases, it can be done without any framework, bundler, or package manager.

<!--
And this is also the path to a free web and to freeing us developers and users from the chains of proprietary technologies that only add
complexity and aim to captivate developers with courses, seminars, and social media brainwashing, and all of this
is not always because they want a better web. Some of them only want to create and grow their business and dominance,
even if their product offers no real value other than for their own pockets.
-->

Therefore, it is advisable to first check if a component can be implemented without requiring the adoption of any
third-party technology that might make a project less reusable and cause a waste of time and effort.


With this in mind, I also created [zKit](https://zuixjs.github.io/zkit/), which has been around for 7 years and never
had a single breaking change, while in the meantime I've also been using frameworks for other projects.  
And in my experience using these frameworks, I can say it's not a good time at all whenever you have to upgrade dependencies because of
"security vulnerabilities" (which mainly affect the development dependencies) and because of ongoing framework breaking
changes that force a developer to rewrite many parts of the code when some dependencies are not upgradable to the
latest framework version.


Of course, this is just my two pence worth about reusable and portable web components, and I'm just a developer like
many others who hope for a better web.

Happy reusable and portable web component authoring =)

[Try out the ⚽ Playground component](https://zuixjs.github.io/zkit/content/components/zx-playground/)

<!--

## Playground component in action




{% capture example -%}
<script async type="module">
  import "https://zuixjs.github.io/zkit/lib/1.2/components/zx-playground.module.js";
</script>
<zx-playground :menu-items="[
  {link: '#https://zuixjs.org/app/examples/new-component', description: 'Hello World'},
  {link: '#https://zuixjs.org/app/widgets/analog-clock', description: 'Analog Clock'}
]"></zx-playground>
{% endcapture %}

```html
{{ example }}
```

### Result

{{ example }}

-->
