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
        });
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
        slides.eq(current).animateCss('fadeOut', function () {
            this.visibility('hidden');
        });
        current++;
        if (current >= slides.length())
            current = 0;
        slides.eq(current).visibility('visible').animateCss('fadeIn');
        if (sliderTimeout != null) {
            clearTimeout(sliderTimeout);
        }
        sliderTimeout = setTimeout(slide, SLIDE_TIMEOUT);
    }
});