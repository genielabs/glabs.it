zuix.controller(function (cp) {
    var slides = null, current = 0, sliderTimeout = null, SLIDE_TIMEOUT = 5000;

    cp.init = function() {
        cp.options().html = false;
        cp.options().css = false;
    };

    cp.create = function () {
        cp.view()
            .css({
                'overflow': 'hidden',
                'position': 'relative'
            });
        var link = null;
        slides = cp.view().children();
        slides.each(function (i, el) {
            if (i > 0) {
                this.visibility('hidden')
                    .css({
                        'position': 'absolute',
                        'left': 0,
                        'top': 0
                    });
            }
            this.css('width', '100%');
            if (link == null) {
                link = this.attr('data-href');
            }
        });
        if (link != null) {
            cp.view().parent().on('click', function () {
                setTimeout(function () {
                    window.open(link);
                }, 100);
            });
        }
        start(cp);
    };

    function start(cp) {
        if (slides.length() > 1) {
            cp.view()
                .css({
                    'cursor': 'pointer'
                }).on('click', function () {
                    slide();
                });
            sliderTimeout = setTimeout(slide, SLIDE_TIMEOUT);
        }
    }

    function slide() {
        slides.eq(current).animateCss('zoomOutRight', function () {
            this.visibility('hidden');
        });
        current++;
        if (current >= slides.length())
            current = 0;
        slides.eq(current).visibility('visible').animateCss('fadeInLeftBig');
        if (sliderTimeout != null) {
            clearTimeout(sliderTimeout);
        }
        sliderTimeout = setTimeout(slide, SLIDE_TIMEOUT);
    }
});