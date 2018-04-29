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
// shorten zuix object name
var zx = zuix;
// set folder where to look for resources
zx.store('config', {
    resourcePath: './_app/'
});

// Content loading default options
var content_no_css = {
    css: false
};
// Animated splash-cover load options
var cover_load_options = {
    priority: 10,
    ready: function(ctx) {
        // Load Animate CSS extension method for ZxQuery
        zx.using('component', 'https://genielabs.github.io/zuix/kit/extensions/animate_css', function(res, ctx) {
            console.log('AnimateCSS extension loaded.', res, ctx);
            // Start the cover animation
            zx.field('cover').animateCss(function() {
                // Animation ended, hide cover, show header and content
                // last component loaded, hide the splash-screen and show the main page
                zx.field('splash-cover').removeClass('splash-cover');
                zx.$.find('header').show()
                    .animateCss('fadeInDown', {delay: '0.50s', duration: '1.00s'});
                zx.field('main').show()
                    .animateCss('fadeInUpBig', {delay: '0.0s', duration: '1.50s'}, function() {
                        zx.field('splash-cover').hide();
                        if (scrollHelper != null) {
                            // work-around for disappearing title at startup (firefox)
                            scrollHelper.scrollTo(1);
                        }
                    });
            });
        });
    }
};
// Image ticker used for some products: open full screen slide-show on click
var image_ticker_options = {
    autoSlide: true,
    enablePaging: true,
    ready: function(ctx) {
        ctx.on('page:tap', function(e, page) {
            console.log(e, page);
            // TODO: open full-screen in the new media_gallery widget
        });
        const v = zx.$(ctx.view());
        const sizer = document.createElement('div');
        sizer.innerHTML = v.children().eq(0).get().outerHTML;
        sizer.style['visibility'] = 'hidden';
        v.append(sizer);
    }
};

if (clientIsWebCrawler()) {
    // Skip splash-screen if is a web bot or if a anchor is provided with the url
    zx.field('splash-cover').hide();
    zx.field('main').show();
    zx.$.find('header').show();
    init();
} else {
    // Hide content behind the splash-screen
    zx.$.find('header').hide();
    zx.field('main').hide();
}

// Website boot
let bootTimeout = null;
zx.hook('view:process', function(view) {
    // Force opening of all non-local links to a new window
    zx.$('a[href*="://"]').attr('rel', 'noopener');
    // Material Design Light integration - DOM upgrade
    if (/* this.options().mdl && */ typeof componentHandler !== 'undefined') {
        componentHandler.upgradeElements(view.get());
    }
}).hook('componentize:end', function() {
    if (bootTimeout === -1) return; // boot completed
    // Initial resource loading completed...
    if (bootTimeout != null) {
        clearTimeout(bootTimeout);
    }
    // Wait some more for other lazy resources to load
    bootTimeout = setTimeout(function() {
        // Website boot completed
        bootTimeout = -1;
        console.log('Website boot complete.');
        init();
    }, 1500);
});

var scrollHelper; // it will be == null until component is loaded
var headingsRoller;
// Load external scripts if not already packed into the app.bundle.js
function init() {
    // Scroll Helper - Scroll-synchronized animations
    zx.context('scroll-helper', function() {
        // component loaded
        scrollHelper = this.on('scroll:change', function(e, data) {
            switch (data.event) {
                case 'hit-top':
                    // reached top of page
                    if (headingsRoller != null) {
                        headingsRoller.update();
                    }
                    break;
                case 'scroll':
                    // TODO: ...
                    if (data.info.shift.y < 0) {
                        // scrolling up
                    } else if (data.info.shift.y > 0) {
                        // scrolling down
                    }
                    // for all fields of the data.info
                    // object see next paragraph
                    break;
                case 'hit-bottom':
                    // reached end of page
                    // TODO: ...
                    break;
            }
        }).watch('.watch-reveal-left,.watch-reveal-right,.watch-title,.watch-heading', function(el, data) {
            if (el.hasClass('watch-title')) {
                if (data.frame.dy > 0.85) {
                    if (el.css('opacity') !== '0') {
                        el.css('opacity', '0');
                    }
                } else if (data.frame.dy >= 0.25) {
                    el.css('opacity', Math.round((0.85 - data.frame.dy) / 0.6 * 100) / 100);
                } else if (data.frame.dy < 0.25 && el.css('opacity') !== '1') {
                    el.css('opacity', 1);
                }
            } else if (el.hasClass('watch-heading')) {
                if (headingsRoller != null) {
                    headingsRoller.update();
                }
            } else {
                // revealHideBlock(el);
                const vy = scrollHelper.info().viewport.height;
                const visible = vy - el.position().y > vy / 5;
                if (visible) {
                    const options = {duration: '0.75s'};
                    if (!el.hasClass('sh-in')) {
                        el.removeClass('sh-out').addClass('sh-in');
                        if (el.hasClass('watch-reveal-left')) {
                            el.animateCss('fadeInLeft', options).visibility('');
                        } else {
                            el.animateCss('fadeInRight', options).visibility('');
                        }
                    }
                } else {
                    const options = {duration: '0.5s'};
                    if (!el.hasClass('sh-out')) {
                        el.removeClass('sh-in').addClass('sh-out');
                        if (el.hasClass('watch-reveal-left')) {
                            el.animateCss('fadeOutLeft', options, function() {
                                this.visibility('hidden');
                            });
                        } else {
                            el.animateCss('fadeOutRight', options, function() {
                                this.visibility('hidden');
                            });
                        }
                    }
                }
            }
        });
        scrollHelper.scrollTo(1).scrollTo(0);
        window.onresize = function(ev) {
            scrollHelper.scrollTo(-scrollHelper.info().viewport.y+1);
        };
    });
    // Load 'Headings Roller' plugin
    zx.load('controllers/headings_roller', {
        view: zx.field('main'),
        tag: 'h3',
        logo: 'header_logo',
        title: 'header_title',
        ready: function(ctx) {
            headingsRoller = this;
        }
    });
}

// Utility methods

function scrollToAnchor(pageAnchor) {
    const p = zx.field('main');
    let anchorElement;
    let offset = 0;
    if (pageAnchor !== null && pageAnchor.length > 0) {
        anchorElement = p.find('a[id=' + pageAnchor+']');
    }
    if (anchorElement == null || anchorElement.length() === 0) {
        // scroll to top of main
        anchorElement = p.position().y;
    }
    setTimeout(function() {
        scrollHelper.scrollTo(anchorElement, 300);
    }, 300);
}

function contact() {
    document.location.href = ('ma'+'il'+'to:info'+'@'+'glabs.it');
}

function clientIsWebCrawler() {
// eslint-disable-next-line max-len
    const botPattern = '(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)';
    const re = new RegExp(botPattern, 'i');
    const userAgent = navigator.userAgent;
    return re.test(userAgent);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = 'expires='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
