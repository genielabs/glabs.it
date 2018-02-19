zuix.controller(function (cp) {
    var current = 0, sliderTimeout = null, SLIDE_TIMEOUT = 5000;
    /** @typedef {ZxQuery} */
    var imageList = null;

    cp.init = function() {
        cp.options().html = false;
        cp.options().css = false;
    };

    cp.create = function () {
        cp.view().css({
            'overflow': 'hidden',
            'position': 'relative',
            'cursor': 'pointer'
        });
        // thumbnails
        imageList = cp.view().children();
        imageList.each(function (i, el) {
            if (i > 0) {
                this.css({
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'visibility': 'hidden'
                });
            }
            this.css('width', '100%');
        });
        start(cp);
    };

    function start(cp) {
        cp.view().on('click', function () {
            // build JSON image list that will be passed as event argument
            var images = [];
            cp.view('img').each(function(idx, el) {
                images.push({
                    'url': this.attr('data-src-full'),
                    'thumbnail': this.attr('src'),
                    'description': this.attr('title') != null ? this.attr('title') : ''
                });
            });
            cp.trigger('ticker:click', { 'list': images, 'current': current });
        });
        if (imageList.length() > 1) {
            cp.view().on('click', function () {
                showNext();
            });
            sliderTimeout = setTimeout(showNext, SLIDE_TIMEOUT);
        }
    }

    function showNext() {
        imageList.eq(current).animateCss('fadeOut', function () {
            this.visibility('hidden');
        });
        current++;
        if (current >= imageList.length())
            current = 0;
        imageList.eq(current).visibility('visible').animateCss('fadeIn');
        if (sliderTimeout != null) {
            clearTimeout(sliderTimeout);
        }
        sliderTimeout = setTimeout(showNext, SLIDE_TIMEOUT);
    }

});