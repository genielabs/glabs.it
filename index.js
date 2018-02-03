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
zuix.$('body').css('overflow', 'hidden');
//zuix.load('ui/controls/scroll_helper', { view: document.body });
zuix.field('cover').animateCss(function () {
    setTimeout(function () {
        zuix.$.find('header').show()
            .animateCss('fadeInDown', { delay: '0.25s', duration: '0.75s' });
        zuix.field('main').show()
            .animateCss('fadeInUpBig', { delay: '0s', duration: '1.00s' }, function () {
                zuix.$('body').css('overflow', 'auto');
                zuix.field('cover').hide();
            });
    }, 500);
});

// Content loading options
var content_no_css = {
    css: false
};

// ZUIX hooks
zuix.hook('view:process', function(){
    // Force opening of all non-local links to top window
    zuix.$('a[href*="://"]').attr('target','_top');
}).hook('component:ready', function (view) {
    console.log('component ready', this);
}).hook('load:end', function () {
    // Initial resource loading completed...
});

function animateCss(animationName, param1, param2) {
    var callback, options;

    if (typeof param2 === 'function') {
        options = param1;
        callback = param2;
    } else {
        if (typeof param1 === 'function')
            callback = param1;
        else options = param1;
    }

    var prefixes = ['-webkit', '-moz', '-o', '-ms'];
    for (var key in options)
        for (var p in prefixes)
            this.css(prefixes[p] + '-animation-' + key, options[key]);
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var _t = this;

    if (typeof animationName !== 'function') {
        // stops any previously running animation
        if (this.hasClass('animated')) {
            this.css('transition', ''); // TODO: <-- is this really needed?
            this.trigger('animationend');
        }
        // TODO: should run all the following code for each element in the ZxQuery selection
        this.addClass('animated ' + animationName);
    } else callback = animationName;

    this.one(animationEnd, function () {
        this.removeClass('animated ' + animationName);
        for(var key in options)
            for (var p in prefixes)
                _t.css(prefixes[p] + '-animation-' + key, '');
        if (typeof callback === 'function')
            callback.call(_t, animationName);
    });
    return this;
}