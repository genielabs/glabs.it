/**
 * ZUIX - scrollHelper Component
 *
 * @version 1.0.0 (2017-06-07)
 * @author Gene
 *
 */

zuix.controller(function (cp) {
    var watchElements;


    cp.init = function () {
        cp.options().html = false;
        cp.options().css = false;
    };

    cp.create = function () {
        cp.view().on('scroll', scrollCheck);
    };

    var scrollInfo = {
        lastTop: 0,
        timestamp: 0,
        timeout: null
    };

    function scrollCheck(e) {

        var scrollable = e.target;
        var scrollTop;
        var scrollHeight;
        var visibleHeight;

        if (scrollable === document) {
            //var x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
            scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            scrollHeight = document.body.offsetHeight;
            visibleHeight = document.documentElement.offsetHeight;
        } else {
            scrollTop = scrollable.scrollTop;
            scrollHeight = scrollable.scrollHeight;
            visibleHeight = scrollable.offsetHeight;
        }

        var now = new Date().getTime();
        if (scrollInfo.timeout != null)
            clearTimeout(scrollInfo.timeout);
        var endScroll = scrollHeight-scrollTop-visibleHeight;
        var dy = scrollTop - scrollInfo.lastTop;
        if ((endScroll === 0 || scrollTop === 0)) {
            scrollInfo.timeout = setTimeout(function () {
                cp.trigger('scrollHelper', scrollTop === 0 ? 'hitTop' : 'hitBottom');
            }, 100);
        } else if (now - scrollInfo.timestamp > 200) {
            scrollInfo.timestamp = now;
            if (Math.abs(dy) > 20) {
                cp.trigger('scrollHelper', 'moving');
                scrollInfo.lastTop = scrollTop;
            }
        }

        return;

        // TODO: draft code to be reused

        if (watchElements == null)
            watchElements = cp.view('.scroll-watch');
        watchElements.each(function (k, v) {
            if (k != -1) {
                var py = this.position().y;
                var state = this.attr('scroll-watch');
                if (state == null) state = 'exit';
                console.log(state, dy, py, scrollTop, this.position().y, this.get().offsetHeight, scrollable.parentNode.offsetHeight);
                if (dy > 20 && py < scrollable.parentNode.offsetHeight && state.indexOf('enter') !== 0) {
                    // enter bottom
                    this.attr('scroll-watch', 'enter-bottom');
                    this.removeClass('scroll-invisible');
                    this.addClass('scroll-visible');
                    this.find('div').each(function(i,l){
                        this.animateCss('zoomInUp');
                    });
                } else if (dy < 20 && py+this.get().offsetHeight >= scrollable.parentNode.offsetHeight && state.indexOf('exit') !== 0) {
                    // eixt bottom
                    this.attr('scroll-watch', 'exit-bottom');
                    //this.addClass('scroll-invisible');
                    var _this = this;
                    this.find('div').each(function(i,l){
                        this.animateCss('zoomOutDown', {}, function () {
                            _this.addClass('scroll-invisible');
                            _this.removeClass('scroll-visible');
                        });
                    });
                } else if (dy < 20 && py+this.get().offsetHeight >= 0 && state.indexOf('enter') !== 0) {
                    // enter top
                    this.attr('scroll-watch', 'enter-top');
                    this.removeClass('scroll-invisible');
                    this.addClass('scroll-visible');
                    this.find('div').each(function(i,l){
                        this.animateCss('zoomInDown');
                    });
                } else if (dy > 20 && py <= 0 && state.indexOf('exit') !== 0) {
                    this.attr('scroll-watch', 'exit-top');
                    //this.addClass('scroll-invisible');
                    var _this = this;
                    this.find('div').each(function(i,l){
                        this.animateCss('zoomOutUp', {}, function () {
                            _this.addClass('scroll-invisible');
                            _this.removeClass('scroll-visible');
                        });
                    });
                }
            }
        });

    }

});