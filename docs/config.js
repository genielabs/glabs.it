/* eslint-disable quotes */
(function() {
    zuix.store("config", {
        "title": "G-Labs: The open source Factory.",
        "googleSiteId": "UA-92522504-1",
        "resourcePath": "./app/",
        "libraryPath": "https://genielabs.github.io/zkit/lib/",
        "genielabs.github.io": {
                "resourcePath": "/glabs.it/app/",
                "libraryPath": "https://genielabs.github.io/zkit/lib/"
        }
});

    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js');
        });
    }
})();
