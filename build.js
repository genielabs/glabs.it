const staticSite = require('static-site');
let ignoreList = ['css', 'images', 'js', 'lib', '_inc', 'ui', 'content'];
console.log(new Date().toLocaleTimeString(), 'Building started...');
// Copy things in ignore list straight to the build folder
ignoreList.forEach(function (value) {
    copyFolder('./source/'+value, './docs/'+value);
});
// Copy zUIx files
copyFolder('./node_modules/zuix-dist/js', './docs/js/zuix');
// Parse and compile to static all other files
staticSite({
    build: 'docs',
    source: 'source',
    ignore: ignoreList,
    helpers: ['helpers/subfolder_root.js'],
    files: ['html', 'css', 'js', 'md', 'svg'],
    templateEngine: 'helpers/render.js'
}, function(err, stats) {
    // stats -> {pages: [...], source: '', build: '', start: 1434175863750, end: 1434175863770, duration: 20}
    console.log(err, stats);
});
// TODO: should wait sync
// console.log(new Date().toLocaleTimeString(), '... building complete.');

function copyFolder(source, dest) {
    console.log('Copying "'+source+'" to "'+dest+'" ...');
    const path = require('path');
    const ncp = require('ncp').ncp;
    // ncp.limit = 16;
    ncp(path.resolve(__dirname, source), path.resolve(__dirname, dest), function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('... done!');
    });
}