---
layout: basic.liquid
options: highlight ext-links no-title
order: 0
title: Test
description: Test page
keywords:
- genielabs
- home
---
{% unpre %}
```html

<time-clock></time-clock>


<main layout="rows center-center">

  <!-- Card 1: load the card component directly from its CodePen url -->    
  <article z-load="card"
           z-on="cardEventsHandler" class="visible-on-ready"
           self="size-1of2 sm-full" layout="column stretch-center">
    <img #cover src="https://picsum.photos/seed/zuix.js-p2/320/200">
    <h1 #title>The spectacle was indeed sublime.</h1>
    <div #date>2018/09/10</div>
    <a #link href="#test/1">Read more</a>
  </article>

  <!-- Card 2: load the card component directly from its CodePen url -->    
  <article z-load="card"
           z-options="card_2" class="visible-on-ready"
           self="size-1of2 sm-full" layout="column stretch-center"></article>

</main>

<!-- the context menu is hosted on 
     https://zuixjs.github.io/zkit/ (@lib) -->
<div z-load="@lib/components/context-menu" z-context="ctx-menu">

  <div #menu>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
  </div>

</div>

<script>
    
</script>

<script type="module">
    import '{{ app.baseUrl }}js/zuix/zuix.module.js';

    // using a shared events handler for both `card_1` and `card_2`
    self.cardEventsHandler = {
        'item:menu': handleItemMenu,
        'item:open': handleItemOpen
    };

    // Card 2 options
    self.card_2 = {
        model: {
            id: 2,
            title: 'The quick brown fox jumped over the lazy dog.',
            date: '2018/09/13',
            cover: 'https://picsum.photos/seed/zuix.js-p1/320/200',
            link: '#test/2'
        },
        on: cardEventsHandler
    };

    function handleItemMenu(e, item) {
        zuix.context('ctx-menu').show();
    }
    function handleItemOpen(e, item) {
        alert('Should open this link: "'+(item.link.href ? item.link.href : item.link)+'"');
    }
</script>
```
{% endunpre %}
