zuix.controller(function (cp) {
    var menuOverlayShowing = false, menuButtonShowing = true;
    var menuButton, menuButtonClose, menuOverlay, menuItems;
    var scroller = null, currentOffset = 0;

    cp.create = function () {

        menuButton = cp.field('menu_button').hide()
            .on('click', toggleMenu);
        menuButtonClose = cp.field('menu_button_close').hide()
            .on('click', toggleMenu);
        menuOverlay = cp.field('menu_overlay').visibility('hidden')
            .on('click', toggleMenu);
        menuItems = menuOverlay.find('div[class*="menu-item"]');
        // show floating action button
        menuButton.animateCss('slideInUp').show();

        var scrollerName = cp.view().attr('data-ui-scroller');
        if (scrollerName != null) {
            scroller = zuix.field(scrollerName);
        }
        if (scroller != null) {
            scroller.on('scroll', function (e) {
                var scrollTop = scroller.get().scrollTop;
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
            });
        }

    };

    function toggleMenu() {
        if (!menuOverlayShowing) {
            menuOverlayShowing = true;
            menuButton.animateCss('rubberBand', { duration: '0.3s' });
            menuButtonClose.animateCss('rotateIn', { duration: '0.3s' }, function () {
                menuButton.hide();
            }).show();
            menuOverlay.animateCss('fadeIn', { duration: '0.5s' }).visibility('');
            menuItems.each(function(p,el) {
                if (this.attr('data-ui-transition') != null) {
                    var transition = JSON.parse(this.attr('data-ui-transition'));
                    this.animateCss(transition.in, { duration: '0.5s', delay: transition.delay });
                }
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
            menuOverlay.animateCss('fadeOut', { duration: '0.5s', delay: '0.2s' }, function () {
                this.visibility('hidden');
            });
            menuItems.each(function(p,el) {
                if (this.attr('data-ui-transition') != null) {
                    var transition = JSON.parse(this.attr('data-ui-transition'));
                    this.animateCss(transition.out, { duration: '0.5s', delay: transition.delay });
                }
            });
            menuButton.show();
        }
    }
});