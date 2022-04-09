---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 0
title: the open source factory
description: About this web starter and how to get started with it.
keywords:
- genielabs
- home
- 
---

<div layout="row center-center">
  <blockquote>
    If you don't program yourself, <del>others</del> life will program you.
  </blockquote>
</div>

# Works

I started programming when I was twelve. At first, it was about typing code from magazines into
the *home computer* screen to play some very pixelated 8bit game, later, as I started to learn,
it became for me a way of expressing myself, my visions, my dreams.

Programming is art.

Writing software to me is like writing a novel, a book that maybe someone will
read and get inspired from. For some others it will be of help for their job or personal work or maybe
it will simplify little things in everyday life.

The following are some of my latest works.

## Web development

{% layout 'rows sm-column center-left' %}
  {% assign webWorks = collections.web | sort: 'data.order' %}
  {% include 'fragments/works-list' data: work.data %}
  <div style="min-width: 288px; max-width: 288px; margin:12px">
    <div layout="column center-center">
      <a href="https://github.com/zuixjs" style="border-radius: 56px; background-color: rgba(180,180,180, 0.35); padding: 12px;"><img src="images/github-octocat.svg" width="88" height="88"></a>
      <div style="padding:24px">Tap the OctoCat to see more web development works.</div>
    </div>
  </div>
{% endlayout %}

## Software development

{% layout 'rows sm-column center-left' %}
  {% assign webWorks = collections.software | sort: 'data.order' %}
  {% include 'fragments/works-list' data: work.data %}
  <div style="min-width: 288px; max-width: 288px; margin:12px">
    <div layout="column center-center">
      <a href="https://github.com/genielabs" style="border-radius: 56px; background-color: rgba(180,180,180, 0.35); padding: 12px;"><img src="images/github-octocat.svg" width="88" height="88"></a>
      <div style="padding:24px">Tap the OctoCat to see more software development works.</div>
    </div>
  </div>
{% endlayout %}
