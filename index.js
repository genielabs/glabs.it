/**
 *

 http://glabs.it
 Copyright (C) 2017 Generoso Martello

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 *
 */

/**
 * Extension function ZUIX+AnimateCSS
 * @param animationName
 * @param [param1] optional animation options or animation-end callback
 * @param [param2] optional animation-end callback when passed param1 is animation options object
 * @return {ZxQuery}
 */
zuix.$.ZxQuery.prototype.animateCss  = animateCss;

// Content loading default options
var content_no_css = {
    css: false
};
// Animated splash-cover load options
var cover_load_options = {
    priority: 1,
    ready: function(ctx) {
        // Start the cover animation
        zuix.field('cover').animateCss(function () {
            // Animation ended, hide cover, show header and content
            zuix.field('splash-cover').removeClass('splash-cover');
            zuix.$.find('header').show()
                .animateCss('fadeInDown', { delay: '0.50s', duration: '1.00s' });
            zuix.field('main').show()
                .animateCss('fadeInUpBig', { delay: '0.0s', duration: '1.50s' }, function () {
                    zuix.field('splash-cover').hide();
                });
        });
    }
};
var bootTimeout = null;
// ZUIX hooks
zuix.hook('view:process', function(){
    // Force opening of all non-local links to a new window
    zuix.$('a[href*="://"]').attr('target','_blank');
}).hook('component:ready', function (view) {
    console.log('component ready', this);
}).hook('load:end', function () {
    // Initial resource loading completed...
    if (bootTimeout != null) {
        clearTimeout(bootTimeout);
    }
    bootTimeout = setTimeout(function () {
        console.log("Boot completed!");
        setTimeout(function () {
            routeCurrentUrl(window.location.hash);
        }, 1000);
    }, 1000);
});

// Hide content behind splash screen
zuix.$.find('header').hide();
//zuix.load('ui/controls/scroll_helper', { view: document.body });
zuix.load('ui/controls/headings_roller', {
    view: zuix.field('main').hide(),
    tag: 'h3',
    logo: 'header_logo',
    title: 'header_title'
});

// TODO: update ZUIX component library to use this code
function animateCss(animationName, param1, param2) {
    var callback, options;

    if (typeof param2 === 'function') {
        options = param1;
        callback = param2;
    } else if (typeof param1 === 'function') {
        callback = param1;
    }
    if (typeof animationName !== 'string') {
        if (typeof animationName === 'function') {
            callback = animationName;
        } else {
            options = animationName;
        }
        animationName = '';
    } else options = param1;

    // TODO: should run all the following code for each element in the ZxQuery selection

    var prefixes = ['-webkit', '-moz', '-o', '-ms'];
    for (var key in options)
        for (var p in prefixes)
            this.css(prefixes[p] + '-animation-' + key, options[key]);
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var _t = this;

    // stops any previously running animation
    if (this.hasClass('animated')) {
        this.css('transition', ''); // TODO: <-- is this really needed?
        this.trigger('animationend');
    }
    this.addClass('animated ' + animationName);
    // add event listener for animation end
    this.one(animationEnd, function () {
        if (animationName !== '') {
            this.removeClass('animated ' + animationName);
        }
        for(var key in options)
            for (var p in prefixes)
                _t.css(prefixes[p] + '-animation-' + key, '');
        if (typeof callback === 'function')
            callback.call(_t, animationName);
    });

    return this;
}

function contact() {
    document.location.href = ('ma'+'il'+'to:info'+'@'+'glabs.it');
}

// url routing
window.onhashchange = function () {
    routeCurrentUrl(window.location.hash);
};
function routeCurrentUrl(path) {
    // check if pagedView is loaded
    var anchorIndex = path.lastIndexOf('#');
    var pageAnchor = null;
    if (anchorIndex > 0) {
        pageAnchor = path.substring(anchorIndex + 1);
        path = path.substring(0, anchorIndex);
    }
    switch (path) {
        // TODO: not used
        case '':
        case '#/':
            break;
    }
    scrollToAnchor(pageAnchor);
}

function scrollToAnchor(pageAnchor) {
    var p = zuix.field('main');
    if (pageAnchor !== null) {
        var a = p.find('a[id=' + pageAnchor+']');
        if (a.length() > 0) {
            setTimeout(function () {
                zuix.$.scrollTo(p.get(), a.position().y, 750);
            }, 200);
        }
    } //else p.get().scrollTop = 0;
}