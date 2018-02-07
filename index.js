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

// Splash Screen
zuix.$.find('header').hide();
zuix.field('main').hide();
//zuix.load('ui/controls/scroll_helper', { view: document.body });
zuix.field('cover').animateCss(function () {
    setTimeout(function () {
        zuix.$.find('header').show()
            .animateCss('fadeInDown', { delay: '0.25s', duration: '0.75s' });
        zuix.field('main').show()
            .animateCss('fadeInUpBig', { delay: '0s', duration: '1.00s' }, function () {
                zuix.field('cover').hide();
            });
    }, 500);
});

// Content loading options
var content_no_css = {
    css: false
};
var bootTimeout = null, updateHeaderTimeout = null;
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
        var currentOffset = 0;
        zuix.field('main')
            .on('scroll', function (e) {
                var scrollTop = zuix.field('main').get().scrollTop;
                if (menuButtonShowing && currentOffset < scrollTop) {
                    menuButtonShowing = false;
                    menuButton.animateCss('fadeOutDown', function () {
                        this.hide();
                    });
                } else if (!menuButtonShowing && currentOffset > scrollTop) {
                    menuButtonShowing = true;
                    menuButton.animateCss('fadeInUp', function () {
                    }).show();
                }
                currentOffset = scrollTop;
                if (menuOverlayShowing) {
                    toggleMenu();
                }

                if (updateHeaderTimeout != null) {
                    clearTimeout(updateHeaderTimeout);
                }
                updateHeaderTimeout = setTimeout(updateHeaderTitle, 10);
            });
        headingTitles = zuix.field('main').find('h3');
        setTimeout(function () {
            menuButton.animateCss('slideInUp').show();
            routeCurrentUrl(window.location.hash);
        }, 1000);
    }, 1000);
});

var currentIndex = -1;
var headerLogo = zuix.field('header_logo');
var headerTitle = zuix.field('header_title').hide();
var headingTitles;
function updateHeaderTitle() {
    for (var i = 0; i < headingTitles.length()-1; i++) {
        var currentHeader = headingTitles.eq(i);
        var nextHeader = headingTitles.eq(i+1);
        var chPosition = currentHeader.position();
        var nhPosition = nextHeader.position();
        if (i !== currentIndex && chPosition.y < 0 && nhPosition.y >= window.innerHeight/2) {
            currentIndex = i;
            currentHeader.animateCss('fadeOutUp', function () {
                this.visibility('hidden');
            });
            headerLogo.animateCss('fadeOutDown', function () {
                headerLogo.hide();
            });
            headerTitle.html(currentHeader.html())
                .animateCss('fadeInDown')
                .show();
        } else if (i !== currentIndex && chPosition.y < 60 && nhPosition.y >= window.innerHeight/2) {
            currentIndex = i;
            currentHeader.animateCss('fadeOutUp', function () {
                this.visibility('hidden');
            });
            headerLogo.animateCss('fadeOutUp', function () {
                headerLogo.hide();
            });
            headerTitle.html(currentHeader.html())
                .animateCss('fadeInUp')
                .show();
        } else if (currentIndex === i && chPosition.y >= 60) {
            currentIndex = -1;
            headerTitle.animateCss('fadeOutDown', function () {
                this.hide();
            });
            headerLogo.animateCss('fadeInDown').show();
            currentHeader.animateCss('slideInDown', function () {
            }).visibility('');
        } else if (currentIndex === i && nhPosition.y < window.innerHeight/2) {
            currentIndex = -1;
            headerTitle.animateCss('fadeOutUp', function () {
                this.hide();
            });
            headerLogo.animateCss('fadeInUp').show();
            currentHeader.animateCss('fadeIn', function () {
            }).visibility('');
        } else if (i !== currentIndex && currentHeader.visibility() === 'hidden') {
            currentHeader.visibility('');
        }
    }

}

var menuOverlayShowing = false, menuButtonShowing = true;
var menuButton = zuix.field('menu_button').hide()
    .on('click', toggleMenu);
var menuButtonClose = zuix.field('menu_button_close').hide()
    .on('click', toggleMenu);
var menuOverlay = zuix.field('menu_overlay').visibility('hidden')
    .on('click', toggleMenu);
var menuItems = menuOverlay.find('a');
function toggleMenu() {
    if (!menuOverlayShowing) {
        menuOverlayShowing = true;
        menuButton.animateCss('rubberBand', { duration: '0.3s' });
        menuButtonClose.animateCss('rotateIn', { duration: '0.3s' }, function () {
            menuButton.hide();
        }).show();
        menuOverlay.animateCss('fadeIn', { duration: '0.5s' }).visibility('');
        menuItems.each(function(p,el) {
            this.animateCss('bounceInUp', { duration: '0.3s' });
        });
    } else if (menuOverlayShowing) {
        menuOverlayShowing = false;
        if (menuButtonShowing) {
            menuButtonClose.animateCss('rotateOut', { duration: '0.3s' }, function () {
                this.hide();
            });
            menuButton.animateCss('fadeIn', { duration: '0.3s' });
        } else {
            menuButtonClose.animateCss('fadeOutDown', { duration: '0.3s' }, function () {
                this.hide();
            });
        }
        menuOverlay.animateCss('fadeOut', { duration: '0.5s' }, function () {
            this.visibility('hidden');
        });
        menuItems.each(function(p,el) {
            this.animateCss('bounceOutDown', { duration: '0.3s' });
        });
        menuButton.show();
    }
}

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
//window.onhashchange = function () {
//    routeCurrentUrl(window.location.hash);
//};
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