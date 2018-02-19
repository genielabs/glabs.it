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

// Content loading default options
var content_no_css = {
    css: false
};
// Animated splash-cover load options
var cover_load_options = {
    priority: 10,
    ready: function(ctx) {
        // Load Animate CSS extension method for ZxQuery
        zuix.using('component', 'https://genielabs.github.io/zuix/ui/utils/animate_css', function(res, ctx){
            console.log("AnimateCSS extension loaded.", res, ctx);
            // Start the cover animation
            zuix.field('cover').animateCss(function () {
                // Animation ended, hide cover, show header and content
                // last component loaded, hide the splash-screen and show the main page
                zuix.field('splash-cover').removeClass('splash-cover');
                zuix.$.find('header').show()
                    .animateCss('fadeInDown', { delay: '0.50s', duration: '1.00s' });
                zuix.field('main').show()
                    .animateCss('fadeInUpBig', { delay: '0.0s', duration: '1.50s' }, function () {
                        zuix.field('splash-cover').hide();
                    });
            });
        });
    }
};
// Image ticker used for some products: open full screen slide-show on click
var image_ticker_options = {
    ready: function(ctx) {
        ctx.on('ticker:click', function(e) {
            var data = e.detail;
            console.log(data.list, data.current);
            zuix.context('slide-show')
                .items(data.list)
                .current(data.current)
                .open();
        });
    }
};

if (clientIsWebCrawler()) {
    // Skip splash-screen if is a web bot or if a anchor is provided with the url
    zuix.field('splash-cover').hide();
    zuix.field('main').show();
    zuix.$.find('header').show();
    init();
} else {
    // Hide content behind the splash-screen
    zuix.$.find('header').hide();
    zuix.field('main').hide();
}

// Website boot
var bootTimeout = null;
zuix.hook('view:process', function(view){
    // Force opening of all non-local links to a new window
    zuix.$('a[href*="://"]').attr('rel','noopener');
    // Material Design Light integration - DOM upgrade
    if (/*this.options().mdl &&*/ typeof componentHandler !== 'undefined')
        componentHandler.upgradeElements(view.get());
}).hook('componentize:end', function () {
    // Initial resource loading completed...
    if (bootTimeout != null) {
        clearTimeout(bootTimeout);
    }
    // Wait some more for other lazy resources to load
    bootTimeout = setTimeout(function () {
        // Website boot completed
        console.log('Website boot complete.');
        init();
    }, 1000);
});

// Load external scripts if not already packed into the app.bundle.js
function init() {
    // AniJs + plugins
    zuix.using('style', 'https://anijs.github.io/lib/anicollection/anicollection.css', function(res) {
        console.log("AniJS CSS Helper loaded.", res);
    });
    zuix.using('script', 'https://anijs.github.io/lib/anijs/anijs-min.js', function(res) {
        console.log("AniJS Script Helper loaded.", res);
        zuix.using('script', 'https://anijs.github.io/lib/anijs/helpers/dom/anijs-helper-dom-min.js', function (res) {
            console.log("AniJS DOM Helper loaded.", res);
        });
        zuix.using('script', 'https://anijs.github.io/lib/anijs/helpers/scrollreveal/anijs-helper-scrollreveal-min.js', function (res) {
            console.log("AniJS Scroll Reveal Helper loaded.", res);
        });
    });
    // Load 'Headings Roller' plugin
    zuix.load('ui/controllers/headings_roller', {
        view: zuix.field('main'),
        tag: 'h3',
        logo: 'header_logo',
        title: 'header_title'
    });
}

// Utility methods

function scrollToAnchor(pageAnchor) {
    var p = zuix.field('main');
    var anchorElement, offset = 0;
    if (pageAnchor !== null && pageAnchor.length > 0) {
        anchorElement = p.find('a[id=' + pageAnchor+']');
    }
    if (anchorElement != null && anchorElement.length() > 0) {
        // scroll to the element
        offset = anchorElement.position().y;
    } else {
        // scroll to top of main
        offset = p.position().y;
    }
    setTimeout(function () {
        scrollTo(document.documentElement, document.documentElement.scrollTop+offset, 500);
    }, 500);
}
function contact() {
    document.location.href = ('ma'+'il'+'to:info'+'@'+'glabs.it');
}
function clientIsWebCrawler(){
    var botPattern = "(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(botPattern, 'i');
    var userAgent = navigator.userAgent;
    return re.test(userAgent);
}

var scrollEndTs, scrollInterval;
function scrollTo(element, to, duration) {
    if (scrollInterval != null) {
        clearTimeout(scrollInterval);
    }
    var currentTs = Date.now();
    if (duration != null) {
        scrollEndTs = currentTs + duration;
    }
    duration = scrollEndTs-currentTs;
    var difference = to - element.scrollTop;
    if (duration <= 0) {
        element.scrollTop = to;
        return;
    }
    scrollInterval = setTimeout(function() {
        element.scrollTop = element.scrollTop + (difference / (duration/10));
        scrollTo(element, to);
    });
}