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

        var scroller = e.target;
        if (scroller === document)
            scroller = scroller.body;
        var now = new Date().getTime();
        // Footer reveal logic
        if (scrollInfo.timeout != null)
            clearTimeout(scrollInfo.timeout);
        var endScroll = scroller.firstChild.offsetHeight-scroller.offsetHeight-scroller.scrollTop;
        if ((endScroll <= 0 || scroller.scrollTop === 0)) {
            scrollInfo.timeout = setTimeout(function () {
                cp.trigger('scrollHelper', scroller.scrollTop === 0 ? 'hitTop' : 'hitBottom');
            }, 100);
        } else if (now - scrollInfo.timestamp > 200) {
            // Footer hide logic
            scrollInfo.timestamp = now;
            var dy = Math.abs(scroller.scrollTop - scrollInfo.lastTop);
            if (dy > 20) {
                cp.trigger('scrollHelper', 'moving');
                scrollInfo.lastTop = scroller.scrollTop;
            }
        }
        watchElements = cp.view('.scroll-watch');
        watchElements.each(function (k, v) {
            if (k != -1) {
                var cy = this.position().y;
                console.log(cy, scroller.scrollTop, this.position().y, this.get().offsetHeight, scroller.parentNode.offsetHeight);
                if (cy < scroller.parentNode.offsetHeight-(this.get().offsetHeight/4) && !this.hasClass('scroll-visible')) {
                    this.removeClass('scroll-invisible');
                    this.addClass('scroll-visible');
                    this.find('div').each(function(i,l){
                        this.animateCss('zoomInUp');
                    });
                }/* else if (cy >= scroller.parentNode.offsetHeight-(this.get().offsetHeight/4) && !this.hasClass('scroll-invisible')) {
                    this.addClass('scroll-invisible');
                    this.find('div').each(function(i,l){
                        this.animateCss('zoomOutDown', {}, function () {
                            this.removeClass('scroll-visible');
                        });
                    });
                }*/
            }
        });

    }

});