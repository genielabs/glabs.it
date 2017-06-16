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
zuix.$.ZxQuery.prototype.animateCss  = function (animationName, param1, param2) {
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
};
// Splash Screen
zuix.field('main').hide();
var mainHeader = zuix.$.find('header').hide();
mainHeader.find('.header-logo').on('click', function() {
    location.href='https://github.com/genielabs';
});
zuix.$('body').css('overflow', 'hidden');
zuix.field('cover').find('.motto').animateCss(function () {
    zuix.field('cover').hide();
    mainHeader.show().animateCss('fadeInDown', { delay: '0.0s', duration: '.3s' });
    zuix.$('body').css('overflow', 'auto');
    zuix.field('main')
        .show();
    zuix.componentize();
});
//zuix.load('ui/controls/scroll_helper', { view: document.body });


// Content loading options
var content_no_css = {
    css: false
};

// ZUIX hooks
zuix.hook('view:process', function(){
    // Force opening of all non-local links in a new window
    zuix.$('a[href*="://"]').attr('target','_blank');
}).hook('component:ready', function (view) {
    console.log('component ready', this);
    // fade in effect apploed to every component once
    // its view is created
    if (view.get() !== document.body) {
        view.animateCss('fadeInUpBig', {duration: '1.0s'});
        // Google's Material Design Light
        if (componentHandler)
            componentHandler.upgradeElements(view.get());
    }
}).hook('load:end', function () {
    //zuix.lazyLoad(false).componentize();
});