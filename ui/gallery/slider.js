zuix.controller(function (cp) {
    var slides = null, current = 0;

    cp.init = function() {
        cp.options().html = false;
        cp.options().css = false;
    };

    cp.create = function () {
        cp.view()
            .css({
                'overflow': 'hidden',
                'position': 'relative',
            });
        slides = this.view().children();
        slides.each(function (i, el) {
            if (i > 0)
                this.visibility('hidden')
                    .css({
                        'position': 'absolute',
                        'left': 0,
                        'top': 0
                    });
            this.css('width', '100%');
        });
        if (slides.length() > 1)
            setTimeout(slide, 5000);
    };

    function slide() {
        slides.eq(current).animateCss('fadeOutUp', function () {
            this.visibility('hidden');
        });
        current++;
        if (current >= slides.length())
            current = 0;
        slides.eq(current).visibility('visible').animateCss('fadeInUp');
        setTimeout(slide, 5000);
    }
});