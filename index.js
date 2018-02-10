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

// Animate CSS extension method for ZxQuery
zuix.$.ZxQuery.prototype.animateCss = function() {};
zuix.using('component', 'https://genielabs.github.io/zuix/ui/utils/animate_css', function(res, ctx){
    console.log("AnimateCSS extension loaded.", res, ctx);
});

// Startup
var bootTimeout = null;
zuix.hook('view:process', function(){
    // Force opening of all non-local links to a new window
    zuix.$('a[href*="://"]').attr('rel','noopener');
}).hook('load:end', function () {
    // Initial resource loading completed...
    if (bootTimeout != null) {
        clearTimeout(bootTimeout);
    }
    // Wait some more for other lazy resources to load
    bootTimeout = setTimeout(function () {
        // Website boot completed
        console.log('Website boot complete.');
        setTimeout(function () {
            routeCurrentUrl(window.location.hash);
        }, 1000);
    }, 1000);
});

// Hide content behind splash screen
zuix.$.find('header').hide();
//zuix.load('ui/controls/scroll_helper', { view: document.body });
// Load 'Headings Roller' plugin
zuix.load('ui/controls/headings_roller', {
    view: zuix.field('main').hide(),
    tag: 'h3',
    logo: 'header_logo',
    title: 'header_title'
});

// URL routing
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

// Utility methods
function scrollToAnchor(pageAnchor) {
    var p = zuix.field('main');
    if (pageAnchor !== null) {
        var a = p.find('a[id=' + pageAnchor+']');
        if (a.length() > 0) {
            setTimeout(function () {
                zuix.$.scrollTo(p.get(), a.position().y, 750);
            }, 200);
        }
    } else zuix.$.scrollTo(p.get(), -p.get().scrollTop, 500);
}
function contact() {
    document.location.href = ('ma'+'il'+'to:info'+'@'+'glabs.it');
}