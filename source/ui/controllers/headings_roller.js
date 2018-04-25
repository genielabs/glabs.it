zuix.controller(function(cp) {
    const HEADER_ROLL_OFFSET = 100;

    let currentIndex = -1;
    let headerLogo;
    let headerTitle;
    let headingTitles = null;
    let scroller;

    cp.create = function() {
        if (cp.options().logo) {
            headerLogo = zuix.field(cp.options().logo);
        } else {
            headerLogo = zuix.field('header_logo');
        }
        if (cp.options().title) {
            headerTitle = zuix.field(cp.options().title).hide();
        } else {
            headerTitle = zuix.field('header_title').hide();
        }
        scroller = cp.options().scroller;
        if (scroller == null) {
            scroller = window;
        }
        zuix.$(scroller)
            .on('scroll', updateHeaderTitle);
    };

    function updateHeaderTitle() {
        if (headingTitles == null) {
            if (cp.options().tag) {
                headingTitles = cp.view().find(cp.options().tag);
            } else {
                headingTitles = cp.view().find('h3');
            }
        }
        const nextOffset = scroller.innerHeight/2;
        for (let i = 0; i < headingTitles.length()-1; i++) {
            const currentHeader = headingTitles.eq(i);
            const nextHeader = headingTitles.eq(i+1);
            const chPosition = currentHeader.position();
            const nhPosition = nextHeader.position();
            if (i !== currentIndex && chPosition.y < 0 && nhPosition.y >= nextOffset) {
                currentIndex = i;
                currentHeader.animateCss('fadeOutUp', function() {
                    this.visibility('hidden');
                });
                headerLogo.animateCss('fadeOutDown', function() {
                    headerLogo.hide();
                });
                headerTitle.html(currentHeader.html())
                    .animateCss('fadeInDown')
                    .show();
            } else if (i !== currentIndex && chPosition.y < HEADER_ROLL_OFFSET && nhPosition.y >= nextOffset) {
                currentIndex = i;
                currentHeader.animateCss('fadeOutUp', function() {
                    this.visibility('hidden');
                });
                headerLogo.animateCss('fadeOutUp', function() {
                    headerLogo.hide();
                });
                headerTitle.html(currentHeader.html())
                    .animateCss('fadeInUp')
                    .show();
            } else if (currentIndex === i && chPosition.y >= HEADER_ROLL_OFFSET) {
                currentIndex = -1;
                headerTitle.animateCss('fadeOutDown', function() {
                    this.hide();
                });
                headerLogo.animateCss('fadeInDown').show();
                currentHeader.animateCss('slideInDown', function() {
                }).visibility('');
            } else if (currentIndex === i && nhPosition.y < nextOffset) {
                currentIndex = -1;
                headerTitle.animateCss('fadeOutUp', function() {
                    this.hide();
                });
                headerLogo.animateCss('fadeInUp').show();
                currentHeader.animateCss('fadeIn', function() {
                }).visibility('');
            } else if (i !== currentIndex && currentHeader.visibility() === 'hidden') {
                currentHeader.visibility('');
            }
        }
    }
});
